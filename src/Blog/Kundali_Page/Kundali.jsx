import { Box, Typography, Button } from '@mui/material';
import Input from '@mui/joy/Input';
import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Kundali = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const [currentTime, setCurrentTime] = useState({
        hours: '',
        minutes: '',
        seconds: ''
    });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            setCurrentTime({
                hours,
                minutes,
                seconds
            });
        };

        updateTime(); // Initial call
        const intervalId = setInterval(updateTime, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [currentDate, setCurrentDate] = useState({
        day: '',
        month: '',
        year: ''
    });

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const day = now.getDate().toString().padStart(2, '0');
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const year = now.getFullYear();
            setCurrentDate({
                day,
                month,
                year
            });
        };

        updateDate();
        const intervalId = setInterval(updateDate, 60000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <Box
            sx={{
                height: {
                    lg: "65vh",
                    md: "auto",
                    sm: "auto",
                    xs: "auto"
                },
                width: "100%",
                backgroundColor: "#FFD180",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Box
                sx={{

                    width: "85%",
                    display: "flex",
                    flexDirection: {
                        lg: 'row',
                        md: 'column',
                        sm: 'column',
                        xs: 'column'
                    },
                    gap: '1.5rem',
                }}
            >

                {/* -------------------------Kundli / Birth Chart-------------- */}

                <Box
                    sx={{
                        height: {
                            lg: "64vh",
                            md: "20vh",
                            sm: "30vh",
                            xs: "63vh"
                        },
                        flex: 1,
                        minWidth: "230px",
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        padding: '1rem',
                        boxSizing: 'border-box',
                        margin: "auto",
                        width: { xs: "100%", sm: "100%", md: "95%", lg: "99%" },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                lg: "2rem",
                                md: "1.5rem",
                                sm: "1.25rem",
                                xs: "1rem"
                            },
                            textAlign: "center",
                            borderBottom: "1px solid grey",
                            paddingBottom: '0.5rem'
                        }}
                    >
                        Kundli / Birth Chart
                    </Typography>

                    <Box sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: "space-between", marginTop: '1rem',
                        height: { lg: "20rem", md: "25rem", sm: "22rem", xs: "20rem" }
                    }}>
                        <Typography sx={{ fontSize: "1rem", fontWeight: "600" }}>
                            Enter Birth Details
                        </Typography>
                        <Input placeholder="Name" variant="outlined" fullWidth />
                        <FormControl fullWidth>
                            <Select
                                value={selectedValue}
                                onChange={handleChange}
                                sx={{ height: "2.3rem" }}
                            >
                                <MenuItem value="1">Male</MenuItem>
                                <MenuItem value="2">Female</MenuItem>
                            </Select>
                        </FormControl>


                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentDate.day}
                                readOnly
                            />
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentDate.month}
                                readOnly
                            />
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentDate.year}
                                readOnly
                            />
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentTime.hours}
                                readOnly
                            />
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentTime.minutes}
                                readOnly
                            />
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentTime.seconds}
                                readOnly
                            />
                        </Box>


                        <Input placeholder="Birth Place" variant="outlined" fullWidth />
                        <NavLink to={"/get-kundali"}>
                            <button style={{ padding: "5px", height: "2.5rem", width: "100%", backgroundColor: "#FF6F00", color: "white", border: "none", borderRadius: "4px", marginTop: '1rem' }}>
                                GET KUNDLI
                            </button>
                        </NavLink>
                    </Box>
                </Box>


                {/* --------------------  Kundli Matching---------------- */}
                <Box
                    sx={{
                        height: {
                            lg: "64vh",
                            md: "40vh",
                            sm: "50vh",
                            xs: "60vh"
                        },
                        flex: 1,
                        minWidth: "250px",
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        padding: '1rem',
                        margin: "auto",
                        boxSizing: 'border-box',
                        width: { xs: "100%", sm: "100%", md: "95%", lg: "99%" },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                lg: "2rem",
                                md: "1.5rem",
                                sm: "1.25rem",
                                xs: "1rem"
                            },
                            textAlign: "center",
                            borderBottom: "1px solid grey",
                            paddingBottom: '0.5rem'
                        }}
                    >
                        Kundli Matching
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:"space-between", marginTop: '1rem', height: { lg: "20rem", md: "25rem", sm: "22rem", xs: "20rem" } }}>
                        <Typography sx={{ fontSize: "1rem", fontWeight: "600" }}>
                            Enter Boy's Details
                        </Typography>
                        <Input placeholder="Name" variant="outlined" fullWidth />


                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentDate.day}
                                readOnly
                            />
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentDate.month}
                                readOnly
                            />
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentDate.year}
                                readOnly
                            />
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentTime.hours}
                                readOnly
                            />
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentTime.minutes}
                                readOnly
                            />
                            <Input
                                variant="outlined"
                                sx={{ width: '30%' }}
                                value={currentTime.seconds}
                                readOnly
                            />
                        </Box>

                        <Input placeholder="Birth Place" variant="outlined" fullWidth />

                        <Typography sx={{ fontSize: "1rem", fontWeight: "600", textAlign: "center", marginTop: '1rem' }}>
                            Enter girl's detail on next page
                        </Typography>
                        <button style={{ padding: "5px", height: "2.5rem", width: "100%", backgroundColor: "#FF6F00", color: "white", border: "none", borderRadius: "4px", marginTop: '1rem' }}>
                            CONTINUE
                        </button>
                    </Box>
                </Box>


              

                <Box sx={{
                    height: {
                        lg: "64vh",
                        md: "40vh",
                        sm: "55vh",
                        xs: "70vh"
                    },
                    flex: 1,
                    minWidth: "250px",
                    backgroundColor: "#ffffff",
                    borderRadius: "5px",
                    padding: '1rem',
                    margin: "auto",
                    boxSizing: 'border-box',
                    width: { xs: "100%", sm: "100%", md: "95%", lg: "99%" },
                }}>
                    <Typography sx={{ fontSize: "2rem", display: "flex", justifyContent: "center", borderBottom: "1px solid grey" }}>
                        Panchang
                    </Typography>
                    <Box sx={{ height: "53vh", margin: "", width: "100%", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "1rem", fontWeight: "600", }}>
                            New Delhi, India (17 August, 2024)
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            Tithi:  Shukla Dwadashi upto 08:07:57
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            Month Amanta: Shravan
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            Month Purnimanta: Shravan
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            Day: Shukravara | Samvat: 2081
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            Nakshatra: Poorva Ashadha upto 11:49:39
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            Yoga: Priti upto 10:47:03
                        </Typography>
                        <Typography sx={{ fontSize: "14px", textAlign: "center" }}>
                            Karan: Baalav upto 08:07:57, Kolav upto 19:05:22
                        </Typography>
                        <NavLink to="/panchang">
                            <button style={{ padding: "5px", height: "2.5rem", width: "100%", backgroundColor: "#FF6F00", color: "white", border: "none", borderRadius: "4px", marginTop: '1rem',width:"100%",border:"2px solid red" }}>
                                TODAY PANCHANG
                            </button>
                        </NavLink>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Kundali;
