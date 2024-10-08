import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';

const services = [
    {
      
        title: "Best Love Astrologer",
        description: "Specialist in - Love Marriage Specialist, Parents Approval, Other any issues in Love, Marriage, Relationship Issues, Expert Second...",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5kjrNfKCU5yoeJq6VusoJ2ep7XBPey1RmQ&s", 
    },
    {
        title: "Career Astrology Mumbai",
        description: "Dr Joshi (Ph.D. Astrology): Best Career Astrologer in Mumbai, Best Career Astrologer in Singapore, Best Career...",
        image: "https://drjoshiastrologer.com/images/services/3-Career%20Astrology%20Mumbai.jpg",
    },
    {
        title: "Marriage Astrology Mumbai",
        description: "DR JOSHI (Ph.D. Astrology) International Astrologer - Best Marriage Astrologer in Mumbai Marriage Astrologer Love Marriage...",
        image: "https://drjoshiastrologer.com/images/services/1-Marriage%20Astrology%20Mumbai.jpg",
    },
    {
        title: "Kundali Match Making",
        description: "Kundli Matching or Horoscope Matching plays vital role at the time of marriage. Hindu Scriptures consider marriage as a holy union planned even before taking birth. Marriage is also one of the most beautiful moments in ones life.",
        image: "https://drjoshiastrologer.com/images/services/4-Kundali%20Match%20Making.png",
    },
];

const OurServices = () => {
    return (
        <Box sx={{ backgroundColor: "#FFFAFA" }}>
            <Container sx={{ paddingTop: '3rem' }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ color: "#E90100", fontWeight: 'bold' }}>
                    Our Best Services
                </Typography>
                <Grid container spacing={3}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <div
                                    style={{
                                        height: '180px',
                                        backgroundImage: `url(${service.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "black" }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default OurServices;
