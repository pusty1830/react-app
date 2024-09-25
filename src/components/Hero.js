// src/components/Hero.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
            <Container>
                <Typography variant="h3" gutterBottom>
                    Hi, I'm Amitav Pusty
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Full Stack Web Developer | MERN Stack | Python Enthusiast
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Hire Me
                    </Button>
                    <Button variant="outlined" color="primary">
                        My Work
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
