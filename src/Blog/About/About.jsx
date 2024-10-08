// import React from 'react'
// import { Box, Typography } from '@mui/material'
// import Navbar from '../Navbar/Navbar'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// const About = () => {
//     return (
//         <>
//             <Navbar />

//             <Typography sx={{ height: "4.5rem", width: "100%", opacity: "0.8", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem", backgroundColor: "#E90100", color: "#ffffff", fontWeight: "700" }}>About us</Typography>
//             <Box sx={{ height: "260vh", width: "100%", border: "px solid green" }}>

//                 <Box sx={{ height: "90vh", width: "75%", display: "flex", justifyContent: "space-between", margin: "auto", marginTop: "1rem" }}>

//                     <Box
//                         sx={{
//                             borderRadius: "6px",
//                             height: "245vh",
//                             width: "67%",
//                             boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.3)", paddingTop: "1rem", opacity: "0.8",
//                             border: "px solid blue"
//                         }}
//                     >
//                         <Typography sx={{
//                             color: "#E90100", height: "4.5rem", border: "px solid red", alignItems: "center", borderBottom: "1px solid rgba(0, 0, 0, 0.2)", borderTop: "1px solid rgba(0, 0, 0, 0.2)", display: "flex", justifyContent: "center", fontWeight: "600", fontSize: "1.5rem"
//                         }}>Astro Research & Analysis Center</Typography>

//                         <Box sx={{ height: "7rem", width: "full", display: "flex", justifyContent: "space-between", flexDirection: "column", paddingTop: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}>
//                             <Typography>World Best Online Astrologer In India-</Typography>

//                             <Typography><span style={{ fontWeight: "600" }}>International </span>Astrologer</Typography>
//                             <Typography sx={{ fontWeight: "600" }}>Phone number -+91 72000 44010</Typography>

//                         </Box>

//                         <Box sx={{ height: "13rem", width: "full", borderBottom: "1px solid rgba(0, 0, 0, 0.2)", marginTop: "1rem", display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center", border: "px solid blue" }}>

//                             <Box sx={{
//                                 color: "#E90100", height: "2rem", alignItems: "center", display: "flex", justifyContent: "center",
//                             }}>

//                                 <Typography sx={{
//                                     color: "#E90100", borderBottom: "2px solid red", fontSize: "1.5rem", fontWeight: "600",
//                                 }}>Disclaimer :-</Typography>
//                             </Box>

//                             <Box sx={{ height: "8rem", width: "full", display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center", paddingBottom: "1rem" }}>

//                                 <Typography sx={{ fontSize: "14px" }}>This services only for  <span style={{ fontWeight: "600" }}>corporates, professionals, businessmen, politicians </span>and <span style={{ fontWeight: "600" }}> those</span> who want:-</Typography>

//                                 <Typography sx={{ fontSize: "14px", fontWeight: "700", textAlign: "center", }}>Perfect, Technical, "Scientific Analysis & Diagnosis" and Conclusions through Advance Astro Research.</Typography>

//                                 <Typography sx={{ fontSize: "13px", fontWeight: "700", }}>Different to all Panditji, Guruji and Maharaj..</Typography>

//                             </Box>
//                         </Box>

//                         <Box sx={{ height: "44rem", width: "100%", paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "1.5rem", borderBottom: "1px solid rgba(0, 0, 0, 0.2)", }}>
//                             <Typography sx={{ fontSize: "13px" }}>
//                                 DR JOSHI (Ph.D. Astrology) International Astrologer - The Best <span style={{ fontWeight: "600" }}>Technical Analyst</span>  Astrologer In India
//                             </Typography>

//                             <Typography sx={{ fontSize: "13px" }}>
//                                 <span style={{ fontWeight: "600" }}>ISO Certified </span>  Only Astrologist in India
//                             </Typography>

//                             <Typography sx={{ fontSize: "13px" }}>
//                                 Scientific and <span style={{ fontWeight: "600" }}>Technical</span> "Analysis & Diagnosis" in Astrology. Indias best <span style={{ fontWeight: "600" }}>Diagnosis</span> of Horoscope.
//                             </Typography>

//                             <Typography sx={{ fontWeight: "600", marginTop: "" }}>
//                                 Specialist in -
//                             </Typography>
//                             <ul style={{ fontWeight: "600", gap: "1rem", display: "flex", flexDirection: "column", paddingLeft: "3rem", fontSize: "12px" }}>
//                                 <li>Marriage,</li>
//                                 <li>Professional (Job & Business),</li>
//                                 <li>Financial</li>
//                                 <li>Job Issues Specialist</li>
//                                 <li>Health</li>
//                                 <li>Educational problems.</li>
//                                 <li>Loan</li>
//                                 <li>Career Expert,</li>
//                                 <li>Matchmaking expert report,</li>
//                                 <li>Love Marriage (Parents Approval & other any issues in Love Marriage)</li>
//                                 <li>Relationship Issues Expert</li>
//                                 <li>Etc</li>
//                             </ul>

