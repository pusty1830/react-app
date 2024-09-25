// src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Projects />
            <Experience />
        </div>
    );
};

export default HomePage;
