import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Resume.module.css";

// Image Imports
import page1 from "../assets/Image/Resume1.png";
import page2 from "../assets/Image/Certificate.png";
import page3 from "../assets/Image/Resume3.png";

// Animation Variants
const imageVariants = {
  animate: (i) => ({
    rotate: [0, 360],
    x: ["0%", "-20%", "0%"],
    y: ["0%", "30%", "0%"],
    transition: {
      duration: 5,
      ease: "linear",
      repeat: 0,
      repeatDelay: 1
    },
  }),
  exit: { opacity: 0, transition: { duration: 1 } },
};

function Resume() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Resume</h1>

      <div
        className={styles.linkContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && <span className={styles.bracket}>[</span>}
        <a href={page1} download className={styles.link}>~ Download ~</a>
        {isHovered && <span className={styles.bracket}>]</span>}
      </div>

      {/* Resume Images */}
      {[page1, page2, page3].map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`resumePage${index + 1}`}
          className={styles.image}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={index}
        />
      ))}
    </div>
  );
}

export default Resume;
