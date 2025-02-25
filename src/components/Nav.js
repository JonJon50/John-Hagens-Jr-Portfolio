// component/Nav.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const backdrop = isNavExpanded ? (
    <div
      className={styles.backdrop}
      onClick={() => setIsNavExpanded(false)}
    ></div>
  ) : null;

  return (
    <div className={styles.navContainer}>
      {backdrop}
      <button
        className={styles.hamburger} 
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      <aside
        className={`${styles.sidenav} ${isNavExpanded ? styles.expanded : ""}`}
      >
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/Portfolio" className={styles.navLink}>
              Portfolio
            </Link>
          </li>
          {/* <li className={styles.navItem}>
      <Link to="/Contact" className={styles.navLink}>Contact</Link>
    </li> */}
          <li className={styles.navItem}>
            <Link to="/Resume" className={styles.navLink}>
              Resume
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Nav;
