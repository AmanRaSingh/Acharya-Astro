import React from 'react';
import { Container, Grid, Typography, Paper, TableBody, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
function ResultPage() {
    const location = useLocation();
    const { result } = location.state || {};

    if (!result) {
        return <Typography variant="h6">No results found.</Typography>;
    }

    const renderResult = (key, value) => {
        if (typeof value === 'object') {
            return (
                <div key={key}>
                    <Typography variant="h6">{key.replace('_', ' ')}</Typography>
                    <Grid container spacing={2}>
                        {Object.keys(value).map((subKey) => renderResult(subKey, value[subKey]))}
                    </Grid>
                </div>
            );
        }
        return (
            <Grid item xs={12} sm={6} key={key}>
                <Paper style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
                    <Typography variant="h6">{key.replace('_', ' ')}</Typography>
                    <Typography variant="body1">{value}</Typography>
                </Paper>
            </Grid>
        );
    };
    
    const maximumData = {
        varna: result?.response?.varna?.full_score,
        vasya: result?.response?.vasya?.full_score,
        tara: result?.response?.tara?.full_score,
        yoni: result?.response?.yoni?.full_score,
        grahamaitri: result?.response?.grahamaitri?.full_score,
        gana: result?.response?.gana?.full_score,
        bhakoot: result?.response?.bhakoot?.full_score,
        nadi: result?.response?.nadi?.full_score,
    };

    const maximumSum =
        (maximumData.varna || 0) +
        (maximumData.vasya || 0) +
        (maximumData.tara || 0) +
        (maximumData.yoni || 0) +
        (maximumData.grahamaitri || 0) +
        (maximumData.gana || 0) +
        (maximumData.bhakoot || 0) +
        (maximumData.nadi || 0);
   
    const storedData = {
        varna: result?.response?.varna?.varna,
        vasya: result?.response?.vasya?.vasya,
        tara: result?.response?.tara?.tara,
        yoni: result?.response?.yoni?.yoni,
        grahamaitri: result?.response?.grahamaitri?.grahamaitri,
        gana: result?.response?.gana?.gana,
        bhakoot: result?.response?.bhakoot?.bhakoot,
        nadi: result?.response?.nadi?.nadi,
    };

    // Summing all the values (assuming they are numbers)
    const optainedSum =
        (storedData.varna || 0) +
        (storedData.vasya || 0) +
        (storedData.tara || 0) +
        (storedData.yoni || 0) +
        (storedData.grahamaitri || 0) +
        (storedData.gana || 0) +
        (storedData.bhakoot || 0) +
        (storedData.nadi || 0);

    
    return (
        <Container maxWidth="md" style={{ marginTop: '2rem', backgroundColor: "#FAF9F6", boxShadow: "6px 4px 6px rgba(0, 0, 0, 0.5)" }}>
            <Typography variant="h4" sx={{ backgroundColor: '#FFF8DC', textAlign: "center" }}>Guna Milan</Typography>
            <Table sx={{ minWidth: 650 }} aria-label="guna table">
                {/* Table Head */}
                <TableHead>
                    <TableRow sx={{ fontSize: "1rem" }}>
                        <TableCell sx={{ fontWeight: "600" }} >Guna</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "600" }}>Boy</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "600" }}>Girl</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "600" }}>Maximum Obtained</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "600" }}>Obtained Point</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "600" }}>Area Of Life</TableCell>
                    </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                    {/* Varna Row */}
                    <TableRow sx={{ backgroundColor: "#ffffff" }}>
                        <TableCell>Varna</TableCell>
                        <TableCell align="right">{result?.response?.varna?.boy_varna}</TableCell>
                        <TableCell align="right">{result?.response?.varna?.girl_varna}</TableCell>
                        <TableCell align="right">{result?.response?.varna?.full_score}</TableCell>
                        <TableCell align="right">{result?.response?.varna?.varna}</TableCell>
                        <TableCell align="right">{result?.response?.varna?.description}</TableCell>
                    </TableRow>

                    {/* Vasya Row */}
                    <TableRow sx={{ backgroundColor: "#F5F5F5" }}>
                        <TableCell>Vasya</TableCell>
                        <TableCell align="right">{result?.response?.vasya?.boy_vasya}</TableCell>
                        <TableCell align="right">{result?.response?.vasya?.girl_vasya}</TableCell>
                        <TableCell align="right">{result?.response?.vasya?.full_score}</TableCell>
                        <TableCell align="right">{result?.response?.vasya?.vasya}</TableCell>
                        <TableCell align="right">{result?.response?.vasya?.description}</TableCell>
                    </TableRow>

                    {/* Tara Row */}
                    <TableRow sx={{ backgroundColor: "#ffffff" }}>
                        <TableCell>Tara</TableCell>
                        <TableCell align="right">{result?.response?.tara?.boy_tara}</TableCell>
                        <TableCell align="right">{result?.response?.tara?.girl_tara}</TableCell>
                        <TableCell align="right">{result?.response?.tara?.full_score}</TableCell>
                        <TableCell align="right">{result?.response?.tara?.tara}</TableCell>
                        <TableCell align="right">{result?.response?.tara?.description}</TableCell>
                    </TableRow>

                    {/* Similarly, Add more rows for Yoni, Maitri, Gana, Bhakoot, Nadi */}

                    {/* Yoni Row */}
                    <TableRow sx={{ backgroundColor: "#F5F5F5" }}>
                        <TableCell>Yoni</TableCell>
                        <TableCell align="right">{result?.response?.yoni?.boy_yoni}</TableCell>
                        <TableCell align="right">{result?.response?.yoni?.girl_yoni}</TableCell>
                        <TableCell align="right">{result?.response?.yoni?.full_score}</TableCell>
                        <TableCell align="right">{result?.response?.yoni?.yoni}</TableCell>
                        <TableCell align="right">{result?.response?.yoni?.description}</TableCell>
                    </TableRow>

                    {/* Maitri */}
                    <TableRow sx={{ backgroundColor: "#ffffff" }}>
                        <TableCell>Maitri</TableCell>
                        <TableCell align="right">{result?.response?.grahamaitri?.
                            boy_lord
                        }</TableCell>
                        <TableCell align="right">{result?.response?.grahamaitri?.
                            girl_lord
                        }</TableCell>
                        <TableCell align="right">{result?.response?.grahamaitri?.full_score
                        }</TableCell>
                        <TableCell align="right">{result?.response?.grahamaitri?.grahamaitri
                        }</TableCell>
                        <TableCell align="right">{result?.response?.grahamaitri?.description
                        }</TableCell>
                    </TableRow>

                    {/* Gana */}
                    <TableRow sx={{ backgroundColor: "#F5F5F5" }}>
                        <TableCell>Gana</TableCell>
                        <TableCell align="right">{result?.response?.gana?.boy_gana}</TableCell>
                        <TableCell align="right">{result?.response?.gana?.girl_gana}</TableCell>
                        <TableCell align="right">{result?.response?.gana?.full_score}</TableCell>
                        <TableCell align="right">{result?.response?.gana?.gana}</TableCell>
                        <TableCell align="right">{result?.response?.gana?.description}</TableCell>
                    </TableRow>

                    {/* Bhakoot */}
                    <TableRow sx={{ backgroundColor: "#ffffff" }}>
                        <TableCell>Bhakoot</TableCell>
                        <TableCell align="right">{result?.response?.bhakoot?.boy_rasi_name}</TableCell>
                        <TableCell align="right">{result?.response?.bhakoot?.girl_rasi_name}</TableCell>
                        <TableCell align="right">{result?.response?.bhakoot?.full_score}</TableCell>
                        <TableCell align="right">{result?.response?.bhakoot?.girl_rasi}</TableCell>
                        <TableCell align="right">{result?.response?.bhakoot?.description}</TableCell>
                    </TableRow>

                    {/* Nadi */}
                    <TableRow sx={{ backgroundColor: "#F5F5F5" }}>
                        <TableCell>Nadi</TableCell>
                        <TableCell align="right">{result?.response?.nadi?.boy_nadi}</TableCell>
                        <TableCell align="right">{result?.response?.nadi?.girl_nadi}</TableCell>
                        <TableCell align="right">{result?.response?.nadi?.full_score}</TableCell>
                        <TableCell align="right">{result?.response?.nadi?.nadi}</TableCell>
                        <TableCell align="right">{result?.response?.nadi?.description}</TableCell>
                    </TableRow>

                </TableBody>

            </Table>
            <Typography variant="h6" sx={{ backgroundColor: '#FFF8DC', textAlign: "center" ,marginTop:"1rem"}}>Optained Point</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>

                <Typography sx={{ fontSize: "3rem" }}>{optainedSum}</Typography>
                <Typography sx={{ marginTop: "2rem" }}>/ {maximumSum}</Typography>
            </Box>
        </Container>

    );
}

export default ResultPage;
