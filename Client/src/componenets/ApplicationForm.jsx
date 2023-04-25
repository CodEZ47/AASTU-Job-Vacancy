import { Form, Formik } from "formik";
import { Button, Col, Row } from "react-bootstrap";

import { applicationFormSchema } from "../schemas/appformsch";
import CustomInput from "./custom_inputs/CustomInput";
import CustomSelect from "./custom_inputs/CustomSelect";
import CustomConditionalInput from "./custom_inputs/CustomConditionalInput";

// import "../../styles/app.module.css";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  console.log("Form Submitted");
};

export const ApplicationForm = ({ vacancy, dataTypeInfo }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        academicRank: "",
        workExperience: "",
        teachingExperience: "",
        researchExperience: "",
        KPI: "",
        academicRankDocument: undefined,
        workExperienceDocument: undefined,
        teachingExperienceDocument: undefined,

        kpiDocument: undefined,
        researchExperienceDocument: undefined,
        no_projects: "",
        no_publications: "",
        strategicPlanDocument: undefined,
      }}
      validationSchema={applicationFormSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <Form className="my-3 p-3 shadow">
            <h2>Apply for {vacancy[dataTypeInfo[0]]}</h2>
            <p>{vacancy[dataTypeInfo[1]]}</p>

            <p>
              <b>Requirements:</b>
              {vacancy[dataTypeInfo[2]]}
            </p>
            <br />

            <CustomInput
              label="Full Name"
              name="name"
              type="text"
              placeholder="Enter your Full Name"
            />

            <CustomInput
              label="Email"
              name="email"
              type="text"
              placeholder="Enter your email"
            />

            <br />
            <br />
            <br />

            <Row>
              <Col>
                <CustomSelect
                  label="Academic Rank"
                  name="academicRank"
                  placeholder="--Select Academic Rank--"
                  options={[
                    { value: "", label: "--Select Your Academic Rank--" },
                    { value: "Lecturer", label: "Lecturer" },
                    {
                      value: "Assistant Professor",
                      label: "Assistant Professor",
                    },
                    {
                      value: "Associate Professor",
                      label: "Associate Professor",
                    },
                    { value: "Professor", label: "Professor" },
                  ]}
                />
              </Col>
              <Col>
                <CustomInput
                  label="Academic Rank Document"
                  name="academicRankDocument"
                  type="file"
                  accept=".pdf"
                />
              </Col>
            </Row>

            <br />

            <Row>
              <Col>
                <CustomSelect
                  label="Work Experience"
                  name="workExperience"
                  options={[
                    { value: "", label: "--Select Work Experience--" },
                    { value: 1, label: "1 year" },
                    { value: 2, label: "2 years" },
                    { value: 3, label: "3 years" },
                    { value: 4, label: "4 years" },
                    { value: 5, label: "5 years" },
                    { value: 6, label: "6 years" },
                    { value: 7, label: "7 years" },
                    { value: 8, label: "8 years" },
                    { value: 9, label: "9 years" },
                    { value: 10, label: "10 or more years" },
                  ]}
                ></CustomSelect>
              </Col>

              <Col>
                <CustomInput
                  label="Work Experience Document"
                  name="workExperienceDocument"
                  type="file"
                  accept=".pdf"
                />
              </Col>
            </Row>

            <br />

            <Row>
              <Col>
                <CustomSelect
                  label="Teaching Experience"
                  name="teachingExperience"
                  placeholder="--Select Teaching Experience--"
                  options={[
                    { value: "", label: "--Select Teaching Experience--" },
                    { value: 1, label: "1 year" },
                    { value: 2, label: "2 years" },
                    { value: 3, label: "3 years" },
                    { value: 4, label: "4 years" },
                    { value: 5, label: "5 years" },
                    { value: 6, label: "6 years" },
                    { value: 7, label: "7 years" },
                    { value: 8, label: "8 years" },
                    { value: 9, label: "9 years" },
                    { value: 10, label: "10 or more years" },
                  ]}
                />
              </Col>
              <Col>
                <CustomInput
                  label="Teaching Experience Document"
                  name="teachingExperienceDocument"
                  type="file"
                  accept=".pdf"
                />
              </Col>
            </Row>

            <br />

            <Row>
              <Col>
                <CustomConditionalInput
                  label="Research Experience"
                  name="researchExperience"
                  options={[
                    { value: "", label: "--Select Research Experience--" },
                    { value: 1, label: "Projects " },
                    { value: 2, label: "Publication" },
                  ]}
                ></CustomConditionalInput>
              </Col>
              <Col>
                <CustomInput
                  label="Research Experience Document"
                  name="researchExperienceDocument"
                  type="file"
                  accept=".pdf"
                />
              </Col>
            </Row>

            <br />

            <Row>
              <Col>
                <CustomInput
                  label="KPI"
                  name="KPI"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0-100"
                />
              </Col>
              <Col>
                <CustomInput
                  label="KPI Document"
                  name="kpiDocument"
                  type="file"
                  accept=".pdf"
                />
              </Col>
            </Row>

            <br />

            <CustomInput
              label="Strategic Plan Document"
              name="strategicPlanDocument"
              type="file"
              accept=".pdf"
            />

            <br />
            <br />

            <Button
              variant="primary"
              disabled={isSubmitting}
              type="submit"
              className="float-end"
            >
              Submit
            </Button>
          </Form>
          <br />
          <br />
        </>
      )}
    </Formik>
  );
};
