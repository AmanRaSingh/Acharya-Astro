import React, { useState, useCallback } from 'react';
import { Container, Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, CircularProgress, Alert, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Helper function to fetch data
const fetchData = async (url, params, setLoading, setData, setError) => {
  try {
    setLoading(true);
    const response = await axios.get(url, { params });
    setData(response.data);
  } catch (error) {
    
    setError(`Failed to fetch data from ${url}.`);
  } finally {
    setLoading(false);
  }
};

// Main component
const BirthChartForm = () => {
  const [cityName, setCityName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [timeOfBirth, setTimeOfBirth] = useState('');
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [birthChartData, setBirthChartData] = useState(null);
  const [ashtakvargaData, setAshtakvargaData] = useState(null);
  const [planetDetails, setPlanetDetails] = useState(null);
  const [showContent, setShowContent] = useState('');
  const [language, setLanguage] = useState('en'); // Default to English
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Store cached results
  const [cache, setCache] = useState({
    birthChart: {},
    ashtakvarga: {},
    planetDetails: {}
  });

  // Fetch locations based on city name
  const fetchLocations = useCallback(async () => {
    try {
      const response = await axios.get('https://acharyastro.com:5001/birthChart/locations', {
        params: { cityName }
      });

      if (response.data && typeof response.data === 'object') {
        const flattenedLocations = Object.entries(response.data).flatMap(([name, cities]) =>
          cities.map(city => ({
            name,
            country: city.country,
            latitude: city.latitude,
            longitude: city.longitude
          }))
        );
        setLocations(flattenedLocations);
      } else {
        setLocations([]);
      }
    } catch (error) {
      
      setLocations(["location not found"]);
    }
  }, [cityName]);

  // Handle form submission to fetch locations
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await fetchLocations();
  };

  // Handle generating birth chart
  const handleGenerateBirthChart = async () => {
    if (!selectedLocation) {
      alert('Please select a location.');
      return;
    }

    const cacheKey = `${dateOfBirth}_${timeOfBirth}_${selectedLocation.latitude}_${selectedLocation.longitude}`;
    if (cache.birthChart[cacheKey]) {
      setBirthChartData(cache.birthChart[cacheKey]);
      setShowContent('birthChart');
      return;
    }

    await fetchData(
      'https://acharyastro.com:5001/birthChart/birthchart',
      { dob: formatDate(dateOfBirth), tob: timeOfBirth, lat: selectedLocation.latitude, lon: selectedLocation.longitude, language },
      setLoading,
      (data) => {
        const formattedData = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
        setBirthChartData(formattedData);
        setCache(prevCache => ({
          ...prevCache,
          birthChart: { ...prevCache.birthChart, [cacheKey]: formattedData }
        }));
        setShowContent('birthChart');
      },
      setError
    );
  };

  // Handle fetching planet details
  const handleFetchPlanetDetails = async () => {
    if (!selectedLocation) {
      alert('Please select a location.');
      return;
    }

    const cacheKey = `${dateOfBirth}_${timeOfBirth}_${selectedLocation.latitude}_${selectedLocation.longitude}`;
    if (cache.planetDetails[cacheKey]) {
      setPlanetDetails(cache.planetDetails[cacheKey]);
      setShowContent('planetDetails');
      return;
    }

    await fetchData(
      'https://acharyastro.com:5001/birthChart/planetDetails',
      { dob: formatDate(dateOfBirth), tob: timeOfBirth, lat: selectedLocation.latitude, lon: selectedLocation.longitude, language },
      setLoading,
      (data) => {
        const planetDetailsArray = Object.keys(data.response).map(key => data.response[key]);
        setPlanetDetails(planetDetailsArray);
        setCache(prevCache => ({
          ...prevCache,
          planetDetails: { ...prevCache.planetDetails, [cacheKey]: planetDetailsArray }
        }));
        setShowContent('planetDetails');
      },
      setError
    );
  };

  // Handle fetching Ashtakvarga data
  const handleFetchAshtakvarga = async () => {
    if (!selectedLocation) {
      alert('Please select a location.');
      return;
    }

    const cacheKey = `${dateOfBirth}_${timeOfBirth}_${selectedLocation.latitude}_${selectedLocation.longitude}`;
    if (cache.ashtakvarga[cacheKey]) {
      setAshtakvargaData(cache.ashtakvarga[cacheKey]);
      setShowContent('ashtakvarga');
      return;
    }

    await fetchData(
      'https://acharyastro.com:5001/birthChart/ashtakvarga',
      { dob: formatDate(dateOfBirth), tob: timeOfBirth, lat: selectedLocation.latitude, lon: selectedLocation.longitude, language },
      setLoading,
      (data) => {
        setAshtakvargaData(data);
        setCache(prevCache => ({
          ...prevCache,
          ashtakvarga: { ...prevCache.ashtakvarga, [cacheKey]: data }
        }));
        setShowContent('ashtakvarga');
      },
      setError
    );
  };

  // Format Ashtakvarga data for display
  const formatAshtakvargaData = (data) => {
    if (!data || !data.response) return null;

    const { ashtakvarga_order, ashtakvarga_points, ashtakvarga_total } = data.response;

    const headers = ashtakvarga_order;
    const rows = [
      'Ar', 'Ta', 'Ge', 'Ca', 'Le', 'Vi', 'Li', 'Sc', 'Sa', 'Ca', 'Aq', 'Pi'
    ];

    return rows.map((row, rowIndex) => ({
      zodiacSign: row,
      ...Object.fromEntries(headers.map((header, colIndex) => [header, ashtakvarga_points[colIndex][rowIndex]])),
      total: ashtakvarga_total[rowIndex]
    }));
  };
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          City Finder
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="City Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
          />
          <TextField
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
          <TextField
            label="Time of Birth"
            type="time"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
            value={timeOfBirth}
            onChange={(e) => setTimeOfBirth(e.target.value)}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Select Language</InputLabel>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="ta">Tamil</MenuItem>
              <MenuItem value="ka">Kannada</MenuItem>
              <MenuItem value="te">Telugu</MenuItem>
              <MenuItem value="hi">Hindi</MenuItem>
              <MenuItem value="ml">Malayalam</MenuItem>
              <MenuItem value="mr">Marathi</MenuItem>
              <MenuItem value="bn">Bengali</MenuItem>
              <MenuItem value="sp">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Find City
          </Button>
        </form>
      </Box>

      {locations.length > 0 && (
        <Box mt={4}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Select Location</InputLabel>
            <Select
              value={selectedLocation ? selectedLocation.name : ''}
              onChange={(e) => {
                const location = locations.find(loc => loc.name === e.target.value);
                setSelectedLocation(location);
              }}
            >
              {locations.map((location) => (
                <MenuItem key={location.name} value={location.name}>
                  {location.name} ({location.country})
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" color="secondary" onClick={handleGenerateBirthChart} sx={{ margin: '5px' }}>
            Generate Birth Chart
          </Button>
          <Button variant="contained" color="secondary" onClick={handleFetchAshtakvarga} sx={{ margin: '5px' }}>
            Fetch Ashtakvarga Chart
          </Button>
          <Button variant="contained" color="secondary" onClick={handleFetchPlanetDetails} sx={{ margin: '5px' }}>
            Fetch Planet Details
          </Button>
        </Box>
      )}

      {loading && <CircularProgress />}

      {error && <Alert severity="error">{error}</Alert>}

      {showContent === 'birthChart' && birthChartData && (
        <Box mt={4}>
          <Typography variant="h6">Birth Chart</Typography>
          <Box
            mt={2}
            component="div"
            dangerouslySetInnerHTML={{ __html: birthChartData }}
          />
        </Box>
      )}

      {showContent === 'ashtakvarga' && ashtakvargaData && (
        <Box mt={4}>
          <Typography variant="h6">Ashtakvarga Chart</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Zodiac Sign</TableCell>
                  {ashtakvargaData.response.ashtakvarga_order.map((header, index) => (
                    <TableCell key={index}>{header}</TableCell>
                  ))}
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formatAshtakvargaData(ashtakvargaData).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.zodiacSign}</TableCell>
                    {ashtakvargaData.response.ashtakvarga_order.map((header, colIndex) => (
                      <TableCell key={colIndex}>{row[header]}</TableCell>
                    ))}
                    <TableCell>{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {showContent === 'planetDetails' && planetDetails && (
        <Box mt={4}>
          <Typography variant="h6">Planet Details</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Rashi</TableCell>
                  <TableCell>Nakshatra</TableCell>
                  <TableCell>Nakshatra Pada</TableCell>
                  <TableCell>Lord Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(planetDetails)
                  .filter(key => key >= 1 && key <= 9)  // Filter keys from 1 to 9
                  .map(key => {
                    const planet = planetDetails[key];
                    return (
                      <TableRow key={key}>
                        <TableCell>{planet.name}</TableCell>
                        <TableCell>{planet.zodiac}</TableCell>
                        <TableCell>{planet.nakshatra}</TableCell>
                        <TableCell>{planet.nakshatra_pada}</TableCell>
                        <TableCell>{planet.lord_status}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

    </Container>
  );
};

export default BirthChartForm;
