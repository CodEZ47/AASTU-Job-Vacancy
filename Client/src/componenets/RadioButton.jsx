import React from 'react';
import { Form } from 'react-bootstrap';

export const RadioButton = (props) => {
  const { options, selectedOption, onOptionChange } = props;

  const handleOptionChange = (e) => {
    onOptionChange(e.target.value);
  };

  return (
    <>
      {options.map((option) => (
        <Form.Check
          key={option}
          type="switch"
          label={option}
          value={option}
          checked={selectedOption === option}
          onChange={handleOptionChange}
        />
      ))}
    </>
  );
};
