import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import HomeImage from "../assets/Image/Home:page.png";
import iciHomes from "../assets/Image/IciHomes.png";
import FitResolution from "../assets/Image/FitResolution.png";
function Project() {
  return (
    <Container>
      <Row className="d-flex flex-row justify-content-between align-item-start">
        <Col className="d-flex flex-column text-center" xs={11} lg={6}>
          <a
            href="https://the-social-hive-2f9b38244e14.herokuapp.com/"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{ color: "white", fontFamily: "Arial", fontSize: "25px" }}
            >
              WorkHive
            </div>
            <Image
              src={HomeImage}
              className="shadow-md my-4 img-fluid rounded shadow-lg border-round p-1 w250 img-hover enlarge-image "
            />
          </a>
        </Col>

        <Col xs={11} lg={6} className="my-5 ">
          <div className="d-flex align-items-start ">
            <Stack gap={3}>
              <div className="transparent ">
                Our website is a platform for job seekers looking for
                opportunities. We provide a space for companies to post job
                openings and for applicants to browse through and apply for
                positions that match their skills and interests..
              </div>
              <div className="transparent">
                Whether you are a seasoned professional or just starting out,
                our website is designed to help you find the right job in social
                media. With a user-friendly interface and a wide range of job
                postings from reputable companies, we strive to make the job
                search process as easy and efficient as possible.
              </div>
              <div className="transparent">
                We believe that finding a job should be an exciting and positive
                experience, and our website is dedicated to making that happen
                for you. Join our community of job seekers and start your
                journey towards a rewarding career in social media today!
              </div>
            </Stack>
          </div>
        </Col>
      </Row>
      <Row className="d-flex flex-row justify-content-between align-item-start">
        <Col className="d-flex flex-column text-center" xs={11} lg={6}>
          <a
            href="https://ici-homes-38cfb5e13b6d.herokuapp.com/"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{ color: "white", fontFamily: "Arial", fontSize: "25px" }}
            >
              ICI Homes
            </div>
            <Image
              src={iciHomes}
              className="shadow-md my-4 img-fluid rounded shadow-lg border-round p-1 img-hover enlarge-image"
            />
          </a>
        </Col>
        <Col xs={11} lg={6} className="my-5 ">
          <div className="d-flex align-items-start">
            <Stack gap={3}>
              <div className="transparent ">
                Frontend and backend website that helps consumer find homes and
                custom build them.
              </div>
              <div className="transparent">
                PHP, Laravel, Livewire, Alpine.js, server-side APIs, and
                Javascript, Github and Heroku.{" "}
              </div>
              <div className="transparent">
                Designing and building web applications using Laravel.
              </div>
            </Stack>
          </div>
        </Col>
      </Row>
      <Row className="d-flex flex-row justify-content-between align-item-start">
        <Col className="d-flex flex-column text-center" xs={11} lg={6}>
          <a
            href="https://jonjon50.github.io/Fit-Resolution/"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{ color: "white", fontFamily: "Arial", fontSize: "25px" }}
            >
              Fit Resolution
            </div>
            <Image
              src={FitResolution}
              className="shadow-md my-4 img-fluid rounded shadow-lg border-round p-1 img-hover enlarge-image"
            />
          </a>
        </Col>
        <Col xs={11} lg={6} className="my-5 ">
          <div className="d-flex align-items-start">
            <Stack gap={3}>
              <div className="transparent ">
                Using Geofetch for everyone to be a part of the interaction.
                Knowing the our fittest goals is important. Through this built
                we are focus on a functionality that is efficient and effective
                while saving lives.{" "}
              </div>
              <div className="transparent">
                Protecting loved ones from obesity and generational health
                problems. By achieving this goal, made us better coder and
                people by changing the world one code at a time.
              </div>
              <div className="transparent">
                Since home daycare information can change often, we have created
                the perfect website to stay up to date by nanny and parent
                interaction, letting us know if any of the information on the
                childcare information is up or out of date. We want to know and
                give you the right information every time.
              </div>
            </Stack>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Project;
