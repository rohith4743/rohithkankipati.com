// src/components/About.js
import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-description">
          <p>
            Hello! I'm Rohith Kankipati, a passionate Java Developer with expertise in creating robust and scalable backend solutions. With a focus on cloud technologies like AWS, I'm dedicated to optimizing and deploying applications that serve thousands of users efficiently. Let’s create something amazing together!
          </p>
        </div>
        <div className="about-details">
          <div className="detail-item">
            <FontAwesomeIcon icon={faBriefcase} className="icon" />
            <div>
              <h4>Experience</h4>
              <p>4+ Years</p>
            </div>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <div>
              <h4>Location</h4>
              <p>Baltimore, MD</p>
            </div>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faUserGraduate} className="icon" />
            <div>
              <h4>Education</h4>
              <p>M.S. in Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
