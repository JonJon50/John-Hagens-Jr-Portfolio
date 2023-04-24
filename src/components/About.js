import React from 'react';
import { Col, Image, Row, Stack } from "react-bootstrap";
import MyPhoto from "../Image/me.png"

function About() {
  return (
    
    <Row className="d-flex flex-row justify-content-between align-item-start mt-5">
    <Col className="d-flex flex-column text-center " xs={11} lg={4} >
  <a href="https://github.com/JonJon50" style={{ textDecoration: 'none' }}>
  <div style={{ color: 'white', fontFamily: 'Arial', fontSize: '25px' }}>Hi, I'm John</div>
    <Image src={MyPhoto} className="shadow-md my-4 img-fluid rounded shadow-lg border-round p-4 img-hover" />
  </a>
</Col>

    <Col xs={11} lg={7} className="my-5 mb-3 shadow-md my-4 img-fluid rounded shadow-lg border-round p-2 img-hover" >
    <div className="d-flex align-items-start">
  <Stack gap={3}>
    <div className="transparent" style={{color: "white"}}>
      My name is John and I'm a motivated tech professional and problem solver with a background in big data. Experience with analytical thinking, project manage, strong team skills, and excellent verbal and written communication.
    </div>
    <div className="transparent" style={{color: "white"}}>
      Trained at [University of Central Florida (UCF)] coding boot camp and earned a certificate in Full-Stack Web Development.
    </div>
    <div className="transparent" style={{color: "white"}}>
      Innovative problem-solver passionate about developing apps; focused development. Strengths in creativity, teamwork, and building projects from ideation to execution.
    </div>
  </Stack>
</div>

    </Col>
   </Row>



  );
}

export default About;


