import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Route } from "react-router-dom";
import HomeImage from "../Image/Home:page.png";
import NannyDiary from "../Image/Nanny's Care1.png";
import FitResolution from "../Image/main1.png";
function Project() {
    return (
      <Container>
    <Row className="d-flex flex-row justify-content-between align-item-start">
    <Col className="d-flex flex-column text-center" xs={11} lg={6} >
  <a href="https://workhive1.herokuapp.com" style={{ textDecoration: 'none' }}>
  <div style={{ color: 'white', fontFamily: 'Arial', fontSize: '25px' }}>WorkHive</div>
    <Image src={HomeImage} className="shadow-md my-4 img-fluid rounded shadow-lg border-round p-1 w250 img-hover enlarge-image " />
  </a>
</Col>

    <Col xs={11} lg={6} className="my-5 " >
    <div className="d-flex align-items-start">
  <Stack gap={3} >
      <div className="transparent ">Our website is a platform for job seekers looking for opportunities. We provide a space for companies to post job openings and for applicants to browse through and apply for positions that match their skills and interests..

</div>
      <div className="transparent">Whether you are a seasoned professional or just starting out, our website is designed to help you find the right job in social media. With a user-friendly interface and a wide range of job postings from reputable companies, we strive to make the job search process as easy and efficient as possible.</div>
      <div className="transparent">We believe that finding a job should be an exciting and positive experience, and our website is dedicated to making that happen for you. Join our community of job seekers and start your journey towards a rewarding career in social media today!</div>
    </Stack>
    </div>
    </Col>
       </Row>


       <Row className="d-flex flex-row justify-content-between align-item-start">
    <Col className="d-flex flex-column text-center" xs={11} lg={6} >
  <a href="https://lit-depths-94534.herokuapp.com/" style={{ textDecoration: 'none' }}>
  <div style={{ color: 'white', fontFamily: 'Arial', fontSize: '25px' }}>Nanny's Diary</div>
    <Image src={NannyDiary} className="shadow-md my-4 img-fluid rounded shadow-lg border-round p-1 img-hover enlarge-image" />
  </a>
</Col>

    <Col xs={11} lg={6} className="my-5 " >
    <div className="d-flex align-items-start">
  <Stack gap={3} >
      <div className="transparent ">Nanny's Diary in home daycare are dedicated to providing families with quality home childcare in a safe and nurturing environment.</div>
      <div className="transparent">Entrusting your family childcare to a Nanny's home daycare gives children the added security of being cared for in a home environment while still giving parents the peace of mind that comes from knowing their children are under the supervision of licensed professionals.</div>
      <div className="transparent">Since home daycare information can change often, we have created the perfect website to stay up to date by nanny and parent interaction, letting us know if any of the information on the childcare information is up or out of date. We want to know and give you the right information every time.</div>
    </Stack>
    </div>
    </Col>
       </Row>


       <Row className="d-flex flex-row justify-content-between align-item-start">
    <Col className="d-flex flex-column text-center" xs={11} lg={6} >
  <a href="https://jonjon50.github.io/Fit-Resolution/" style={{ textDecoration: 'none' }}>
  <div style={{ color: 'white', fontFamily: 'Arial', fontSize: '25px' }}>Fit Resolution</div>
    <Image src={FitResolution} className="shadow-md my-4 img-fluid rounded shadow-lg border-round p-1 img-hover enlarge-image" />
  </a>
</Col>

    <Col xs={11} lg={6} className="my-5 " >
    <div className="d-flex align-items-start">
  <Stack gap={3} >
      <div className="transparent ">Using Geofetch for everyone to be a part of the interaction. Knowing the our fittest goals is important. Through this built we are focus on a functionality that is efficient and effective while saving lives. </div>
      <div className="transparent">Protecting loved ones from obesity and generational health problems. By achieving this goal, made us better coder and people by changing the world one code at a time.</div>
      <div className="transparent">Since home daycare information can change often, we have created the perfect website to stay up to date by nanny and parent interaction, letting us know if any of the information on the childcare information is up or out of date. We want to know and give you the right information every time.</div>
    </Stack>
    </div>
    </Col>
       </Row>



</Container>
    
 



    );
  }
  export default Project