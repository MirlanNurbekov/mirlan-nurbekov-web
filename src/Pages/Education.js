import React, { useState, useEffect } from 'react';
import '../Styles/Education.css';
import coventryLogo from '../Images/coventry-logo.png';
import intiLogo from '../Images/inti-logo.png';

const Education = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imageSets = {
    coventry: [...Array(5).keys()].map((i) => require(`../Images/${i + 1}.png`)),
    inti: [...Array(5).keys()].map((i) => require(`../Images/${i + 6}.png`)),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 2500); // Change image every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const showSelectedImage = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="education-page">
      <div className="education-item">
        <div className="education-header">
          <a href="https://www.coventry.ac.uk/" target="_blank" rel="noopener noreferrer">
            <img src={coventryLogo} alt="Coventry University" className="university-logo" />
          </a>
          <div className="major-info">
            <h3>3+0 Bachelor of Science (Hons) in Computing</h3>
            <p>Coventry University, Coventry, UK</p>
          </div>
        </div>
        <div className="image-section">
          <img
            src={selectedImageIndex !== null ? imageSets.coventry[selectedImageIndex] : imageSets.coventry[currentImageIndex]}
            alt="Coventry Main Display"
            className="main-image"
          />
          <div className="thumbnail-gallery">
            {imageSets.coventry.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Coventry Thumbnail ${index + 1}`}
                className="thumbnail"
                onClick={() => showSelectedImage(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="education-item">
        <div className="education-header">
          <a href="https://newinti.edu.my/" target="_blank" rel="noopener noreferrer">
            <img src={intiLogo} alt="INTI University" className="university-logo" />
          </a>
          <div className="major-info">
            <h3>Diploma in Electrical and Electronic Engineering</h3>
            <p>INTI International University, Penang, Malaysia</p>
          </div>
        </div>
        <div className="image-section">
          <img
            src={selectedImageIndex !== null ? imageSets.inti[selectedImageIndex] : imageSets.inti[currentImageIndex]}
            alt="INTI Main Display"
            className="main-image"
          />
          <div className="thumbnail-gallery">
            {imageSets.inti.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`INTI Thumbnail ${index + 1}`}
                className="thumbnail"
                onClick={() => showSelectedImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
