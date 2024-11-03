// src/components/Skills.js
import React, { useState, useEffect } from 'react';
import './Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    fetch('/data/skills.json')
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error loading skills data:", error));
  }, []);

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": Object.keys(skills).map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": category,
      "item": {
        "@type": "Thing",
        "name": category,
        "keywords": skills[category].map(skill => skill.name).join(", ")
      }
    }))
  };

  return (
    <section className="skills-section" aria-labelledby="technical-skills">
      <h2 id="technical-skills">Technical Skills</h2>
      <div className="skills-container">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skills-category" aria-labelledby={`category-${index}`}>
            <h3 id={`category-${index}`}>{category}</h3>
            <div className="skills-chips">
              {skills[category].map((skill, i) => (
                <span key={i} className="skill-chip" role="listitem" aria-label={skill.name}>
                  {/* Check if icon is HTML or path */}
                  {skill.html ? (
                    <span dangerouslySetInnerHTML={{ __html: skill.html }} className="skill-icon" aria-hidden="true"/>
                  ) : (
                    <img src={skill.path} alt={`${skill.name} Icon`} className="skill-icon" aria-hidden="true" />
                  )}
                  <span className="skill-name">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* JSON-LD Structured Data for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </section>
  );
};

export default Skills;
