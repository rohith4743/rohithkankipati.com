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

      <div className='profile'>
        <div className='row'>
            <div className='col-12 col-lg-7 order-2 order-lg-1'>
                <div className='part-1'>
                  <p className="introduction">Hi, I am <span className='glitch russo-one-regular stroked-text'><span className='pink'>R</span>ohith Kankipati</span></p>
                  <h2 className="role">Java Full Stack Developer</h2>


                  {/* <div className="badges-s">
                    <img src={AWSSAA} alt="AWS Solutions Architect" className="badge-s" />
                    <img src={AWSDeveloper} alt="AWS Developer Associate" className="badge-s" />
                  </div> */}

                  <div className="social-links">
                      <a href="https://github.com/rohith4743" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a href="https://www.linkedin.com/in/rohithkankipati/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a href="https://x.com/rohith_4743" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a href="mailto:rkankipati86@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                  </div>
                </div>
            </div>
            
            <div className='col-12 col-lg-5 order-1 order-lg-2'>

              <img src={ProfilePic} alt="Profile" className="profile-image" />
              {/* AWS Badges */}
        
            </div>
            <div></div>

          </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section" hidden>

        

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
