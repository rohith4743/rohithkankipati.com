// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default Home;
