import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from '../assets/Profilepic.jpg';
import AWSSAA from '../assets/aws-saa-badge.png'; 
import AWSDeveloper from '../assets/aws-dev-badge.png';
import resume from '../assets/ROHITHKANKIPATI_resume.pdf';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Desktop and Tablet Navigation */}
      <div className="desktop-nav-container">
        <div className="desktop-nav-left">
          <a href="/" className="nav-link">Home</a>
          <a href="/blogs" className="nav-link">Blogs</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
        <a href={resume} target="_blank" rel="noreferrer" className="btn-download">Download Resume</a>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="mobile-nav-toggle">
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-icon">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="mobile-nav">
          <a href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/blogs" className="nav-link" onClick={() => setMenuOpen(false)}>Blogs</a>
          <a href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href={resume} target="_blank" rel="noreferrer" className="btn-download" onClick={() => setMenuOpen(false)}>Download Resume</a>
        </nav>
      )}

      {/* Profile Section */}
      <div className="profile-section">
        <p className="intro">Hi, I am Rohith Kankipati</p>
        <img src={ProfilePic} alt="Profile" className="profile-image" />
        <h2 className="role">Java Full Stack Developer</h2>

        {/* AWS Badges */}
        <div className="badges-s">
          <img src={AWSSAA} alt="AWS Solutions Architect" className="badge-s" />
          <img src={AWSDeveloper} alt="AWS Developer Associate" className="badge-s" />
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
