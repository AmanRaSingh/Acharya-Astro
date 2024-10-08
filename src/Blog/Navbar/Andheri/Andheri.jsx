import React from 'react'
import { Box, Typography } from '@mui/material'
const Andheri = () => {
    return (
        <>
            {/* <Box sx={{ height: "6rem", backgroundColor: "#E90100", opacity: "0.8",color:"#ffffff",fontSize:"3rem",fontWeight:"600" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Typography sx={{textWrap:"inherit"}}>Services</Typography>
                Andheri
            </Box> */}

            <Box
                sx={{
                    height: "6rem",
                    backgroundColor: "#E90100",
                    opacity: "0.8",
                   
                    fontSize: "3rem",
                    fontWeight: "600",
                    display: "flex",
                    flexDirection: "column",  // Align items in a column
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center" // Center text horizontally
                }}
            >
                <Typography sx={{ marginBottom: "rem",color:"#E90100" }}>Services</Typography> {/* Added marginBottom */}
                <Typography sx={{fontSize:"3rem", color: "#ffffff",}}>Andheri</Typography> {/* Wrapped "Andheri" in Typography */}
            </Box>

        </>
    )
}

export default Andheri