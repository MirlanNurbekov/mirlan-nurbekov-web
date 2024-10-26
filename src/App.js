import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Education from './Pages/Education'; // Import Education page
import Projects from './Pages/Projects';
import Contact from './Pages/Contact'; // Import Contact page
import Error from './Pages/Error';
import './App.css';

const App = () => {
    return (
        <>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} /> {/* Education Route */}
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
                    <Route path="*" element={<Error />} /> 
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
