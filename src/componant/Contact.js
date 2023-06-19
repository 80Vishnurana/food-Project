import React from "react";
import Footer from './Footer';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

const Contact = () => {
    return (
        <>
            <br /><br /><br />
            <Box sx={{
                my: 5, ml: 6, "& h4": { fontWeight: "bold", mb: 2 }, "@media (max-width:600px)": {
                    marginRight: 2,
                },
            }}>
                <Typography variant="h4">Contact My Resturant</Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
                    beatae ducimus magni nobis culpa praesentium velit expedita quae,
                    corrupti, pariatur inventore laboriosam consectetur modi impedit
                    error, repudiandae obcaecati doloribus.
                </p>
            </Box>
            <Box
                sx={{
                    m: 3,
                    width: "600px",
                    ml: 6,
                    "@media (max-width:600px)": {
                        width: "300px",
                        marginRight: 2,
                    },
                }}
            >
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{ bgcolor: "black", color: "white" }}
                                    align="center"
                                >
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                                    (tollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <div>
                <Footer />
            </div>

        </>
    );
};

export default Contact;