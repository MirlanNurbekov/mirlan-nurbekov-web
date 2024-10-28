import React from 'react';
import '../Styles/Home.css';
const placeholderImage = process.env.PUBLIC_URL + '/Images/me.jpeg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <p>A versatile and highly skilled software engineer with over six years
of experience in international environments as a software engineer. Proficient in crafting complex queries, stored procedures, and
functions, I have a proven track record of managing intricate
schedules, handling key administrative tasks, and fostering
seamless communication across culturally diverse teams. Fluent in
English and Russian.</p>
        <a href="#projects" className="btn">View My Projects</a>
      </div>
    </section>
  );
};

export default Home;
