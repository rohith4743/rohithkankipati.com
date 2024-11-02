// src/pages/Home.js
import React from 'react';
import './Home.css';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Other from '../components/Other';
import Certifications from '../components/Certificantions';

function Home() {
  return (
    <div className="Home">
      <Header />
      <About />
      <Certifications />
      
      <div className="main-content">
        <div className="left-column">
          <Experience />
          <Projects />
        </div>
        <div className="right-column">
          <Skills />
          <Education />
          <Other />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
