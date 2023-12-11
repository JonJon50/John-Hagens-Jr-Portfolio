// conponent/About.js
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import MyPhoto from "../assets/Image/me.PNG";
import styles from './About.module.css'; // Import the module here

function About() {
  return (
    <Row className={`${styles.aboutContainer} d-flex justify-content-center align-items-center min-vh-100`}>
      <Col className="text-center" xs={12} lg={4}>
        <a href="https://github.com/JonJon50" className={styles.profileLink}>
          <div className={styles.profileGreeting}></div>
          <Image
            src={MyPhoto}
            className={`${styles.profilePhoto} my-4 rounded-circle`}
          />
        </a>
      </Col>
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

