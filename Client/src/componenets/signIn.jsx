import { Form, Button, Card } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { BASE_URL } from "../constant";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../atoms/authAtom";
import { Link } from "react-router-dom";

import styles from "../styles/loginForm.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /@aastu\.edu\.et$/,
      "Your email must be your university email address"
    )
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    onSubmit(values, setStatus);
    setSubmitting(false);
  };
  const navigate = useNavigate();
  const onSubmit = async (values, setStatus) => {
    const { email, password } = values;
    const user = {
      email,
      password,
    };
    try {
      const auth = await fetch(`${BASE_URL}/auth/login`, {
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
        if (response.role == "APPLICANT") navigate("/OpenVacancies");
      } else {
        setStatus("Invalid email or password");
      }
    } catch (err) {
      setStatus(err.message);
      console.error(err.message);
    } finally {
      console.log(""); //for getting rid of empty block statement error in esLint
    }
  };
  return (
    <div
      className={styles["login-container"]}
      style={{ width: "100%", height: "80vh" }}
    >
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <h1>AASTU JOB VACANCY</h1>
          <h5 className="mt-2">Login</h5>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              status,
            }) => (
              <Form onSubmit={handleSubmit}>
                {status && <div className="alert alert-danger">{status}</div>}
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
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
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
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="mt-3" disabled={isSubmitting}>
                  {isSubmitting ? "Loading..." : "Sign in"}
                </Button>
              </Form>
            )}
          </Formik>
          <p>
            Don`&apos;`t have an account?
            <span>
              <Link to="/signup">Register</Link>
            </span>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
