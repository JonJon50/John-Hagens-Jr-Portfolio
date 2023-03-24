import page1 from "../Image/Resume1.png";
import page2 from "../Image/Resume2.png";

function Resume() {
  return (
    <div className="resume-container">
      <h1 style={{ textAlign: "center", marginLeft: "200px" }}>Resume</h1>
      <h2 style={{ textAlign: "center", marginLeft: "200px" }}>
        Download my Resume <a href={page1} download>Here</a>
      </h2>
      <img alt="resumePage1"
        src={page1}
        style={{
          display: "block",
          margin: "0 auto",
          marginLeft: "350px",
          height: "125vh",
          boxShadow: "0 0 1000px rgba(0, 0, 0, 0.5)",
          borderRadius: "80px",
          // marginLeft: ""
        }}
      />
      <h2 style={{ 
        textAlign: "center",
        marginTop: "40px" }}>
        Download the Second Page of my Resume <a href={page2} download>Here</a>
      </h2>
      <img alt="resumePage2"
        src={page2}
        style={{
          display: "block",
          margin: "0 auto",
          height: "125vh",
          boxShadow: "0 0 1000px rgba(0, 0, 0, 0.5)",
          borderRadius: "80px",
        }}
      />
    </div>
  );
}

export default Resume;
