// src/components/Skills.js
import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    fetch('/data/skills.json')
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error loading skills data:", error));
  }, []);

  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category}</h3>
            <div className="skills-chips">
              {skills[category].map((skill, i) => (
                <span key={i} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
