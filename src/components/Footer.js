import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerSticky}>
      <footer className={styles.footer}>
        <div className={styles.contactInfo}>
          <p>
            <a href="tel:386-290-4612" target="_blank" rel="noopener noreferrer">
              386-290-4612
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/john-hagens-55b15212a/" target="recruiters" rel="noopener noreferrer">
              linkedin 
            </a>
          </p>
          <p>
            <a href="https://github.com/JonJon50" target="developers" rel="noopener noreferrer">
              github
            </a>
          </p>
          <p>
            <a href="mailto:ginuwine104@gmail.com" target="email" rel="noopener noreferrer">
              ginuwine104@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2024 John Hagens</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

