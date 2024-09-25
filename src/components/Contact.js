// src/components/Contact.js
import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
    return (
        <Container>
            <Box sx={{ py: 6 }}>
                <Typography variant="h4" gutterBottom>
                    Contact Me
                </Typography>
                <form>
                    <TextField label="Name" fullWidth margin="normal" />
                    <TextField label="Email" fullWidth margin="normal" />
                    <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Send
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Contact;
