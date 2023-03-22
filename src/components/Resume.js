import resume from "../Image/UCF_Resume.png";

function Resume() {
  return (
    <div className="resume-container">
      <h1 style={{ textAlign: "center" }}>Resume</h1>
      <h2 style={{ textAlign: "center" }}>
        Download my Resume <a href={resume} download>Here</a>
      </h2>
      <img alt="resumeDownload"
        src={resume}
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

  