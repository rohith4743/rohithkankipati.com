import React from 'react';
import AWSSAA from '../assets/aws-saa-badge.png';
import AWSDeveloper from '../assets/aws-dev-badge.png';
import './Certifications.css';

const Certifications = () => {
  return (

    
    
    <div className="certifications-container">
      <h1 className="certifications-title">Certifications</h1>
      <div className="badges-container">

        
        
        {/* AWS Solutions Architect Certification */}
        <div className="badge-item">
          <img src={AWSSAA} alt="AWS Solutions Architect" className="badge-cert" />
          <a href="https://www.credly.com/badges/bc17deea-5200-4e2c-95b3-9e1a707c9bc7/public_url" target="_blank" rel="noopener noreferrer">
            View Credential
          </a>
          <p className="cert-name">AWS Solutions Architect - Associate</p>
        </div>

        {/* AWS Developer Associate Certification */}
        <div className="badge-item">
          <img src={AWSDeveloper} alt="AWS Developer Associate" className="badge-cert" />
          <a href="https://www.credly.com/badges/473ae9d8-3700-4062-b124-e3bab1813d10/public_url" target="_blank" rel="noopener noreferrer">
            View Credential
          </a>
          <p className="cert-name">AWS Developer - Associate</p>
        </div>

      </div>
    </div>



  );
};

export default Certifications;
