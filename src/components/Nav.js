// component/Nav.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.css'; // Corrected import for CSS module

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // You might want to add a style for the backdrop in your CSS module.
  const backdrop = isNavExpanded ? <div className={styles.backdrop} onClick={() => setIsNavExpanded(false)}></div> : null;

  return (
    <div className={styles.navContainer}>
      {backdrop}
      <button
        className={styles.hamburger} // Apply the hamburger style from your module
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      <aside className={`${styles.sidenav} ${isNavExpanded ? styles.expanded : ""}`}>
  <ul className={styles.nav}>
    <li className={styles.navItem}>
      <Link to="/" className={styles.navLink}>About</Link>
    </li>
    <li className={styles.navItem}>
      <Link to="/Portfolio" className={styles.navLink}>Portfolio</Link>
    </li>
    {/* <li className={styles.navItem}>
      <Link to="/Contact" className={styles.navLink}>Contact</Link>
    </li> */}
    <li className={styles.navItem}>
      <Link to="/Resume" className={styles.navLink}>Resume</Link>
    </li>
  </ul>
</aside>

    </div>
  );
}

export default Nav;
