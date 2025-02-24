// Header.js
import React from "react";
import MyPhoto from "../assets/Image/Linkedin office.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerStyle}>
      <img
        src={MyPhoto}
        alt="selfie of John Hagens"
        className={styles.profilePhoto}
      />
      <div className={styles.pulsatingCircle}></div>
      <div className={styles.branding}>
        <h3>John Hagens Portfolio</h3>
        <p>Web Developer</p>
      </div>
    </header>
  );
}

export default Header;
