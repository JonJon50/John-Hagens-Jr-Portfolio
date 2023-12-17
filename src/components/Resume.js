import React, { useState } from "react";
import page1 from "../assets/Image/Resume1.png";
import page2 from "../assets/Image/Certificate.png";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  justifyContent: "center", 
  minHeight: "100vh", 
  marginLeft: "10%", 
  marginRight: "10%", 
  padding: "50px",
  font : "20px Arial, sans-serif",
};

const headingStyle = {
  textAlign: "center",
};

const linkStyle = {
  textAlign: "center",
  marginTop: "20px",
  textDecoration: "none", 
};

const imageStyle = {
  display: "block",
  margin: "0 auto",
  maxWidth: "100%",
  height: "auto",
  boxShadow: "0 0 1000px rgba(0, 0, 0, 0.5)",
  borderRadius: "50px",
};

const bracketStyle = {
  color: "#61dafb", 
  userSelect: "none", 
  fontSize: "1em", 
};

function Resume() {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  // Adjust the link style to be inline-block to allow for the hover effect
  const linkContainerStyle = {
    ...linkStyle,
    display: 'inline-block',
    cursor: 'pointer' // To show it's clickable
  };

  return (
    <div style={containerStyle} className="resume-container">
      <h1 style={headingStyle}>Resume</h1>
      {/* Wrap the link and brackets in a div and apply the hover styles to this div */}
      <div
        style={linkContainerStyle}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {isHovered && <span style={bracketStyle}>[</span>}
        <a href={page1} download style={{ color: "inherit", textDecoration: "none" }}>
         ~ Download ~
        </a>
        {isHovered && <span style={bracketStyle}>]</span>}
      </div>
      <img alt="resumePage1" src={page1} style={imageStyle} />
      <h2 style={headingStyle}>
        Certification 
      </h2>
      <img alt="resumePage2" src={page2} style={imageStyle} />
    </div>
  );
}

export default Resume;