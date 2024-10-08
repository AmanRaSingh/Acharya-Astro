import React, { useState } from 'react';
import axios from 'axios';
import { Container, Grid, TextField, Button, Typography, Paper, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function KundliMatching() {
  const [boyDetails, setBoyDetails] = useState({
    boy_dob: '',
    boy_tob: '',
    boy_pob: '',
    boy_name: ''
  });

  const [girlDetails, setGirlDetails] = useState({
    girl_dob: '',
    girl_tob: '',
    girl_pob: '',
    girl_name: ''
  });

  const [language, setLanguage] = useState('en'); // Default language as English
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleBoyChange = (e) => {
    const { name, value } = e.target;
    setBoyDetails({ ...boyDetails, [name]: value });
  };

  const handleGirlChange = (e) => {
    const { name, value } = e.target;
    setGirlDetails({ ...girlDetails, [name]: value });
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedBoyDetails = {
      ...boyDetails,
      boy_dob: formatDate(boyDetails.boy_dob),
    };
    const formattedGirlDetails = {
      ...girlDetails,
      girl_dob: formatDate(girlDetails.girl_dob),
    };

    try {
      const params = new URLSearchParams({
        ...formattedBoyDetails,
        ...formattedGirlDetails,
        language, // Add language as a parameter
      });
    
      // Log the request parameters to the console
      console.log('Request Params:', params.toString());
    
      const response = await axios.get(`https://acharyastro.com:5001/kundali/matching?${params.toString()}`);
      
      // Log the response data to the console
      console.log('Response Data:', response.data);
      
      setError('');
      navigate('/result', { state: { result: response.data } });
    } catch (error) {
      // Log any error to the console
      console.error('Error fetching matching details:', error);
    
      setError('Failed to fetch the matching details.');
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem', marginBottom: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Kundali Matching
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Boy's Details */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Boy's Name"
                name="boy_name"
                value={boyDetails.boy_name}
                onChange={handleBoyChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Boy's DOB"
                type="date"
                name="boy_dob"
                value={boyDetails.boy_dob}
                onChange={handleBoyChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="boy_tob"
                type="time"
                value={boyDetails.boy_tob}
                onChange={handleBoyChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Boy's Birth Place"
                name="boy_pob"
                value={boyDetails.boy_pob}
                onChange={handleBoyChange}
                required
              />
            </Grid>

            {/* Girl's Details */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Girl's Name"
                name="girl_name"
                value={girlDetails.girl_name}
                onChange={handleGirlChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Girl's DOB"
                type="date"
                name="girl_dob"
                value={girlDetails.girl_dob}
                onChange={handleGirlChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="girl_tob"
                type="time"
                value={girlDetails.girl_tob}
                onChange={handleGirlChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Girl's POB"
                name="girl_pob"
                value={girlDetails.girl_pob}
                onChange={handleGirlChange}
                required
              />
            </Grid>

            {/* Language Selection */}
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
  <InputLabel>Language</InputLabel>
  <Select
    value={language}
    onChange={handleLanguageChange}
    label="Language"
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

            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        {error && (
          <Typography variant="body1" color="error" style={{ marginTop: '1rem' }}>
            {error}
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default KundliMatching;
