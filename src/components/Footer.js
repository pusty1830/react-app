// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ py: 2, backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} Amitav Pusty. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