//                             <Typography sx={{ fontSize: "14px" }}>
//                                 “We not only provide predictions in astrology but also offer management of your horoscope. Our services include scientific analysis, diagnosis, and permanent solutions for your problems. For an appointment, please call the Research & Analysis Center of Dr. Joshi (Ph.D. Astrology).”
//                             </Typography>

//                             <Typography sx={{ fontSize: "13px" }}>NOTE - Scientific, permanent, and solution for a lifetime—call now, Dr. Joshi’s predictions will be useful for you.’</Typography>



//                         </Box>

//                         <Box sx={{ height: "10rem", width: "100%", borderBottom: "1px solid rgba(0, 0, 0, 0.2)", }}>


//                             <ul style={{ gap: "9px", display: "flex", flexDirection: "column", paddingLeft: "3rem", fontSize: "14px" }}>
//                                 <li>Different to all panditji, guruji, and maharaj.</li>
//                                 <li>Advance Astro Science.</li>
//                                 <li> <span style={{ fontWeight: "900" }}> Diagnosis </span> of Horoscope</li>
//                                 <li>Scientific and Technical "Analysis & Diagnosis"</li>
//                                 <li> <span style={{ fontWeight: "900" }}>Unlimited </span>time, <span style={{ fontWeight: "900" }}>Unlimited </span>Questions.</li>
//                                 <li>Your Satisfaction is Our Goal</li>

//                             </ul>
//                         </Box>

//                         <Box sx={{ height: "6rem", width: "100%", borderBottom: "1px solid rgba(0, 0, 0, 0.2)", display: "flex", flexDirection: "column", gap: "1rem" }}>
//                             <Typography sx={{ fontWeight: "600", paddingTop: "1rem" }}>Contact : +91 72000 44010</Typography>
//                             <Typography >Send Details in <span style={{ fontWeight: "600" }}>Whatsapp</span> & Book Your Appointment</Typography>

//                         </Box>

//                         <Box sx={{ height: "8rem", width: "100%", display: "flex", flexDirection: "column", gap: "1rem", borderBottom: "1px solid rgba(0, 0, 0, 0.2)", paddingTop: "1rem" }}>
//                             <Typography sx={{ fontSize: "15px" }}> <span style={{ fontWeight: "600" }}>This Astrology For</span> Excellence, Master, Extra Ordinary, Brilliant & Genius.<span style={{ fontWeight: "600" }}>Different to all...</span></Typography>

//                             <Typography>NOT FOR THOSE WHO ARE INTERESTED TO HEAR</Typography>

//                             <Typography>Sugar Coating & Emotional.</Typography>
//                         </Box>


//                     </Box>


//                     {/* ----------------------------second part------------- */}

//                     <Box sx={{ height: "70vh", width: "30%" }}>

//                         <Typography sx={{ fontWeight: "800", marginBottom: "1rem" }}>Recent Posts</Typography>

//                         <Box sx={{ height: "6rem", width: "100%", display: "flex", gap: "3px" }}>
//                             <img src='https://drjoshiastrologer.com/images/blog/4-Dr%20Joshi%20(Ph.%20D.%20Astrology)%20-%20Best%20Astrologer%20In%20Australia,%20Best%20career%20Astrologer%20In%20Australia,%20Best%20Marriage%20Astrologer%20In%20Australia,%20.jpg' style={{ height: "5rem", width: "5rem" }} />

//                             <Typography sx={{ opacity: "0.8", fontSize: "14px" }}> Dr Joshi (Ph. D. Astrology) - Best Astrologer In Australia, Best career Astrologer In Australia, Best Marriage Astrologer In Australia,</Typography>

//                         </Box>

//                         <Box
//                             sx={{
//                                 height: "4rem",
//                                 width: "100%",
//                                 display: "flex",
//                                 p: 1,
//                                 transition: "opacity 0.3s ease",
//                                 '&:hover': {
//                                     opacity: 0.5
//                                 }
//                             }}
//                         >
//                             <ChevronRightIcon />
//                             <Typography sx={{ fontSize: "14px", ml: 1 }}>
//                                 Dr Joshi (Ph. D. Astrology) - Best Astrologer In India, Best Career Astrologer In India, Best Marriage Astrologer In India
//                             </Typography>
//                         </Box>

//                         <Box
//                             sx={{
//                                 height: "3rem",
//                                 width: "100%",
//                                 display: "flex",
//                                 p: 1,
//                                 transition: "opacity 0.3s ease",
//                                 '&:hover': {
//                                     opacity: 0.5
//                                 }
//                             }}
//                         >
//                             <ChevronRightIcon />
//                             <Typography sx={{ fontSize: "14px", ml: 1 }}>
//                                 Dr Joshi (Ph. D. Astrology) - Best Astrologer In United States (USA)
//                             </Typography>
//                         </Box>

