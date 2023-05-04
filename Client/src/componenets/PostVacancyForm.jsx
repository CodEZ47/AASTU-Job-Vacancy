import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';

import { postVacancyValidation } from '../schemas/postVacancyValidation';
import CustomSelect from "./custom_inputs/CustomSelect";

export const PostVacancyForm = ({ positionsArray }) => {
  return (
    <div>
        <br />
        <h2>Add Vacancy</h2>
      <Formik
        initialValues={{
          title: '',
          position: 'select position',
          description: '',
        }}
        onSubmit={function(values) {
          alert(`Title: ${values.title}. Position: ${values.position}. Description: ${values.description}`);
        }}
        validationSchema={postVacancyValidation}
      >
        {formik => (
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
                    placeholder="--Select Academic Rank--"
                    options={positionsArray}
                  />

            <Form.Group controlId="formDescription">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                isInvalid={formik.touched.description && formik.errors.description}
              />
              {formik.touched.description && formik.errors.description && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.description}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <br />
            <Button type="submit">Add Vacancy</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

// positions = []
// Position Created Using <PostVacancy positionsArray={positions} />