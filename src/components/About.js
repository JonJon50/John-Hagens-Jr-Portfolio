// conponent/About.js
import React from "react";
import { Col, Row } from "react-bootstrap";

import styles from './About.module.css'; // Import the module here

function About() {
  return (
    <Row className={`${styles.aboutContainer} d-flex justify-content-center align-items-center min-vh-100`}>
      <Col xs={12} lg={8} className={styles.aboutDescription}>
        <pre>
          <code>
            <span className={styles.comment}>// About me</span>
            {'\n\n'}
            <span className={styles.info}>My name is John and I'm a motivated tech professional...</span>
            {'\n'}
            <span className={styles.info}>Trained at [University of Central Florida (UCF)]...</span>
            {'\n'}
            <span className={styles.info}>Innovative problem-solver passionate about...</span>
          </code>
        </pre>
      </Col>
    </Row>
  );
}

export default About;

