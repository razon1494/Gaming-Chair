import React from 'react';
import {Button, Col, FloatingLabel, Form, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './ContactUs.css';
const ContactUs=() => {
    return (
        <div className='contact-us-container p-3 border rounded-3'>
        <h2 className='text-center contact-title' >Contact Us</h2>
        {/* responsive contact us form */}
<Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Name" />
  </Form.Group>

<FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <Link to='/'><Button variant="success" className='my-3'>
    Submit
  </Button></Link>
</Form>

</div>
    );
};

export default ContactUs;