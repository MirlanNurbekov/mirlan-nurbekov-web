import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'TechMakers',
      description: 'An e-commerce platform for electronic components.',
      link: 'https://www.techmakers.com.my'
    },
    {
      title: 'Pegasus Logistics',
      description: 'A UI design for a logistics management platform.',
      link: 'https://peglogistics.com'
    },
    {
      title: 'FlowchartAdventure',
      description: 'An educational game to teach programming concepts.',
      link: 'https://github.com/MirlanNurbekov/3-03COM-FlowchartAdventure'
    },
    // Add placeholders for additional projects here
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="card fade-in" key={index}>
              <div className="card-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" className="btn">Visit Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
