// src/components/Experience.js
import React, { useState, useEffect } from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [showAllSkills, setShowAllSkills] = useState([]);  
  const [showDescriptions, setShowDescriptions] = useState([]);  

  useEffect(() => {
    fetch('/data/experience_with_bold.json')
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data);
        setShowAllSkills(new Array(data.length).fill(false));
        setShowDescriptions(new Array(data.length).fill(false));
      })
      .catch((error) => console.error("Error loading experience data:", error));
  }, []);

  const handleToggleSkills = (index) => {
    setShowAllSkills(prevState => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  const handleToggleDescription = (index) => {
    setShowDescriptions(prevState => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

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

            {/* Skills Section with "Show More" */}
            <div className="experience-skills">
              {/* Display first 5 skills or all skills based on toggle state */}
              {(showAllSkills[index] ? experience.skills : experience.skills.slice(0, 5)).map((skill, i) => (
                <span key={i} className="skill-chip-exp">{skill}</span>
              ))}

              {/* Toggle button as "+ other" chip if more than 5 skills */}
              {experience.skills.length > 5 && (
                <span className={`${showAllSkills[index] ? 'show-less btn btn-link' : 'skill-chip-exp other-skill'}`} onClick={() => handleToggleSkills(index)} style={{ cursor: 'pointer' }}>{showAllSkills[index] ? 'Show less' : `+${experience.skills.length - 5} more`}</span>
              )}
            </div>

            {/* Experience Description with "Learn More" */}
            
            {showDescriptions[index] && (
              <ul className="experience-description" id={`descriptionCollapse-${index}`}>
                {experience.description.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            )}

            <button className="btn btn-link learn-more" onClick={() => handleToggleDescription(index)} aria-expanded={showDescriptions[index]} >{showDescriptions[index] ? 'Learn less' : 'Learn more'}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
