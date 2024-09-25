// src/components/Experience.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const experiences = [
    { company: 'Inner Strength', role: 'Full Stack Developer', duration: '2022 - Present' },
    { company: 'Rise Innovations', role: 'Developer & Instructor', duration: '2021 - 2022' },
];

const Experience = () => {
    return (
        <Container>
            <Box sx={{ py: 6 }}>
                <Typography variant="h4" gutterBottom>
                    Experience
                </Typography>
                {experiences.map((exp, index) => (
                    <Box key={index} sx={{ mt: 4 }}>
                        <Typography variant="h6">{exp.company}</Typography>
                        <Typography>{exp.role}</Typography>
                        <Typography variant="body2">{exp.duration}</Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default Experience;