//                         <Box
//                             sx={{
//                                 height: "6rem",
//                                 width: "100%",
//                                 display: "flex",
//                                 p: 1,
//                                 transition: "opacity 0.3s ease",
//                                 '&:hover': {
//                                     opacity: 0.5
//                                 }
//                             }}
//                         >
//                             <ChevronRightIcon />
//                             <Typography sx={{ fontSize: "14px", ml: 1 }}>
//                                 Dr Joshi (Ph. D. Astrology) - Best Astrologer In Mumbai, Best Career Astrologer In Mumbai, Best Marriage Astrologer In Mumbai
//                             </Typography>
//                         </Box>

//                     </Box>

//                 </Box>

//             </Box>


//         </>

//     )
// }

// export default About


import React from 'react'
import { Box, Typography } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const About = () => {
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
                About us
            </Typography>

            <Box sx={{
                width: "100%",
                padding: { xs: "1rem", sm: "2rem" },
                boxSizing: "border-box",
                
            }}>

                <Box sx={{
                    width: { xs: "100%", sm: "75%" },
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row",md:"" },
                    margin: {lg:"auto"},
                    gap: "1rem",
                    marginTop: "1rem",
                }}>

                    <Box
                        sx={{
                            borderRadius: "6px",
                            width: { xs: "100%", sm: "75%" },
                            boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.3)",
                            // padding: "1rem",
                            opacity: "0.8",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <Typography sx={{
                            color: "#E90100",
                            height: "4.5rem",
                            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "600",
                            fontSize: { xs: "1.2rem", sm: "1.5rem" }
                        }}>
                            Astro Research & Analysis Center
                        </Typography>

                        <Box sx={{
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                            padding: "1rem"
                        }}>
                            <Typography>World Best Online Astrologer In India-</Typography>
                            <Typography><span style={{ fontWeight: "600" }}>International </span>Astrologer</Typography>
                            <Typography sx={{ fontWeight: "600" }}>Phone number -+91 72000 44010</Typography>
                        </Box>

                        <Box sx={{
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                            padding: "1rem"
                        }}>
                            <Box sx={{
                                color: "#E90100",
                                height: "2rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderBottom: "2px solid red",
                                fontSize: { xs: "1rem", sm: "1.5rem" },
                                fontWeight: "600"
                            }}>
                                Disclaimer :-
                            </Box>

                            <Box sx={{
                                height: "auto",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                paddingBottom: "1rem"
                            }}>
                                <Typography sx={{ fontSize: "14px" }}>
                                    This services only for <span style={{ fontWeight: "600" }}>corporates, professionals, businessmen, politicians </span>and <span style={{ fontWeight: "600" }}>those</span> who want:
                                </Typography>
                                <Typography sx={{ fontSize: "14px", fontWeight: "700", textAlign: "center" }}>
                                    Perfect, Technical, "Scientific Analysis & Diagnosis" and Conclusions through Advance Astro Research.
                                </Typography>
                                <Typography sx={{ fontSize: "13px", fontWeight: "700" }}>
                                    Different to all Panditji, Guruji and Maharaj..
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                            padding: "1rem"
                        }}>
                            <Typography sx={{ fontSize: "13px" }}>
                                Dr. Senthil Kumar (Acharyastro) International Astrologer - The Best <span style={{ fontWeight: "600" }}>Technical Analyst</span> Astrologer In India
                            </Typography>
                            <Typography sx={{ fontSize: "13px" }}>
                                <span style={{ fontWeight: "600" }}>ISO Certified </span> Only Astrologist in India
                            </Typography>
                            <Typography sx={{ fontSize: "13px" }}>
                                Scientific and <span style={{ fontWeight: "600" }}>Technical</span> "Analysis & Diagnosis" in Astrology. India's best <span style={{ fontWeight: "600" }}>Diagnosis</span> of Horoscope.
                            </Typography>
                            <Typography sx={{ fontWeight: "600" }}>
                                Specialist in -
                            </Typography>
                            <ul style={{ fontWeight: "600", gap: "1rem", display: "flex", flexDirection: "column", paddingLeft: "3rem", fontSize: "12px" }}>
                                <li>Marriage,</li>
                                <li>Professional (Job & Business),</li>
                                <li>Financial</li>
                                <li>Job Issues Specialist</li>
                                <li>Health</li>
                                <li>Educational problems.</li>
                                <li>Loan</li>
                                <li>Career Expert,</li>
                                <li>Matchmaking expert report,</li>
                                <li>Love Marriage (Parents Approval & other any issues in Love Marriage)</li>
                                <li>Relationship Issues Expert</li>
                                <li>Etc</li>
                            </ul>
                            <Typography sx={{ fontSize: "14px" }}>
                                “We not only provide predictions in astrology but also offer management of your horoscope. Our services include scientific analysis, diagnosis, and permanent solutions for your problems. For an appointment, please call the Research & Analysis Center of Dr. Senthil Kumar (Acharyastro).”
                            </Typography>
                            <Typography sx={{ fontSize: "13px" }}>
                                NOTE - Scientific, permanent, and solution for a lifetime—call now, Dr. Senthil Kumar  predictions will be useful for you.’
                            </Typography>
                        </Box>

                        <Box sx={{
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                            padding: "1rem"
                        }}>
                            <ul style={{ gap: "9px", display: "flex", flexDirection: "column", paddingLeft: "3rem", fontSize: "14px" }}>
                                <li>Different to all panditji, guruji, and maharaj.</li>
                                <li>Advance Astro Science.</li>
                                <li><span style={{ fontWeight: "900" }}>Diagnosis</span> of Horoscope</li>
                                <li>Scientific and Technical "Analysis & Diagnosis"</li>
                                <li><span style={{ fontWeight: "900" }}>Unlimited</span> time, <span style={{ fontWeight: "900" }}>Unlimited</span> Questions.</li>
                                <li>Your Satisfaction is Our Goal</li>
                            </ul>
                        </Box>

                        <Box sx={{
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            padding: "1rem",
                            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                        }}>
                            <Typography sx={{ fontWeight: "600" }}>Contact : +91 72000 44010</Typography>
                            <Typography>Send Details in <span style={{ fontWeight: "600" }}>Whatsapp</span> & Book Your Appointment</Typography>
                        </Box>

                        <Box sx={{
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            padding: "1rem",
                            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                        }}>
                            <Typography sx={{ fontSize: "15px" }}>
                                <span style={{ fontWeight: "600" }}>This Astrology For</span> Excellence, Master, Extra Ordinary, Brilliant & Genius.<span style={{ fontWeight: "600" }}>Different to all...</span>
                            </Typography>
                            <Typography>NOT FOR THOSE WHO ARE INTERESTED TO HEAR</Typography>
                            <Typography>Sugar Coating & Emotional.</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        height:"auto",
                        width: { xs: "100%", sm: "100%" ,md:"50%",lg:"30%"},
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}>
                        <Typography sx={{ fontWeight: "800" }}>Recent Posts</Typography>

                        <Box sx={{
                            height: "6rem",
                            display: "flex",
                            gap: "1rem"
                        }}>
                            <img
                                src='https://drjoshiastrologer.com/images/blog/4-Dr%20Joshi%20(Ph.%20D.%20Astrology)%20-%20Best%20Astrologer%20In%20Australia,%20Best%20career%20Astrologer%20In%20Australia,%20Best%20Marriage%20Astrologer%20In%20Australia,%20.jpg'
                                alt="Recent Post"
                                style={{ height: "5rem", width: "5rem", objectFit: "cover" }}
                            />
                            <Typography sx={{ opacity: "0.8", fontSize: "14px" }}>
                            Dr. Senthil Kumar (Acharyastro) - Best Astrologer In Australia, Best career Astrologer In Australia, Best Marriage Astrologer In Australia,
                            </Typography>
                        </Box>

                        <Box sx={{
                            height: "auto",
                            display: "flex",
                            p: 1,
                            transition: "opacity 0.3s ease",
                            '&:hover': {
                                opacity: 0.5
                            }
                        }}>
                            <ChevronRightIcon />
                            <Typography sx={{ fontSize: "14px", ml: 1 }}>
                            Dr. Senthil Kumar (Acharyastro)  - Best Astrologer In India, Best Career Astrologer In India, Best Marriage Astrologer In India
                            </Typography>
                        </Box>

                        <Box sx={{
                            height: "auto",
                            display: "flex",
                            p: 1,
                            transition: "opacity 0.3s ease",
                            '&:hover': {
                                opacity: 0.5
                            }
                        }}>
                            <ChevronRightIcon />
                            <Typography sx={{ fontSize: "14px", ml: 1 }}>
                            Dr. Senthil Kumar (Acharyastro) - Best Astrologer In United States (USA)
                            </Typography>
                        </Box>

                        <Box sx={{
                            height: "auto",
                            display: "flex",
                            p: 1,
                            transition: "opacity 0.3s ease",
                            '&:hover': {
                                opacity: 0.5
                            }
                        }}>
                            <ChevronRightIcon />
                            <Typography sx={{ fontSize: "14px", ml: 1 }}>
                            Dr. Senthil Kumar (Acharyastro) International Astrologer - Best Astrologer In Mumbai, Best Career Astrologer In Mumbai, Best Marriage Astrologer In Mumbai
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default About
