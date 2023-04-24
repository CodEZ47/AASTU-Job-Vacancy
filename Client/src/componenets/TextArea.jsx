import { useState } from 'react';
import { Form } from 'react-bootstrap';

export const TextArea = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label><h5>Add Description</h5></Form.Label>
      <Form.Control as="textarea" rows={3} value={value} onChange={handleChange} />
    </Form.Group>
  );
};
