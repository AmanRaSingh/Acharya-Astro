import React, { useState } from 'react';
import { TextField, Grid, Typography, Container, Box, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Navbar from '../Navbar/Navbar';

const ContactUs = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.firstName) tempErrors.firstName = "First Name is required.";
    if (!formValues.lastName) tempErrors.lastName = "Last Name is required.";
    if (!formValues.mobile) tempErrors.mobile = "Mobile No. is required.";
    if (!formValues.email) tempErrors.email = "Email is required.";
    if (!formValues.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <>
      <Navbar />
      <Typography sx={{
        height: "4.5rem",
        width: "100%",
        opacity: "0.8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        backgroundColor: "#E90100",
        color: "#ffffff",
        fontWeight: "700"
      }}>
        Contact Us
      </Typography>
      <Container sx={{ width: "100%", margin: 'auto', padding: 0, overflow: 'hidden' }}>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={4} sx={{ mt: 2, width: '100%', boxSizing: 'border-box',border:"2px solid red" }}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ mb: 3, color: "black", fontWeight: 'bold' }}>
                Ask Your Any Questions
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    required
                    value={formValues.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    sx={{ minHeight: '70px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    required
                    value={formValues.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    sx={{ minHeight: '70px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Mobile No."
                    name="mobile"
                    fullWidth
                    required
                    value={formValues.mobile}
                    onChange={handleChange}
                    error={!!errors.mobile}
                    helperText={errors.mobile}
                    sx={{ minHeight: '70px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    required
                    value={formValues.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{ minHeight: '70px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    fullWidth
                    required
                    multiline
                    rows={10}
                    value={formValues.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    sx={{ minHeight: '120px' }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'left', mt: 2 }}>
                  <Button variant="contained" color="primary" size="large" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: '8px', height: '100%', mt: '3.4rem' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1, color: "black", fontWeight: 'bold' }}>
                  <LocationOnIcon sx={{ color: 'red', mr: 1 }} />
                  Address
                </Typography>
                <Typography variant="body2">
                  Dr Acharya Senthil Kumar - Best Astrologer in Mumbai, 1st Floor Shop no. 107/B, Raghuleela Mega Mall, Boraspada Rd,
                  Behind Poisar Bus Depot, Jai bhim Sanjay Nagar, Kandivali West, Mumbai, India, 400067.
                  Phone Number: 7200033010
                  <br />
                  <a href="https://g.co/kgs/aEfzHZ9">https://g.co/kgs/aEfzHZ9</a>
                </Typography>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 1, color: "black", fontWeight: 'bold' }}>
                  <PhoneIcon sx={{ color: 'red', mr: 1 }} />
                  Contact
                </Typography>
                <Typography variant="body2">
                  Phone: +91 7200044010
                  <br />
                  Email: acharyasenthilkumar@gmail.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default ContactUs;