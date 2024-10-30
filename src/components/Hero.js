import React from 'react';

function Hero() {
  return (
    <section className="hero-section text-center">
      <h1>Rohith Kankipati</h1>
      <p>Software Development Engineer</p>
      <div className="hero-buttons">
        <a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download Resume</a>
        <a href="https://github.com/rohith4743" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">GitHub</a>
        <a href="https://www.linkedin.com/in/rohithkankipati/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">LinkedIn</a>
      </div>
    </section>
  );
}

export default Hero;
