// src/components/Skills.js
import React from 'react';

function Skills() {
  const skills = ["Java", "Python", "React", "Angular", "AWS", "Spring Boot", "SQL", "Docker", "Kafka", "Jenkins"];

  return (
    <section className="skills-section text-center">
      <h2>Skills</h2>
      <div className="skills-chips">
        {skills.map((skill, index) => (
          <span className="chip" key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
