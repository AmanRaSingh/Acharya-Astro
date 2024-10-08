import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#051922', color: '#fff', padding: '40px 0', marginTop: '1rem' }}>
            <Grid container spacing={4} justifyContent="center">
                {/* About Us Section */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom sx={{ marginLeft: '1rem' }}>
                        About us
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={{ marginLeft: '1rem' }}>
                        Scientific Analysis in Astrology. Specialist in - Marriage, Professional (Job & Business), Financial and Educational problems.
                    </Typography>
                </Grid>

                {/* Address Section */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Address
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Dr Acharya Senthil Kumar - Best Astrologer in Mumbai, 1st Floor Shop no.107/B,
                    </Typography>
                    <Typography variant="body2">
                        RaghuLeela Mega Mall, Boraspada Rd, Behind Poisar Bus Depot, Jal bhim Sanjay Nagar, Kandivali West, Mumbai, India, 400067
                    </Typography>
                    <Typography variant="body2">
                        Phone Number: 074981 72454
                    </Typography>
                    <Typography variant="body2">
                        <a href="https://g.co/kgs/aEfzHZ9" style={{ color: '#fff', textDecoration: 'none' }}>
                            https://g.co/kgs/aEfzHZ9
                        </a>
                    </Typography>
                </Grid>

                {/* Pages Section */}
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" gutterBottom>
                        Pages
                    </Typography>
                    <Typography variant="body2">
                        Home
                    </Typography>
                    <Typography variant="body2">
                        About
                    </Typography>
                    <Typography variant="body2">
                        Contact
                    </Typography>
                </Grid>

                {/* Subscribe Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Subscribe
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Subscribe to our mailing list to get the latest updates.
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <TextField
                            variant="outlined"
                            placeholder="Email"
                            sx={{ input: { color: '#fff' }, mr: 1, backgroundColor: '#333' }}
                            InputProps={{ sx: { color: '#fff' } }}
                        />
                        <Button variant="contained" color="primary" sx={{ backgroundColor: '#E94560' }}>
                            <Email />
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Footer Bottom Section */}
            <Box sx={{ borderTop: '1px solid #333', mt: 4, pt: 2, textAlign: 'center' }}>
                <Typography variant="body2">
                    © 2024 All Rights Reserved - Dr Acharya Senthil Kumar
                </Typography>
                <Typography variant="body2" sx={{ color: '#E94560' }}>
                    Designed by SEO Prism
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;