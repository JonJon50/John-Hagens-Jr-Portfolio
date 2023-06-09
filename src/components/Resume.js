import React from "react";
import page1 from "../Image/Resume1.png";
import page2 from "../Image/Certificate.png";

function Resume() {
  return (
    <div className="resume-container">
      <h1 style={{ textAlign: "center" }}>Resume</h1>
      <h2 style={{ textAlign: "center" }}>
        Download <a href={page1} download>Here</a>
      </h2>
      <img
        alt="resumePage1"
        src={page1}
        style={{
          display: "block",
          margin: "0 auto",
          maxWidth: "100%",
          height: "auto",
          boxShadow: "0 0 1000px rgba(0, 0, 0, 0.5)",
          borderRadius: "80px",
        }}
      />
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Certificate of <a href={page2} download>Completion</a>
      </h2>
      <img
        alt="resumePage2"
        src={page2}
        style={{
          display: "block",
          margin: "0 auto",
          maxWidth: "100%",
          height: "auto",
          boxShadow: "0 0 1000px rgba(0, 0, 0, 0.5)",
          borderRadius: "80px",
        }}
      />
    </div>
  );
}

export default Resume;
