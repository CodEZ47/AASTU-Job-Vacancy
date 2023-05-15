import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditPosition = ({ position, onSave, onCancel, levels }) => {
  const [name, setName] = useState(position.name);
  const [description, setDescription] = useState(position.description);
  const [requirements, setRequirements] = useState(position.requirements);
  const [selectedLevel, setSelectedLevel] = useState(position.level);

  const handleSave = () => {
    onSave({ ...position, name, description, requirements, level: selectedLevel });
  };

  return (
    <Modal show={true} onHide={onCancel} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Position Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="level">
            <Form.Label>Level</Form.Label>
            <Form.Control
              as="select"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="requirements">
            <Form.Label>Requirements</Form.Label>
            <Form.Control
              as="textarea"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
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

export default EditPosition;
