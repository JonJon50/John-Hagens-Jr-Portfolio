import { Container } from "react-bootstrap";
import Project from "./Project";

function Portfolio() {
  return (
    <div className="aboutstyle">
      <div style={{ marginLeft: "45%"}} className="d-flex justify-content-center">
      <h1>Projects</h1>
      </div>
      <Container style={{ marginLeft: "25%", marginTop:"10%"}} className="text-center">
        <Project />
      </Container>
    </div>
  );
}

export default Portfolio;