// src/components/Experience.js
import React from 'react';

function Experience() {
  return (
    <section className="experience-section text-center">
      <h2>Experience</h2>
      <div className="job-entry">
        <h3>Research Assistant - University of Maryland</h3>
        <p>Aug 2023 – May 2024</p>
        <ul>
          <li>Developed a scalable platform using Java and AWS Lambda.</li>
          <li>Built interactive dashboards with React and JavaScript.</li>
        </ul>
      </div>
      <div className="job-entry">
        <h3>Software Engineer - Infosys Ltd.</h3>
        <p>Dec 2021 – Aug 2022</p>
        <ul>
          <li>Developed RESTful APIs with Spring Boot.</li>
          <li>Built user interfaces with React and Bootstrap.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
