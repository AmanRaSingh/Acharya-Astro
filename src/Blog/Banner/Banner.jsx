import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Banner = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        questions: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.firstName = form.firstName ? "" : "This field is required.";
        tempErrors.lastName = form.lastName ? "" : "This field is required.";
        tempErrors.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(form.email) ? "" : "Email is not valid.";
        tempErrors.phone = form.phone ? "" : "This field is required.";
        tempErrors.questions = form.questions ? "" : "This field is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully");
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                questions: ''
            });
            setErrors({});
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Row in desktop, column in mobile
                alignItems: { xs: 'center', md: 'flex-start' },
                justifyContent: 'space-between',
                padding: '2rem',
                backgroundColor: '#E90100',
                color: '#fff',
                height: { xs: 'auto', md: '100vh' },
                overflow: 'auto',
                border: "1px solid green"
            }}
        >
            <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, width: "90%", margin: "auto", justifyContent: 'space-between' }}>
                {/* Left content (Heading and Button) */}
                <Box sx={{ flex: 1, mt: '1rem', textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{ color: '#FFD700', marginBottom: '1rem', marginLeft: { xs: 0, md: 2 } }}
                    >
                        Acharyastro
                        <br />
                        (International Astrologer)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#fff',
                            fontSize: '1.2rem',
                            ml: { xs: 0, md: 2 },
                        }}
                    >
                        Acharya Senthil Kumar - The Best Astrologer In India. Scientific and Technical "Analysis & Diagnosis" in Astrology. India’s best Diagnosis of Horoscope. He is Best Technical Analyst in Astrology.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mt: 2 }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#fff',
                                color: '#000',
                                '&:hover': {
                                    backgroundColor: '#f1f1f1',
                                },
                            }}
                        >
                            Call Now: +91 7200044010
                        </Button>
                    </Box>
                </Box>

                {/* Image */}
                <Box
                    component="img"
                    src="https://drjoshiastrologer.com/images/main-layer.png"
                    alt="Astrology"
                    sx={{
                        width: { xs: '100%', md: '300px' },
                        height: 'auto',
                        alignSelf: { xs: 'center', md: 'center' },
                        mx: { xs: 0, md: '2rem' }
                    }}
                />

                {/* Form */}
                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '1.5rem',
                        color: '#000',
                        maxWidth: '400px',
                        maxHeight: '600px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: { xs: '1rem', md: '0' }
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" sx={{ color: '#E90100' }}>
                        Ask Your Questions
                    </Typography>
                    <Box component="form" mt={2} onSubmit={handleSubmit} sx={{ width: '100%' }}>
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            margin="normal"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                            sx={{ mb: 1 }}
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            margin="normal"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                            sx={{ mb: 1 }}
                        />
                        <TextField
                            fullWidth
                            label="Your Email"
                            variant="outlined"
                            margin="normal"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            sx={{ mb: 1 }}
                        />
                        <TextField
                            fullWidth
                            label="Your Phone No"
                            variant="outlined"
                            margin="normal"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            error={!!errors.phone}
                            helperText={errors.phone}
                            sx={{ mb: 1 }}
                        />
                        <TextField
                            fullWidth
                            label="Your Questions"
                            variant="outlined"
                            margin="normal"
                            name="questions"
                            value={form.questions}
                            onChange={handleChange}
                            error={!!errors.questions}
                            helperText={errors.questions}
                            multiline
                            rows={3}
                            sx={{ mb: 1 }}
                        />
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2, minHeight: '56px' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#E90100',
                                    color: '#fff',
                                    height: '48px',
                                    '&:hover': { backgroundColor: '#B80000' },
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
