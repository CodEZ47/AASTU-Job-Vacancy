import { useField } from "formik";
import { Form } from "react-bootstrap";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Form.Group controlId={props.id || props.name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        {...props}
        isInvalid={meta.touched && meta.error}
      />
      {meta.touched && meta.error ? (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      ) : null}
    </Form.Group>
  );
};

export default CustomInput;
