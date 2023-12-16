// components/Project.js
import React, { useState } from 'react';
import styles from './Project.module.css'; // Assuming you have a CSS module for the styles

function Project({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  // Add a function to compute the class name based on showDetails
  const projectItemClassName = showDetails ? `${styles.projectItem} ${styles.active}` : styles.projectItem;

  return (
    <div className={projectItemClassName}>
      <div onClick={toggleDetails} className={styles.projectHeader}>
        <h3>[ {project.title} ]</h3>
      </div>
      {showDetails && (
        <div className={styles.projectDetails}>
          {/* Wrap the subtitle and buttons in the new container */}
          <div className={styles.subtitleButtonContainer}>
            <h4 className={styles.subtitle}>{project.subtitle}</h4>
            <div className={styles.buttonContainer}>
              <a href={project.repo} className={styles.button} target="_blank" rel="noopener noreferrer">repository</a>
              <a href={project.url} className={styles.button} target="_blank" rel="noopener noreferrer">demo</a>
            </div>
          </div>
          <p>{project.description}</p>
        </div>
      )}
    </div>
  );
}

export default Project;
