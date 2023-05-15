import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditOffice = ({ office, onSave, onCancel }) => {
  const [title, setTitle] = useState(office.title);
  const [description, setDescription] = useState(office.description);

  const handleSave = () => {
    onSave({ ...office, title, description });
  };

  return (
    <Modal show={true} onHide={onCancel} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Office Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditOffice;
