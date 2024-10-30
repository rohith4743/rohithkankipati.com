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
            <li>“Efficient Cloud-based Video Processing Techniques” – Published in IEEE Cloud Computing Conference, 2024</li>
            <li>“Optimizing Backend Systems for Real-Time Applications” – Published in Journal of Software Engineering, 2023</li>
          </ul>
        </div>

        {/* Languages Spoken */}
        <div className="other-card">
          <h3><FontAwesomeIcon icon={faLanguage} /> Languages Spoken</h3>
          <p>English, Telugu, Hindi</p>
        </div>

        {/* LeetCode Performance */}
        <div className="other-card leetcode-card">
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
