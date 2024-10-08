import React from 'react';
import { Box, TextField, Typography, Button, Link } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AcharyaLogo from "./AcharyaLogo.jpg";
import Navbar from '../Navbar/Navbar';

const LoginPage = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();  // Hook to navigate programmatically

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://acharyastro.com:5001/auth/login', {
                email: data.email,
                password: data.password
            });

            if (response.status === 200) {
                console.log('Login successful:', response.data);
                alert("Login successfully");
                reset(); // Reset form fields after successful login
                navigate('/');  // Redirect to homepage
            }
        } catch (error) {
            console.error('Login failed:', error);

            if (error.response && error.response.status === 404) {
                alert("You don't have an account. Please register.");
            } else {
                alert("Login failed. Incorrect details.");
            }

            reset(); // Reset form fields after failed login
        }
    };

    return (
        <>
            <Navbar />
            <Box sx={{ height: { lg: "84vh", xs: "100vh" }, width: "100%", border: "px solid blue", display: "flex", flexDirection: { xs: "column", md: "row", sm: "row" } }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "px solid red",
                    height: { xs: "30vh", md: "90vh", lg: "84vh" },
                    width: { xs: "100%", md: "100%", lg: "50%" },
                    overflow: "hidden"
                }}>
                    <img src={AcharyaLogo}
                        alt="Acharya Logo"
                        style={{
                            height: '100%',
                            width: { xs: "100%", md: "100%", lg: "50%" },
                            objectFit: 'cover',
                        }} />
                </Box>
                <Box sx={{ height: { lg: "84vh", xs: "70vh" }, width: { lg: "50%", xs: "100%" }, border: "px solid red", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", backgroundColor: "#FFD180", borderRadius: "5px" }}>
                    <Box sx={{ height: { lg: "72vh", xs: "60vh" }, width: { lg: "80%", xs: "90%" }, border: "px solid blue", backgroundColor: "#ffffff", borderRadius: "10px", paddingTop: "1rem" }}>
                        <Typography sx={{ padding: "1rem", fontSize: "1.5rem", fontWeight: "800" }}>WELCOME TO ACHARYA ASTRO</Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ height: "22rem", width: "93%", border: "px solid red", padding: "1rem", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ display: 'flex', gap: "1rem", alignItems: "center", width: "90%", margin: "auto" }}>
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
                            <Box sx={{ display: 'flex', gap: "1rem", alignItems: "center", width: "90%", margin: "auto" }}>
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
                                Login
                            </Button>
                            <Typography variant="body2" align="center" sx={{ marginTop: "1rem" }}>
                                Don't have an account?{' '}
                                <Link href="#" underline="none" sx={{ color: '#00aaff' }}>
                                    Register Now
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default LoginPage;
