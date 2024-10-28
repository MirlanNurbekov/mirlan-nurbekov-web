import React, { useEffect, useState } from 'react';
import '../Styles/Test.css';
import TestImage from '../Images/1.jpg';

const Test = () => {
  const [enlarge, setEnlarge] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnlarge(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`image-container ${enlarge ? 'enlarge' : ''}`}>
      <img src={TestImage} alt="Test" className="test-image" />
    </div>
  );
};

export default Test;
