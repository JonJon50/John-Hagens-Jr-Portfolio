import { Container } from "react-bootstrap";
import Project from "./Project";

function Portfolio() {
  return (
    <div className="aboutstyle">
      <div className="d-flex justify-content-center">
      <h1>Portfolio Page</h1>
      </div>
      <Container className="text-center">
        <Project />
      </Container>
    </div>
  );
}

export default Portfolio;