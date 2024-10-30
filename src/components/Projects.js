// src/components/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    { title: "Liquor Store", description: "E-commerce platform for liquor store.", link: "https://liquor-store.rohithkankipati.com" },
    { title: "Mood Music", description: "Music discovery and recommendation platform.", link: "https://moodmusic.rohithkankipati.com" },
  ];

  return (
    <section className="projects-section text-center">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" className="btn btn-outline-primary">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
