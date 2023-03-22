import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'center', marginRight:"35%", marginLeft:"35%" }}>
      <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px', marginTop: '100px' }}>
        <h2>Contact us</h2>

        <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

        <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

        <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

        <MDBTextArea wrapperClass='mb-4' label='Message' />

        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

        <MDBBtn color='primary' block className='my-4'>
          Send
        </MDBBtn>
      </form>

     <p style={{marginLeft:"60px"}}>Or Email me directly <a href="mailto:ginuwine104@gmail.com">Here</a></p>

    </div>
  );
}

export default Contact;
