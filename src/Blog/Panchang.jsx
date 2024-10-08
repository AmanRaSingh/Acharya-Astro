import React, { useState } from 'react';
import { Grid, Typography, Paper, Box, TextField, Button, MenuItem, Select, FormControl, InputLabel, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';

// Custom hook for fetching Panchang data
const usePanchang = (date, time, city, language) => {
  const [panchangData, setPanchangData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPanchang = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://acharyastro.com:5001/panchang/panchang`, {
        params: { date, time, cityName: city, language }
      });
      
      if (response.data.success) {
        setPanchangData(response.data.data.response);
      } else {
        setError('No data found or API error.');
      }
    } catch (error) {
      setError('Error fetching panchang data.');
    } finally {
      setLoading(false);
    }
  };

  return { panchangData, loading, error, fetchPanchang };
};

// Format date from yyyy-mm-dd to dd/mm/yyyy
const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};

const TodayPanchang = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [language, setLanguage] = useState('en'); // Default to English

  const { panchangData, loading, error, fetchPanchang } = usePanchang(date, time, city, language);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (date && time && city) {
      // Log the raw input values
      console.log('Date:', date);
      console.log('Time:', time);
      console.log('City:', city);
      console.log('Language:', language);

      // Convert the date to dd/mm/yyyy format
      const formattedDate = formatDate(date);

      // Log the formatted date for debugging
      console.log('Formatted Date:', formattedDate);

      // Fetch Panchang data with formatted date
      fetchPanchang(formattedDate);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box padding="20px" marginTop="20px">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Panchang Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center" marginBottom="20px">
            <TextField
              label="Date (yyyy-mm-dd)"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              margin="normal"
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Time (hh:mm)"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              margin="normal"
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="City"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              margin="normal"
              required
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Language</InputLabel>
              <Select
                value={language}
                onChange={handleLanguageChange}
                label="Language"
                style={{ marginTop: '10px' }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="ta">Tamil</MenuItem>
                <MenuItem value="ka">Kannada</MenuItem>
                <MenuItem value="te">Telugu</MenuItem>
                <MenuItem value="hi">Hindi</MenuItem>
                <MenuItem value="ml">Malayalam</MenuItem>
                
              
                <MenuItem value="sp">Spanish</MenuItem>
                <MenuItem value="fr">French</MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Fetch Panchang
            </Button>
          </Box>
        </form>
      </Paper>

      {loading && <CircularProgress style={{ display: 'block', margin: '20px auto' }} />}
      
      {error && <Alert severity="error" style={{ marginTop: '20px' }}>{error}</Alert>}

      {!loading && panchangData && (
        <Box marginTop="20px">
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" align="center" gutterBottom>
              Panchang for {panchangData.date}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Tithi</Typography>
                <Typography variant="body2">{panchangData.tithi?.name || 'N/A'}</Typography>
                <Typography variant="body2">Start: {new Date(panchangData.tithi?.start).toLocaleString() || 'N/A'}</Typography>
                <Typography variant="body2">End: {new Date(panchangData.tithi?.end).toLocaleString() || 'N/A'}</Typography>
                <Typography variant="body2">Type: {panchangData.tithi?.type || 'N/A'}</Typography>
                <Typography variant="body2">Meaning: {panchangData.tithi?.meaning || 'N/A'}</Typography>
                <Typography variant="body2">Special: {panchangData.tithi?.special || 'N/A'}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Nakshatra</Typography>
                <Typography variant="body2">{panchangData.nakshatra?.name || 'N/A'}</Typography>
                <Typography variant="body2">Start: {new Date(panchangData.nakshatra?.start).toLocaleString() || 'N/A'}</Typography>
                <Typography variant="body2">End: {new Date(panchangData.nakshatra?.end).toLocaleString() || 'N/A'}</Typography>
                <Typography variant="body2">Lord: {panchangData.nakshatra?.lord || 'N/A'}</Typography>
                <Typography variant="body2">Meaning: {panchangData.nakshatra?.meaning || 'N/A'}</Typography>
                <Typography variant="body2">Special: {panchangData.nakshatra?.special || 'N/A'}</Typography>
                <Typography variant="body2">Summary: {panchangData.nakshatra?.summary || 'N/A'}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Karana</Typography>
                <Typography variant="body2">{panchangData.karana?.name || 'N/A'}</Typography>
                <Typography variant="body2">Start: {new Date(panchangData.karana?.start).toLocaleString() || 'N/A'}</Typography>
                <Typography variant="body2">End: {new Date(panchangData.karana?.end).toLocaleString() || 'N/A'}</Typography>
                <Typography variant="body2">Type: {panchangData.karana?.type || 'N/A'}</Typography>
                <Typography variant="body2">Special: {panchangData.karana?.special || 'N/A'}</Typography>
                <Typography variant="body2">Next Karana: {panchangData.karana?.next_karana || 'N/A'}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Yoga</Typography>
                <Typography variant="body2">{panchangData.yoga?.name || 'N/A'}</Typography>
                <Typography variant="body2">Start: {new Date(panchangData.yoga?.start).toLocaleString() || 'N/A'}</Typography>
                <Typography variant="body2">End: {new Date(panchangData.yoga?.end).toLocaleString() || 'N/A'}</Typography>
                <Typography variant="body2">Meaning: {panchangData.yoga?.meaning || 'N/A'}</Typography>
                <Typography variant="body2">Special: {panchangData.yoga?.special || 'N/A'}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Auspicious Timings</Typography>
                <Typography variant="body2">
                  Abhijit: {panchangData.advanced_details?.abhijit_muhurta?.start || 'N/A'} to {panchangData.advanced_details?.abhijit_muhurta?.end || 'N/A'}
                </Typography>
               
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Inauspicious Timings (Ashubha Muhurat)</Typography>
                <Typography variant="body2">
                  Abhijit: {panchangData.advanced_details?.abhijit_muhurta?.start || 'N/A'} to {panchangData.advanced_details?.abhijit_muhurta?.end || 'N/A'}
                </Typography>
                <Typography variant="body2">
                Rahu: {panchangData.rahukaal || 'N/A'} 
                </Typography>
                <Typography variant="body2">
                Gulika Kaal: {panchangData.gulika  || 'N/A'} 
                </Typography>
                <Typography variant="body2">
                Yamakanta: {panchangData.yamakanta || 'N/A'} 
                </Typography>
               
              </Grid>


              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}> Hindu Month And Year</Typography>
                <Typography variant="body2">
                Vikram Samvat: {panchangData.advanced_details?.years?.vikram_samvaat || 'N/A'}
                </Typography>
                <Typography variant="body2">
                Shaka Samvat: {panchangData.advanced_details?.years?.saka || 'N/A'} {panchangData.advanced_details?.years?.saka_samvaat_name || 'N/A'}
                </Typography>
                <Typography variant="body2">
                Month Purnimanta: {panchangData.advanced_details?.masa?.purnimanta_name || 'N/A'} 
                </Typography>
                <Typography variant="body2">
                Kali Samvat: {panchangData.advanced_details?.years?.kali || 'N/A'}
                </Typography>
                
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default TodayPanchang;
