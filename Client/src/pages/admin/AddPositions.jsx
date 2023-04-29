import { useState, React } from "react";
import { RadioButton } from "../../componenets/RadioButton";
import { TextArea } from "../../componenets/TextArea";
import List from "../../componenets/List";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const officesList = [null, "Office1", "Office2", "Office3"];
const positionsList = [
  [null, "High Position1", "High Position2", "High Position3"],
  [null, "Mid Position1", "Mid Position2", "Mid Position3"],
  [null, "Low Position1", "Low Position2", "Low Position3"],
];
const levels = ["High", "Medium", "Low"];

const requirementsList = [
  {
    Level: "High",
    "Academic Rank": "Value",
    "Leadership Experience": "Value",
    "Teaching Experience": "Value",
    "Research Experience": "Value",
    "Community Service": "Value",
    "Performance Evaluation": "Value",
    "Immediate Supervisor": "Value",
  },
  {
    Level: "Low",
    "Academic Rank": "Value",
    "Leadership Experience": "Value",
    "Teaching Experience": "Value",
    "Research Experience": "Value",
    "Community Service": "Value",
    "Performance Evaluation": "Value",
    "Immediate Supervisor": "Value",
  },
];

export const AddPositions = () => {
  const [level, setLevel] = useState(null);

  let selectedPosition;
  let requirements;
  if (level === "Low") {
    selectedPosition = positionsList[2];
    requirements = requirementsList[1];
  } else {
    selectedPosition = positionsList[1];
    requirements = requirementsList[0];
  }

  const [office, setOffice] = useState(null);
  const [position, setPosition] = useState(null);
  const [description, setDescription] = useState("");

  const handleOptionChange = (newOption) => {
    setLevel(newOption);
  };
  const handleTextAreaChange = (newText) => {
    setDescription(newText);
  };

  const [result, setResult] = useState({
    Level: "",
    Office: "",
    Position: "",
    Description: "",
  });

  const validateForm = () => {
    const selectOfficeLabel = document.querySelector(".selectOfficeError");
    const selectPositionLabel = document.querySelector(".selectPositionError");
    const selectLevelLabel = document.querySelector(".selectLevelError");

    if (office === null) selectOfficeLabel.classList.add("error");
    else selectOfficeLabel.classList.remove("error");

    if (level === null) selectLevelLabel.classList.add("error");
    else selectLevelLabel.classList.remove("error");

    if (position === null) selectPositionLabel.classList.add("error");
    else selectPositionLabel.classList.remove("error");

    if (office !== null && level !== null && position !== null) {
      setResult({
        Level: level,
        Office: office,
        Position: position,
        Description: description,
      });
    }
  };

  return (
    <div className="addPosition">
      <h3>Add Position</h3>
      <Form.Group controlId="selectOffice">
        <Form.Label className="selectOfficeError">
          <h5>Select an Office *</h5>
        </Form.Label>
        <Form.Select
          value={office}
          onChange={(e) => {
            setOffice(e.target.value);
          }}
        >
          {officesList.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="selectLevel">
        <Form.Label className="selectLevelError">
          <h5>Select a Level *</h5>
        </Form.Label>
        <RadioButton
          options={levels}
          selectedOption={level}
          onOptionChange={handleOptionChange}
        />
      </Form.Group>

      <Form.Group controlId="selectPosition">
        <Form.Label className="selectPositionError">
          <h5>Select a Position *</h5>
        </Form.Label>
        <Form.Select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          {selectedPosition.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="addDescription">
        <TextArea onChange={handleTextAreaChange} />
      </Form.Group>

      <h3>Requirements</h3>
      <List data={requirements} />

      <Button onClick={validateForm}>Add Position</Button>

      {console.log(result)}
      {Object.entries(result).map(([key, value]) => (
        <p key={key}>
          <h5>
            <b>{key}: </b>
            {value}
          </h5>
          <br />
        </p>
      ))}
    </div>
  );
};
