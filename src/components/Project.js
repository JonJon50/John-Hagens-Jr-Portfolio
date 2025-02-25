// components/Project.js
import React, { useState } from 'react';
import styles from './Project.module.css';

function Project({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  const projectItemClassName = showDetails ? `${styles.projectItem} ${styles.active}` : styles.projectItem;

  return (
    <div className={projectItemClassName}>
      <div onClick={toggleDetails} className={styles.projectHeader}>
        <h3>
          <span className={styles.bracket}>[</span>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.bracket}>]</span>
        </h3>
      </div>
    
      {showDetails && (
        <div className={styles.projectDetails}>   
          {project.projects && project.projects.map((subproject, index) => (
            <div key={index}>
              <div className={styles.subtitleButtonContainer}>
                <h4 className={styles.subtitle}>{subproject.subtitle}</h4>
                <div className={styles.buttonContainer}>
                  <a href={subproject.repo} className={styles.button} target="_blank" rel="noopener noreferrer">Repository</a>
                  <a href={subproject.url} className={styles.button} target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
              <p className={styles.description}>{subproject.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Project;
