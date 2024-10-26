// src/Pages/Education.js

import React from 'react';
import '../Styles/Education.css';

const Education = () => {
  return (
    <div className="education-page">
      <div className="education-item">
        <h3>Master’s Degree in Computer Science</h3>
        <p>University of XYZ - Graduated 2022</p>
        <p>Specialization in Artificial Intelligence and Robotics</p>
      </div>
      <div className="education-item">
        <h3>Bachelor’s Degree in Software Engineering</h3>
        <p>University of ABC - Graduated 2020</p>
        <p>Focused on full-stack development, database management, and software design</p>
      </div>
      {/* Add more education items as needed */}
    </div>
  );
};

export default Education;
