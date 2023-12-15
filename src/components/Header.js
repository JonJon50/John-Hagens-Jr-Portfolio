// Header.js

import React from "react";
import MyPhoto from "../assets/Image/me.PNG";
import styles from './Header.module.css'; // Make sure to create this CSS module for the Header

function Header() {
  return (
    <header className={styles.headerStyle}>
      <img
        src={MyPhoto}
        alt="John"
        className={styles.profilePhoto}
      /> <div className={styles.pulsatingCircle}></div> {/* Add this line */}
       <div className={styles.pulsatingCircle}></div> {/* Add this line */}
      <div className={styles.branding}>
        <h3>John Hagens Portfolio</h3>
        <p>Web Developer</p>
      </div>
      {/* Navigation goes here */}
    </header>
  );
}

export default Header;
