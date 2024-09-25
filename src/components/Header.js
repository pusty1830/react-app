// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Amitav Pusty
                </Typography>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/projects">Projects</Button>
                <Button color="inherit" component={Link} to="/experience">Experience</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
                <Button color="secondary" variant="contained" href="/resume.pdf" target="_blank">Resume</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
