import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const services = [
    {
        title: "Dr Acharya Senthil Kumar - Best Astrologer In India, Best Career Astrologer In India, Best Marriage Astrologer In India",
        description: "Dr Acharya Senthil Kumar - best astrologer in india, best astrologer in delhi, best astrologer in bangalore, best astrologer in hyderabad, best astrologer in chennai, best astrologer in kolkata, best astrologer in bhopal, best astrologer in indore, best",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDc9uuYzN_AW0OsN8WJNLabMjanSYUKHnMXQ&s", // Add the appropriate image URL here
    },
    {
        title: "Dr Acharya Senthil Kumar- Best Astrologer In Mumbai, Best Career Astrologer In Mumbai, Best Marriage Astrologer In Mumbai",
        description: "Dr Acharya Senthil Kumar is - best astrologer in mumbai, he is best career astrologer in mumbai, he is best marriage astrologer in mumbai, top astrologer in mumbai",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRog5Fw_sxtS5rhTA6BzRVxUWu8hAnXFO9h4Q&s", // Add the appropriate image URL here
    },
    {
        title: "Dr Acharya Senthil Kumar - Best Astrologer In United States (USA)",
        description: "Dr Acharya Senthil Kumar - besr astrologer in usa, best astrologer in canada, best astrologer in new york, best career astrologer in usa, best marriage astrologer in usa,",
        image: "https://drjoshiastrologer.com/images/services/1-Marriage%20Astrology%20Mumbai.jpg", // Add the appropriate image URL here
    },
];

const Blogs = () => {
    return (
        <Box sx={{ backgroundColor: "#FFFAFA", minHeight: "90vh" }}>
            <Container sx={{ marginTop: '0' }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ color: "#E90100", fontWeight: 'bold' }}>
                    Our Blogs
                </Typography>
                <Grid container spacing={3}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.3s ease-in-out',
                                }
                            }}>
                                <div style={{
                                    height: '180px',
                                    backgroundColor: '#f0f0f0',
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }} />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom sx={{ color: "#E90100", fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                                <Button variant="contained" sx={{ mb: 2, alignSelf: 'center' }}>Read More</Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Blogs;
