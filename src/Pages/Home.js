import React from 'react';
import '../Styles/Home.css';
const placeholderImage = process.env.PUBLIC_URL + '/Images/me.jpeg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <p>Experienced Software Engineer with a focus on complex software solutions, international collaboration, and effective project leadership.</p>
        <a href="#projects" className="btn">View My Projects</a>
      </div>
    </section>
  );
};

export default Home;
