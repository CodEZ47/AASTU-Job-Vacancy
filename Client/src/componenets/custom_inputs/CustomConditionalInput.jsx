import { useField } from "formik";
import { Form } from "react-bootstrap";
import CustomSelect from "./CustomSelect";

const CustomConditionalInput = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  const inp = field.value;

  return (
    <Form.Group>
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
      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
      {inp == 1 && (
        <CustomSelect
          label="Number of Projects"
          name="no_projects"
          options={[
            { value: "", label: "--Select Number of Projects--" },
            { value: 1, label: "1 Project" },
            { value: 2, label: "2 Projects" },
            { value: 3, label: "3 Projects" },
          ]}
          required
        />
      )}
      {inp == 2 && (
        <CustomSelect
          label="Number of Publications"
          name="no_publications"
          options={[
            { value: "", label: "--Select Number of Publications--" },
            { value: 1, label: "1 Publication" },
            { value: 2, label: "2 Publications" },
            { value: 3, label: "3 Publications" },
            { value: 4, label: "4 Publications" },
            { value: 5, label: "5 Publications" },
          ]}
          required
        />
      )}
    </Form.Group>
  );
};

export default CustomConditionalInput;
