import React, { useState } from 'react';
import page1 from '../assets/Image/Resume1.png';
import page2 from '../assets/Image/Certificate.png';
import { motion } from 'framer-motion';
import styles from './Resume.module.css'; // Adjust the import path as needed

const imageVariants = {
  animate: (i) => ({
    rotate: [0, 360],
    x: ["0%", "-20%", "0%"],
    y: ["0%", "30%", "0%"],
    transition: {
      loop: 2,
      duration: 5,
      ease: "linear",
      times: [0, 0.5, 1],
      repeatDelay: 1
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 1 }
  }
};

function Resume() {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Resume</h1>

      <div
        className={styles.linkContainer}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {isHovered && <span className={styles.bracket}>[</span>}
        <a href={page1} download className={styles.link}>
          ~ Download ~
        </a>
        {isHovered && <span className={styles.bracket}>]</span>}
      </div>

      <motion.img 
        alt="resumePage1" 
        src={page1} 
        className={styles.image}
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={0}
      />
      
      <h2 className={styles.heading}>
        Certification 
      </h2>

      <motion.img 
        alt="resumePage2" 
        src={page2} 
        className={styles.image}
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={1}
      />
    </div>
  );
}

export default Resume;
