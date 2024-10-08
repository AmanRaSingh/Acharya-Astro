

import React, { useState } from 'react';
import axios from 'axios';
import { Container, Grid, TextField, Button, Typography, Paper } from '@mui/material';

function App() {
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

  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleBoyChange = (e) => {
    const { name, value } = e.target;
    setBoyDetails({ ...boyDetails, [name]: value });
  };

  const handleGirlChange = (e) => {
    const { name, value } = e.target;
    setGirlDetails({ ...girlDetails, [name]: value });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Fixed template literal syntax
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Format the dates before sending
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
      });
  
      const response = await axios.get(`https://astro2-v7z3.onrender.com/kundali/matching?${params.toString()}`); // URL should be in quotes
      console.log(response);
      setResult(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch the matching details.');
      setResult(null);
    }
  };

  const renderResult = (key, value) => {
    if (value === null || value === undefined) {
      return null; // Skip rendering if value is null or undefined
    }
    if (typeof value === 'object') {
      // If the value is an object, render its key-value pairs recursively
      return (
        <div key={key}>
          <Typography variant="h6">{key.replace('_', ' ')}</Typography>
          <Grid container spacing={2}>
            {Object.keys(value).map((subKey) => renderResult(subKey, value[subKey]))}
          </Grid>
        </div>
      );
    }
    return (
      <Grid item xs={12} sm={6} key={key}>
        <Paper style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
          <Typography variant="h6">{key.replace('_', ' ')}</Typography>
          <Typography variant="body1">{value}</Typography>
        </Paper>
      </Grid>
    );
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Kundali Matching
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6">Boy's Details</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                type="date"
                name="boy_dob"
                value={boyDetails.boy_dob}
                onChange={handleBoyChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Time of Birth"
                type="time"
                name="boy_tob"
                value={boyDetails.boy_tob}
                onChange={handleBoyChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Place of Birth"
                type="text"
                name="boy_pob"
                value={boyDetails.boy_pob}
                onChange={handleBoyChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                type="text"
                name="boy_name"
                value={boyDetails.boy_name}
                onChange={handleBoyChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Girl's Details</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                type="date"
                name="girl_dob"
                value={girlDetails.girl_dob}
                onChange={handleGirlChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Time of Birth"
                type="time"
                name="girl_tob"
                value={girlDetails.girl_tob}
                onChange={handleGirlChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Place of Birth"
                type="text"
                name="girl_pob"
                value={girlDetails.girl_pob}
                onChange={handleGirlChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                type="text"
                name="girl_name"
                value={girlDetails.girl_name}
                onChange={handleGirlChange}
                fullWidth
                required
              />
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
        {result && (
          <div style={{ marginTop: '2rem' }}>
            <Typography variant="h6">Matching Results:</Typography>
            <Grid container spacing={2}>
              {Object.keys(result).map((key) => renderResult(key, result[key]))}
            </Grid>
          </div>
        )}
      </Paper>
    </Container>
  );
}

export default App; // Fixed non-breaking space character
