import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddPositionForm = ({ levels, onSave, onCancel }) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSave = () => {
    onSave({ name, level, description, requirements });
    setName("");
    setLevel("");
    setDescription("");
    setRequirements("");
  };

  return (
    <Modal show={true} onHide={onCancel} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Position</Modal.Title>
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
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              {levels.map((levelOption) => (
                <option key={levelOption} value={levelOption}>
                  {levelOption}
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
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPositionForm;
