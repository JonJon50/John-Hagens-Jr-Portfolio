// component/About.js
import React from "react";
import Typewriter from "typewriter-effect";
import useSound from "use-sound";
import keyboardSound from "../assets/sounds/keyboard.mp3";
import { Col, Row } from "react-bootstrap";
import styles from "./About.module.css";

function About() {
  const [play] = useSound(keyboardSound);

  return (
    <Row className={`${styles.aboutContainer} d-flex justify-content-center align-items-center`}>
      <Col xs={12} lg={8} className={styles.terminalContainer} onMouseEnter={play}>
        <div className={styles.terminalHeader}>
          <span className={styles.terminalTitle}>john@portfolio:~$ git status</span>
        </div>
        <div className={styles.terminalBody}>
          <Typewriter
            options={{
              strings: [
                "John Hagens Portfolio",
                "Full Stack Web Developer / Associate Software Engineer",
                "Technologies: [ JavaScript (ES6+), TypeScript, React.js, Next.js, Node.js, Express.js, MySQL, PostgreSQL, MongoDB, Python, Git, GraphQL, RESTful APIs, Tailwind CSS, Docker, AWS, CI/CD ]",
                "Specialties: [ API Development, Cloud Computing, Database Management, System Architecture, AI Infrastructure, Automation ]",
                "Certifications: [ Full Stack Web Development (UCF), Associate Data Analyst (DataCamp), Security+ (In Progress) ]",
                "Remote Work: Yes",
                "Open to Relocate: Yes",
                "Hobbies: [ Coding, AI Research, Data Science, Traveling, Family, Cycling, Reading ]"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </Col>
    </Row>
  );
}

export default About;
