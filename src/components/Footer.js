import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerSticky}>
      <footer> 
        <div className={styles.footerBottom}>
          <p> Copyright &copy; 2024 John Hagens</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
