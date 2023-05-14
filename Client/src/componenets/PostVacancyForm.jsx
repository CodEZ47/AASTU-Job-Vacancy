import React from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";

import { postVacancyValidation } from "../schemas/postVacancyValidation";
import CustomSelect from "./custom_inputs/CustomSelect.jsx";
import { BASE_URL } from "../constant";
import { ToastContainer, toast } from "react-toastify";

export const PostVacancyForm = () => {
  const [positions, setPositions] = React.useState([]);
  const fetchPositions = async () => {
    try {
      const response = await fetch(`${BASE_URL}/positions`);
      const data = await response.json();
      let positionsArray = [];
      positionsArray.push({ value: "", label: "--Select Job Position--" });
      data.forEach((position) => {
        positionsArray.push({
          value: position.id,
          label: position.name,
        });
      });
      setPositions(positionsArray);
      console.log(positionsArray);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const data = {
        name: values.title,
        positionId: values.position,
        description: values.description,
      };
      const response = await fetch(`${BASE_URL}/vacancies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Something went wrong");
      toast.success("Vacancy added successfully");
      const vacancy = await response.json();
      // reset form
      resetForm();
    } catch (e) {
      // fire toast
      console.log(e);
      toast.error("Something went wrong");
    }
  };
  React.useEffect(() => {
    fetchPositions();
  }, []);
  return (
    <div>
      <ToastContainer />
      <br />
      <h2>Add Vacancy</h2>
      <Formik
        initialValues={{
          title: "",
          position: "",
          description: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={postVacancyValidation}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className="my-3 p-3 shadow">
            <Form.Group controlId="title">
              <Form.Label>Title *</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                isInvalid={formik.touched.title && formik.errors.title}
              />
              {formik.touched.title && formik.errors.title && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.title}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <CustomSelect
              label="Position *"
              name="position"
              options={positions}
            />

            <Form.Group controlId="formDescription">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                isInvalid={
                  formik.touched.description && formik.errors.description
                }
              />
              {formik.touched.description && formik.errors.description && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.description}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <br />
            <Button type="submit" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "Loading..." : "Add Vacancy"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// positions = []
// Position Created Using <PostVacancy positionsArray={positions} />
