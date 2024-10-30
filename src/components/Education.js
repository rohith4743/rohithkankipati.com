// src/components/Education.js
import React, { useState, useEffect } from 'react';
import './Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('/data/education.json')
      .then((response) => response.json())
      .then((data) => setEducation(data))
      .catch((error) => console.error("Error loading education data:", error));
  }, []);

  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {education.map((entry, index) => (
          <div className="education-card" key={index}>
            <h3>{entry.degree}</h3>
            <h4>{entry.institution}</h4>
            <p className="education-location">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {entry.location}
            </p>
            <p className="education-dates">
              <FontAwesomeIcon icon={faCalendarAlt} /> {entry.dates}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
