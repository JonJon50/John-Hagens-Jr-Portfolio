// component/About.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./About.module.css"; // Import the module here

function About() {
  return (
    <Row
      className={`${styles.aboutContainer} d-flex justify-content-center align-items-center min-vh-100`}
    >
      <Col xs={12} lg={4} className={styles.aboutDescription}>
        <pre>
          <code>
            <span className={styles.comment}> About me </span>
            {"\n\n"}
            <span className={styles.info}> firstName: ‘John’, </span>
            {"\n"}
            <span className={styles.info}> lastName: ‘Hagens’, </span>
            {"\n"}
            <span className={styles.info}>
              {" "}
              title: 'Full Stack Javascript Developer',
            </span>
            {"\n"}
            <span className={styles.info}> openToRelocate: true,</span>
            {"\n"}
            <span className={styles.info}> remotePosition: true,</span>
            {"\n"}
            <span className={styles.info}> yearsOfExperience: '3',</span>
            {"\n"}
            <span className={styles.info}>
              {" "}
              hobbies: &#91;'Coding', 'Traveling',
              {"\n"}
              'Coding', 'Cycling', 'Coding'],
            </span>
            {"\n"}
            <span className={styles.info}> origins: 'African American',</span>
            {"\n"}
            <span className={styles.info}> remotePosition: true,</span>
            {"\n"}
            <span className={styles.info}> yearsOfExperience: '3',</span>
          </code>
        </pre>
      </Col>
    </Row>
  );
}

export default About;
