// src/components/Experience.js
import React, { useState, useEffect } from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('/data/experience_with_bold.json')
      .then((response) => response.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error loading experience data:", error));
  }, []);

  return (
    <section className="experience-section">
      <h2>Professional Experience</h2>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-title">{experience.title}</h3>
            <h4 className="experience-company">{experience.company}</h4>
            <div className="experience-details">
              <span className="experience-location">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {experience.location}
              </span>
              <span className="experience-dates">
                <FontAwesomeIcon icon={faCalendarAlt} /> {experience.dates}
              </span>
            </div>
            <ul className="experience-description">
              {experience.description.map((point, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
