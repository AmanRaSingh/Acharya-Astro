import React from 'react';
import Navbar from './Navbar/Navbar';
import FirstPage from './First-Page/FirstPage';
import Kundali from './Kundali_Page/Kundali';
import Review from './Review/Review';
import Blogs from './Blogs/Blogs';
import Banner from './Banner/Banner';
import OurServices from './OurServices/OurServices';
import Footer from './Footer/Footer';
import Horoscope from './Horoscope/Horoscope';
import KundliMatching from './Kundali_Page/KundliMatching';
import TodayPanchang from './Panchang/TodayPanchang';
import BirthChartForm from './BirthChartForm';

import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleHoroscopeClick = () => {
        navigate('/horoscope');
    };

    return (
        <>
            <Navbar />
            <Banner />
            <FirstPage />
            <Box>
            <Typography sx={{
                    width: { xs: "100%", sm: "90%", md: "80%", lg: "85%" },
                    backgroundColor: "#E90100",
                    height: {lg:"2.5rem",md:"3rem",sm:"3rem",xs:"5rem"},
                    borderRadius: "1rem",
                    color: "#ffffff",
                    fontWeight: "600",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto",
                    textAlign:"center",
                
                }}>
                    ACHARYA ASTRO SERVICES & CONSULTANT
                </Typography>
            </Box>
            
            {/* Cards Section */}
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
                <Card sx={{ maxWidth: 300, minWidth: 250,mt:'1rem' }}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            Horoscope
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Get detailed insights into your life based on your zodiac sign and planetary positions.
                        </Typography>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => navigate('/horoscope')} 
                            sx={{ marginTop: '10px' }}
                        >
                            View Horoscope
                        </Button>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 300, minWidth: 250,mt:'1rem' }}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            Kundli
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Explore your Kundli to understand the influence of planetary positions on your life.
                        </Typography>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => navigate('/kundli-matching')} 
                            sx={{ marginTop: '10px' }}
                        >
                            View Kundli
                        </Button>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 300, minWidth: 250,mt:'1rem' }}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            Birth Chart
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Analyze your birth chart to gain insights into your personal traits and destiny.
                            lets see your birth chart with acharyastro.
                        </Typography>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => navigate('/birth-chart')} 
                            sx={{ marginTop: '10px' }}
                        >
                            View Birth Chart
                        </Button>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 300, minWidth: 250,mt:'1rem' }}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            Today’s Panchang
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Check today’s Panchang to find out important timings and celestial events
                            check panchang everyday.
                        </Typography>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => navigate('/today-panchang')} 
                            sx={{ marginTop: '10px' }}
                        >
                            View Panchang
                        </Button>
                    </CardContent>
                </Card>
            </Box>

            {/* Other Sections */}
         
          
       
            <OurServices />
            <Review />
            <Blogs />
            <Footer />
        </>
    );
}

export default LandingPage;
