// import React, { useState } from "react";
import { BASE_URL } from "../constant";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { DEPARTMENTS } from "../constant";
import {Card} from 'react-bootstrap'
import { useAtom } from "jotai";
import { authAtom } from "../atoms/authAtom";
export default function ApplicantSignUp() {
  const [auth,setAuth] = useAtom(authAtom);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .matches(/@aastu\.edu\.et$/, "Invalid aastu email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    university_id: Yup.string().required("University ID is required"),
    name: Yup.string().required("Name is required"),
    phone_number: Yup.string()
      .matches(/^(\+251|0)(7|9)[0-9]{8}$/, "Invalid Ethiopian phone number")
      .required("Phone number is required"),
    department: Yup.string().required("Department is required"),
  });

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    onSubmit(values, setStatus);
    setSubmitting(false);
  };
  const navigate = useNavigate();
  const onSubmit = async (values, setStatus) => {
    const { email, password, university_id, name, phone_number, department } =
      values;
    const user = {
      email,
      password,
      university_id,
      name,
      phone_number,
      department,
      role: "APPLICANT",
    };
    console.log(user);
    try {
      const auth = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const response = await auth.json();
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("role", response.role);
        setAuth({
          token: response.token,
          role: response.role,
          isAuthenticated: true,
        });
        navigate("/dashboard");
      } else {
        setStatus(response.message);
      }
    } catch (err) {
      setStatus(err.message);
      console.error(err.message);
    } finally {
      console.log(""); //for getting rid of empty block statement error in esLint
    }
  };
  return (

    <Card className='p-5'>
    <Card.Body>
    <h1>AASTU JOB VACANCY</h1>
    <h2>Registration</h2>
    <Formik initialValues={{ email: '', password: '', name: '', phone_number:'', university_id: '', department: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, status }) => (
      <Form noValidate onSubmit={handleSubmit}>
        {status && <div className="alert alert-danger">{status}</div>}
        <Form.Group controlId="name">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.name && !!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.email && !!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="university_id">
          <Form.Label>University Id</Form.Label>
          <Form.Control
            type="text"
            name="university_id"
            value={values.university_id}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.university_id && !!errors.university_id}
          />
          <Form.Control.Feedback type="invalid">{errors.university_id}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.password && !!errors.password}
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="phone_number">

            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone_number"
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.phone_number && !!errors.phone_number}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone_number}
            </Form.Control.Feedback>
          </Form.Group>
          {/* form option for department */}
          <Form.Group controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Control
              as="select"
              name="department"
              value={values.department}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.department && !!errors.department}
            >
              <option value="">Select Department</option>
              {DEPARTMENTS.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </Form.Control>

            <Form.Control.Feedback type="invalid">{errors.department}</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className='mt-3' disabled={isSubmitting}>
          {isSubmitting ? 'Loading...' : 'Sign in'}
        </Button>
      </Form>
    )}
  </Formik>
  </Card.Body>
  </Card>

  );
}
