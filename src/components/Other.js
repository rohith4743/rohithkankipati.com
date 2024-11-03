// src/components/Other.js
import React from 'react';
import './Other.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLanguage, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Other = () => {
  return (
    <section className="other-section">
      <h2>Other Information</h2>
      
      <div className="other-container">

        {/* Publications */}
        <div className="other-card">
          <h3><FontAwesomeIcon icon={faBook} /> Publications</h3>
          <ul>
            <li>
              <a href="https://doi.org/10.1109/IEEEDATA.2024.3485026" target="_blank" rel="noopener noreferrer">
                “Descriptor: Smart Event Face Dataset (SEFD)”
              </a> – Published in IEEE Data Descriptions, 2024
            </li>
            <li>
              <a href="http://www.jetir.org/papers/JETIR2004077.pdf" target="_blank" rel="noopener noreferrer">
                “Image Composition Using Deep Painterly Harmonization”
              </a> – Published in International Journal of Emerging Technologies and Innovative Research, 2020
            </li>
          </ul>

        </div>

        {/* Languages Spoken */}
        <div className="other-card">
          <h3><FontAwesomeIcon icon={faLanguage} /> Languages Spoken</h3>
          <p>English, Telugu, Hindi</p>
        </div>

        {/* LeetCode Performance */}
        <div className="other-card">
          <h3><FontAwesomeIcon icon={faTrophy} /> LeetCode Performance</h3>
          <ul>
            <li>Rating: 1950+</li>
            <li>Solved 300+ problems across various categories</li>
            <li>Top 5% in Monthly LeetCode Challenges</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Other;
