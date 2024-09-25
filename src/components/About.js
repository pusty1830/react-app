// src/components/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Box sx={{ py: 6 }}>
                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1">
                    I am a Full Stack Web Developer with expertise in React, Node.js, Express, MongoDB, and Python.
                    Currently pursuing my studies at GITA Autonomous College Bhubaneswar, I have worked on
                    projects like voiceworld.live and a Real-time Collaboration Platform.
                </Typography>
                <Typography variant="h6" sx={{ mt: 4 }}>Tech Stack</Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    {/* Add icons or logos for your tech stack */}
                </Box>
            </Box>
        </Container>
    );
};

export default About;
