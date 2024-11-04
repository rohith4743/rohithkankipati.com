// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/projects_with_bold.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects data:", error));
  }, []);

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <ul className="project-description" hidden>
              {project.description.map((line, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </ul>

            <div className='project-description'>
              {project.summary}
            </div>

            <div className="project-links">
              {project.projectLink && (
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Project
                </a>
              )}
              {project.backendLink && (
                <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FontAwesomeIcon icon={faCodeBranch} /> GitHub (Backend)
                </a>
              )}
              {project.frontendLink && (
                <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FontAwesomeIcon icon={faCodeBranch} /> GitHub (Frontend)
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
