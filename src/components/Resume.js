import React from "react";
import page1 from "../Image/Resume1.png";
import page2 from "../Image/Certificate.png";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Center horizontally
  justifyContent: "center", // Center vertically
  minHeight: "100vh", // Set a minimum height to occupy the entire viewport height
  marginLeft: "12%", // Add left margin to move content to the right
};

const headingStyle = {
  textAlign: "center",
};

const linkStyle = {
  textAlign: "center",
  marginTop: "20px",
};

const imageStyle = {
  display: "block",
  margin: "0 auto",
  maxWidth: "100%",
  height: "auto",
  boxShadow: "0 0 1000px rgba(0, 0, 0, 0.5)",
  borderRadius: "80px",
};

function Resume() {
  return (
    <div style={containerStyle} className="resume-container">
      <h1 style={headingStyle}>Resume</h1>
      <h2 style={linkStyle}>
        Download <a href={page1} download>Here</a>
      </h2>
      <img alt="resumePage1" src={page1} style={imageStyle} />
      <h2 style={linkStyle}>
        Certificate of <a href={page2} download>Completion</a>
      </h2>
      <img alt="resumePage2" src={page2} style={imageStyle} />
    </div>
  );
}

export default Resume;

