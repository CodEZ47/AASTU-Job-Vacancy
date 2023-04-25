import { useField } from "formik";
import Form from "react-bootstrap/Form";

const CustomSelect = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Form.Group controlId={props.id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        {...field}
        {...props}
        isInvalid={meta.touched && meta.error}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
      {meta.touched && meta.error && (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default CustomSelect;
