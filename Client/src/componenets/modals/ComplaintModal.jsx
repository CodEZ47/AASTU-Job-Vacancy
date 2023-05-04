import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export const ComplaintModal = ({ show, onHide, applicationId }) => {
  const [complaintText, setComplaintText] = useState("");

  const handleComplaintTextChange = (event) =>
    setComplaintText(event.target.value);

  const handleComplaintSubmit = () => {
    // Do something with the complaint text and application ID
    console.log(
      "Submitting complaint for application #" +
        applicationId +
        ": " +
        complaintText
    );
    // Close the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Submit Complaint</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="complaintTextArea">
            <Form.Label>Complaint Text:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={complaintText}
              onChange={handleComplaintTextChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleComplaintSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// export default ComplaintModal;
