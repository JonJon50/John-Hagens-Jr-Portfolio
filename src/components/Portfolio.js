// component/Portfolio.js
import React from 'react';
import Project from './Project';
import projectsData from '../projects.json'; 

function Portfolio() {
  return (
    <div>
      {projectsData.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Portfolio;