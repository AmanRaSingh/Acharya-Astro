import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AcharyaLogo from "./AcharyaAstro.png"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [hoveredServices, setHoveredServices] = useState(false);
    const [hoveredBranches, setHoveredBranches] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const handleDropdownToggle = (type) => {
        setDropdownOpen(dropdownOpen === type ? null : type);
    };

    return (
        <Box sx={{ height: { lg: "5rem", md: "7rem", sm: "7rem" }, width: "100%" }}>
            <Box
                sx={{
                    height: { lg: "5rem", md: "7rem", sm: "7rem" },
                    width: { lg: "85%", md: "100%", sm: "100%" },
                    margin: "auto",
                    display: 'flex',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                }}
            >
                {/* Logo and Menu Icon Container */}
                <Box sx={{ display: 'flex', alignItems: 'center', width: {lg:"20%", xs: '100%',}}}>
                    <Box sx={{ display: 'flex', width: { xs: 'auto', sm: '30%' }, alignItems: 'center' }}>
                        <img
                            src={AcharyaLogo}
                            style={{ height: "4rem" }}
                            alt="Logo"
                        />
                    </Box>

                    {/* Mobile menu toggle button */}
                    <Box
                        sx={{
                            display: { xs: 'flex', sm: 'flex',md:"flex",lg:"none" },
                            alignItems: 'center',
                            ml: 'auto',
                            backgroundColor: "red",
                            padding: "4px",
                        }}
                    >
                        {mobileMenuOpen ? (
                            <CloseIcon
                                onClick={() => setMobileMenuOpen(false)}
                                sx={{ cursor: 'pointer' }}
                            />
                        ) : (
                            <MenuIcon
                                onClick={() => setMobileMenuOpen(true)}
                                sx={{ cursor: 'pointer' }}
                            />
                        )}
                    </Box>
                </Box>

                {/* Desktop menu */}
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'none' ,lg:"flex"},
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: { lg: "100%", md: "100%", sm: "100%" },
                        justifyContent: "space-between",
                    }}
                >
                    <NavLink to={"/"}>
                        <Button sx={{ fontWeight: '600', '&:hover': { color: 'red' }, fontSize: "14px", color: "#000000" }}>
                            Home
                        </Button>

                    </NavLink>

                    <NavLink to={"/about"}>
                        <Button sx={{ fontWeight: '600', '&:hover': { color: 'red' }, fontSize: "14px", color: "#000000" }}>
                            About
                        </Button>
                    </NavLink>


                    <Box
                        sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                        onMouseEnter={() => setHoveredServices(true)}
                        onMouseLeave={() => setHoveredServices(false)}
                    >
                        <Button
                            sx={{
                                fontWeight: '600',
                                color: "#000000",
                                fontSize: "14px",
                                cursor: 'pointer',
                                '&:hover': { color: 'red' },
                            }}
                        >
                            Our Services
                        </Button>

                        {hoveredServices && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '60%',
                                    left: 0,
                                    width: '13vw',
                                    backgroundColor: '#fff',
                                    border: '3px solid #ddd',
                                    borderRadius: '4px',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                    display: 'block',
                                    mt: 1,
                                    zIndex: 2000
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: "12px",
                                        padding: '8px 16px',
                                        cursor: 'pointer',
                                        '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                    }}
                                >
                                    Marriage Astrology Mumbai
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: "12px",
                                        padding: '8px 16px',
                                        cursor: 'pointer',
                                        '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                    }}
                                >
                                    Best Love Astrologer
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: "12px",
                                        padding: '8px 16px',
                                        cursor: 'pointer',
                                        '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                    }}
                                >
                                    Career Astrology Mumbai
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: "12px",
                                        padding: '8px 16px',
                                        cursor: 'pointer',
                                        '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                    }}
                                >
                                    Kundali Match Making
                                </Typography>
                            </Box>
                        )}
                    </Box>

                    <Box
                        sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                        onMouseEnter={() => setHoveredBranches(true)}
                        onMouseLeave={() => setHoveredBranches(false)}
                    >
                        <Button
                            sx={{
                                fontWeight: '600',
                                fontSize: "14px",
                                cursor: 'pointer',
                                color: "#000000",
                                '&:hover': { color: 'red' },
                            }}
                        >
                            Branches
                        </Button>

                        {hoveredBranches && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '60%',
                                    left: 0,
                                    width: '10vw',
                                    backgroundColor: '#fff',
                                    border: '3px solid #ddd',
                                    borderRadius: '4px',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                    display: 'block',
                                    mt: 1,
                                    zIndex: 2000
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: "12px",
                                        padding: '8px 16px',
                                        cursor: 'pointer',
                                        '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                    }}
                                >
                                    Andheri
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: "12px",
                                        padding: '8px 16px',
                                        cursor: 'pointer',
                                        '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                    }}
                                >
                                    Kandivali
                                </Typography>
                            </Box>
                        )}
                    </Box>
                    <NavLink to={'/contactus'}>
                        <Button sx={{ fontWeight: '600', '&:hover': { color: 'red' }, fontSize: "14px", color: "black" }}>
                            Contact US
                        </Button>
                    </NavLink>


                    <Button sx={{ fontWeight: '600', '&:hover': { color: 'red' }, fontSize: "14px", color: "#000000" }}>
                        Privacy & Policy
                    </Button>

                    <Box sx={{ borderRadius: '4px', padding: '0px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                        <NavLink to={"/login"}>
                            <Button
                                sx={{ color: 'black', fontWeight: '700', '&:hover': { backgroundColor: 'red', color: '#ffffff' }, fontSize: '14px' }}
                            >
                                Login
                            </Button>
                        </NavLink>


                        <NavLink to={"/signup"}>
                            <Button
                                sx={{ color: 'black', fontWeight: '700', '&:hover': { backgroundColor: 'red', color: '#ffffff' }, fontSize: '14px' }}
                            >
                                Sign UP
                            </Button>

                        </NavLink>

                    </Box>
                </Box>
            </Box>
            {/* Mobile menu */}
            <Box
                sx={{
                    display: { xs: mobileMenuOpen ? 'flex' : 'none' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    color: "white",
                    backgroundColor: '#343a40',
                    position: 'absolute',
                    top: '5rem',
                    left: 0,
                    zIndex: 1000,
                    height: "14rem"
                }}
            >
                <Box sx={{ width: "95%", padding: "2px", height: "14rem" }}>
                    <NavLink to={"/"}>
                        <Typography sx={{ fontWeight: '600', '&:hover': { color: 'red' }, fontSize: "14px", borderBottom: "2px solid #8C8C8C", height: "1.7rem", color: "#ffffff" }}>
                            Home
                        </Typography>

                    </NavLink>

                    <NavLink to={"/about"}>
                        <Typography style={{ fontWeight: '600', '&:hover': { color: 'red' }, fontSize: "14px", borderBottom: "2px solid #8C8C8C", height: "1.7rem", color: "#ffffff" }}>
                            About
                        </Typography>
                    </NavLink>

                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: "space-between",
                            borderBottom: "2px solid #8C8C8C",
                            width: '100%',
                            alignItems: 'center'
                        }}
                        onClick={() => handleDropdownToggle('services')}
                    >
                        <Typography
                            sx={{
                                fontWeight: '600',
                                fontSize: "14px",
                                cursor: 'pointer',
                                '&:hover': { color: 'red' },
                            }}
                        >
                            Our Services
                        </Typography>

                        <ArrowDropUpIcon
                            sx={{
                                cursor: 'pointer',
                                transition: 'transform 0.6s',
                                transform: dropdownOpen === 'services' ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                        />

                        <Box
                            sx={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                width: '100%',
                                color: "black",
                                backgroundColor: '#F5F5F5',
                                borderRadius: '4px',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                mt: 1,
                                zIndex: 2000,
                                overflow: 'hidden',
                                maxHeight: dropdownOpen === 'services' ? '300px' : '0px',
                                opacity: dropdownOpen === 'services' ? 1 : 0,
                                transition: 'max-height 0.9s ease, opacity 0.3s ease',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: "12px",
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                }}
                            >
                                Marriage Astrology Mumbai
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: "12px",
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                }}
                            >
                                Best Love Astrologer
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: "12px",
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                }}
                            >
                                Career Astrology Mumbai
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: "12px",
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                }}
                            >
                                Kundali Match Making
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: "space-between",
                            borderBottom: "2px solid #8C8C8C",
                            width: '100%',
                            alignItems: 'center'
                        }}
                        onClick={() => handleDropdownToggle('branches')}
                    >
                        <Typography
                            sx={{
                                fontWeight: '600',
                                fontSize: "14px",
                                cursor: 'pointer',
                                '&:hover': { color: 'red' },
                            }}
                        >
                            Branches
                        </Typography>

                        <ArrowDropUpIcon
                            sx={{
                                cursor: 'pointer',
                                transition: 'transform 0.6s',
                                transform: dropdownOpen === 'branches' ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                        />

                        <Box
                            sx={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                width: '100%',
                                color: "black",
                                backgroundColor: '#F5F5F5',
                                borderRadius: '4px',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                mt: 1,
                                zIndex: 2000,
                                overflow: 'hidden',
                                maxHeight: dropdownOpen === 'branches' ? '300px' : '0px',
                                opacity: dropdownOpen === 'branches' ? 1 : 0,
                                transition: 'max-height 0.9s ease, opacity 0.3s ease',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: "12px",
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                }}
                            >
                                Andheri
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: "12px",
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'red', backgroundColor: '#f0f0f0' },
                                }}
                            >
                                Kandivali
                            </Typography>

                        </Box>
                    </Box>

                    <NavLink to={"/contactus"}>
                        <Typography sx={{ fontWeight: '600', '&:hover': { color: 'red' }, fontSize: "14px", borderBottom: "2px solid #8C8C8C", height: "1.7rem", color: "#ffffff" }}>
                            Contact US
                        </Typography>
                    </NavLink>

                    <Typography sx={{ fontWeight: '600', '&:hover': { color: 'red' }, fontSize: "14px", borderBottom: "2px solid #8C8C8C", height: "1.7rem" }}>
                        Privacy & Policy
                    </Typography>
                    <Box sx={{ borderRadius: '4px', padding: '2px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', justifyContent: "space-between", backgroundColor: "#DC143C" }}>
                        <NavLink to={"/login"}>
                            <Button
                                sx={{
                                    color: "white",
                                    fontWeight: '700',
                                    fontSize: '13px',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'red',
                                        color: '#ffffff'
                                    }
                                }}
                            >
                                Login
                            </Button>
                        </NavLink>

                        <NavLink to={"/signup"}>
                            <Button
                                sx={{ color: 'white', fontWeight: '700', '&:hover': { backgroundColor: 'red', color: '#ffffff' }, fontSize: '13px' }}
                            >
                                Sign UP
                            </Button>

                        </NavLink>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
