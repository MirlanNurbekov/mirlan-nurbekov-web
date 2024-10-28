import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { textToBinary } from '../binaryHelper';
import '../Styles/Navbar.css';

const profilePic = process.env.PUBLIC_URL + '/Images/me.jpeg';
const message = "Mirlan Nurbekov is the best programmer in the world";
const binaryMessage = textToBinary(message);

const Navbar = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [professionIndex, setProfessionIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const professions = ["Software Engineer", "UX/UI Designer", "Full Stack Developer", "Robotics Engineer"];

  useEffect(() => {
    if (window.innerWidth < 768) return;
    let currentProfession = professions[professionIndex];
    let charIndex = 0;

    const typeEffect = setInterval(() => {
      setDisplayedText((prev) => prev + currentProfession[charIndex]);
      charIndex++;
      if (charIndex === currentProfession.length) {
        clearInterval(typeEffect);
        setTimeout(() => {
          setDisplayedText('');
          setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeEffect);
  }, [professionIndex]);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar">
        <div className="profile-container" onClick={() => window.location.href = "/"}>
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="text-section">
            <h1 className="signature">Mirlan Nurbekov</h1>
            {window.innerWidth >= 768 && <span className="profession">|{displayedText}</span>}
          </div>
        </div>
        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li><Link to="/" className={`nav-item ${isActive('/') ? 'selected' : ''}`} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={`nav-item ${isActive('/about') ? 'selected' : ''}`} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/experience" className={`nav-item ${isActive('/experience') ? 'selected' : ''}`} onClick={() => setIsOpen(false)}>Experience</Link></li>
          <li><Link to="/education" className={`nav-item ${isActive('/education') ? 'selected' : ''}`} onClick={() => setIsOpen(false)}>Education</Link></li>
          <li><Link to="/projects" className={`nav-item ${isActive('/projects') ? 'selected' : ''}`} onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" className={`nav-item ${isActive('/contact') ? 'selected' : ''}`} onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`line1 ${isOpen ? 'toggle' : ''}`}></div>
          <div className={`line2 ${isOpen ? 'toggle' : ''}`}></div>
          <div className={`line3 ${isOpen ? 'toggle' : ''}`}></div>
        </div>
      </nav>

      {/* Binary line animation */}
      <div className="binary-line">
        <div className="binary-text">{binaryMessage}</div>
      </div>
    </>
  );
};

export default Navbar;
