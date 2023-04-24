// import { useState } from "react";
import { Form } from "react-bootstrap";

const CustomFormInput = ({ label, options, value, type, onChange, accept }) => {
  const renderInput = () => {
    switch (type) {
      case "dropdown":
        return (
          <Form.Select onChange={onChange}>
            <option value="">--Select Option--</option>
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </Form.Select>
        );
      case "file":
        return <Form.Control type="file" accept={accept} onChange={onChange} />;
      case "number":
        return (
          <Form.Control
            type="number"
            min="0"
            max="100"
            value={value}
            onChange={onChange}
            required
          />
        );
      case "research":
        return (
          <>
            <Form.Select onChange={onChange}>
              <option>Select an option</option>
              <option value="publications">Research publications</option>
              <option value="projects">Research projects</option>
            </Form.Select>
            {value === "publications" ? (
              <Form.Select onChange={onChange}>
                <option value="">--Number of Publications--</option>
                {[...Array(5)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </Form.Select>
            ) : value === "projects" ? (
              <Form.Select onChange={onChange}>
                <option value="">--Number of Projects--</option>
                {[...Array(3)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </Form.Select>
            ) : null}
          </>
        );
      default:
        return (
          <Form.Control
            type={type}
            value={value}
            onChange={onChange}
            required
          />
        );
    }
  };

  return (
    <Form.Group controlId={label}>
      <Form.Label>{label}:</Form.Label>
      {renderInput()}
    </Form.Group>
  );
};

export default CustomFormInput;
