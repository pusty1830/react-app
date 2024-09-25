// src/components/Projects.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const projects = [
    { title: 'Voiceworld.live', description: 'A video conferencing platform', link: '#' },
    { title: 'Real-time Collaboration', description: 'Document sharing and collaboration tool', link: '#' },
];

const Projects = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{project.title}</Typography>
                                <Typography>{project.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={project.link} target="_blank">
                                    View
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;
