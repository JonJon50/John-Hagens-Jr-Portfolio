import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";

function Contact() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center the form horizontally
      justifyContent: "center", // Center the form vertically
      padding: "5rem", // Adds padding around the form
      minHeight: "100vh" // Ensures the div takes at least the full height of the viewport
    }}>
      <form
        id="form"
        className="text-center w-100" // Makes the form take up 100% width of its parent
        style={{ maxWidth: "500px" }} // Limits the maximum width of the form
      >
        <h2>Contact us</h2>

        <MDBInput label="Name" wrapperClass="mb-4" />

        <MDBInput type="email" label="Email address" wrapperClass="mb-4" />

        <MDBInput label="Subject" wrapperClass="mb-4" />

        <MDBTextArea wrapperClass="mb-4" label="Message" />

        <div className="d-flex justify-content-center mb-4">
          <MDBCheckbox label="Send me a copy" />
        </div>

        <MDBBtn color="primary" block className="my-4">
          Send
        </MDBBtn>
      </form>
      <p>
        Or Email me directly <a href="mailto:ginuwine104@gmail.com">Here</a>
      </p>
    </div>
  );
}

export default Contact;
