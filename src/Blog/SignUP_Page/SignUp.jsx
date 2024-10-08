


import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
// import AcharyaLogo from "../Banner/Img/AcharyaLogo.jpg";
import AcharyaLogo from "./AcharyaLogo.jpg"
import Navbar from '../Navbar/Navbar';

const SignUp = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        console.log('Data being sent:', data);

        try {
            const response = await axios.post('https://acharyastro.com:5001/auth/register', data);
            console.log('Registration Successful:', response.data);
            alert('Registration Successful!');
            reset();
        } catch (error) {
            if (error.response) {
                console.log('Error response:', error.response);

                const errorMessage = error.response.data?.message || '';

                if (errorMessage.includes('Email already exists')) {
                    alert('Registration Failed: This email is already registered. Please try a different email.');
                } else {
                    console.error('Registration Error - Response:', errorMessage);
                    alert(`Registration Failed: ${errorMessage || 'Please try again.'}`);
                    reset();
                }
            } else if (error.request) {
                console.error('Registration Error - Request:', error.request);
                alert('Registration Failed: No response from server. Please try again later.');
                reset();
            } else {
                console.error('Registration Error - Message:', error.message);
                alert(`Registration Failed: ${error.message}`);
                reset();
            }
        }
    };

    return (
        <>
        <Navbar/>
            <Box sx={{ height: { lg: "84vh", xs: "100vh" }, width: "100%", display: "flex", flexDirection: { xs: "column", md: "row", sm: "row" }, justifyContent: "space-between" }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: "30vh", md: "60vh", lg: "84vh" },
                    width: { xs: "100%", md: "100%", lg: "50%" },
                    overflow: "hidden"
                }}>
                    <img src={AcharyaLogo}
                        alt="Acharya Logo"
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                        }} />
                </Box>
                <Box sx={{ height: { lg: "84vh", xs: "70vh" }, width: { lg: "45%", xs: "100%" }, display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", backgroundColor: "#FFD180", borderRadius: "5px" }}>
                    <Box sx={{ height: { lg: "72vh", xs: "60vh" }, width: { lg: "80%", xs: "90%" }, backgroundColor: "#ffffff", borderRadius: "10px", paddingTop: "1rem" }}>
                        <Typography sx={{ padding: "1rem", fontSize: "1.5rem", fontWeight: "800" }}>WELCOME TO ACHARYA ASTRO</Typography>

                        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ height: "22rem", width: "93%", padding: "1rem", display: "flex", flexDirection: "column" }}>
                            
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: "1rem",
                                    alignItems: "center",
                                    width: "90%",
                                    margin: "auto"
                                }}
                            >
                                <Typography sx={{ minWidth: "100px", fontWeight: "600" }}>Name:</Typography>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Name is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Name"
                                            variant="outlined"
                                            placeholder="Enter your name"
                                            sx={{ width: "100%" }}
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                        />
                                    )}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: "1rem",
                                    alignItems: "center",
                                    width: "90%",
                                    margin: "auto"
                                }}
                            >
                                <Typography sx={{ minWidth: "100px", fontWeight: "600" }}>Email:</Typography>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Email"
                                            variant="outlined"
                                            placeholder="Enter your email"
                                            sx={{ width: "100%" }}
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                        />
                                    )}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: "1rem",
                                    alignItems: "center",
                                    width: "90%",
                                    margin: "auto"
                                }}
                            >
                                <Typography sx={{ minWidth: "100px", fontWeight: "600" }}>Password:</Typography>
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Password is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            placeholder="Enter your password"
                                            sx={{ width: "100%" }}
                                            error={!!errors.password}
                                            helperText={errors.password?.message}
                                        />
                                    )}
                                />
                            </Box>

                            <Button type="submit" variant="contained" sx={{ width: "100%", backgroundColor: "#FFD180", height: "3rem", fontSize: "1.5rem", fontWeight: "600", borderRadius: "5px", marginTop: "2rem" }}>
                                Sign Up
                            </Button>

                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default SignUp;

