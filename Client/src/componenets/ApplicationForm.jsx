import { Formik } from "formik";
import { Button, Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { applicationFormSchema } from "../schemas/appformsch";
import CustomInput from "./custom_inputs/CustomInput";
import CustomSelect from "./custom_inputs/CustomSelect";
import CustomConditionalInput from "./custom_inputs/CustomConditionalInput";
import { handleUpload } from "../utils/upload";
import { BASE_URL } from "../constant";
import ProgressModal from "./ProgresModal";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../../styles/app.module.css";

export const ApplicationForm = ({
  vacancy,
  dataTypeInfo,
  setApplicationForm,
  setShowOpenVacancies,
}) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [typeOf,setTypeOf ] = useState("");
  const onSubmit = async (values, actions) => {
    const {
      workExperience,
      academicRank,
      teachingExperience,
      researchExperience,
      KPI,
      no_projects,
      no_publications,
    } = values;
   
    let d = {
      workExperience: parseInt(workExperience),
      academicRank,
      teachingExperience: parseInt(teachingExperience),
      researchExperience,
      KPI,
      no_projects: parseInt(no_projects),
      no_publications:parseInt(no_publications),
      vacancyId: vacancy.id,
    };
    const documents = [
      {
        name: "academicRankDocument",
        file: values.academicRankDocument,
      },
      {
        name: "workExperienceDocument",
        file: values.workExperienceDocument,
      },
      {
        name: "teachingExperienceDocument",
        file: values.teachingExperienceDocument,
      },
      {
        name: "kpiDocument",
        file: values.kpiDocument,
      },
      {
        name: "researchExperienceDocument",
        file: values.researchExperienceDocument,
      },
      {
        name: "strategicPlanDocument",
        file: values.strategicPlanDocument,
      },
    ];
    const res = await handleUpload(documents);
    //returned promise allSettle

    let docs = {};
    let allSettled = res.map((r, i) => {
      if (r.status === "fulfilled") {
        docs[documents[i].name] = r.value[documents[i].name];
      } else {
        toast.error(`Error uploading ${documents[i].name}`);
        return;
      }
    });

    let data = {
      data: d,
      documents: docs,
    };
    const application = await fetch(
      `${BASE_URL}/vacancies/${vacancy.id}/applications`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (application.status === 200) {
      setShow(false);
      toast.success("Application submitted successfully");
      setApplicationForm(false);
      setShowOpenVacancies(true);
    } else {
      setShow(false);
      toast.error("Error submitting application");
    }
    const response = await application.json();
  };
  console.log(vacancy, dataTypeInfo);
  return (
    <>
      <Formik
        initialValues={{
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
        {({
          isSubmitting,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          status,
        }) => (
          <>
            <Form
              noValidate
              onSubmit={handleSubmit}
              className="my-3 p-3 shadow"
            >
              <h2>Apply for {vacancy[dataTypeInfo[0]]}</h2>
              <p>{vacancy[dataTypeInfo[1]]}</p>

              <p>
                <b>Requirements:</b>
                {vacancy[dataTypeInfo[2]]}
              </p>
              <br />

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
                  <Form.Group controlId={`academicRankDocument`}>
                    <Form.Label>Academic Rank Document</Form.Label>
                    <Form.Control
                      type="file"
                      name="academicRankDocument"
                      onChange={(event) => {
                        values.academicRankDocument =
                          event.currentTarget.files[0];
                        console.log(values.academicRankDocument);
                      }}
                      onBlur={handleBlur}
                      isInvalid={
                        touched.academicRankDocument &&
                        errors.academicRankDocument
                      }
                      feedback={errors.academicRankDocument}
                      accept=".pdf"
                    />
                    {errors.academicRankDocument && (
                      <Form.Control.Feedback type="invalid">
                        {errors.academicRankDocument}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
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
                  <Form.Group controlId={`workExperienceDocument`}>
                    <Form.Label>Work Experience Document</Form.Label>
                    <Form.Control
                      type="file"
                      name="workExperienceDocument"
                      onChange={(event) => {
                        values.workExperienceDocument =
                          event.currentTarget.files[0];
                      }}
                      onBlur={handleBlur}
                      isInvalid={
                        touched.workExperienceDocument &&
                        errors.workExperienceDocument
                      }
                      feedback={errors.workExperienceDocument}
                      accept=".pdf"
                    />
                    {errors.workExperienceDocument && (
                      <Form.Control.Feedback type="invalid">
                        {errors.workExperienceDocument}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
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
                  <Form.Group controlId={`teachingExperienceDocument`}>
                    <Form.Label>Teaching Experience Document</Form.Label>
                    <Form.Control
                      type="file"
                      name="teachingExperienceDocument"
                      onChange={(event) => {
                        values.teachingExperienceDocument =
                          event.currentTarget.files[0];
                        console.log(values.teachingExperienceDocument);
                      }}
                      onBlur={handleBlur}
                      isInvalid={
                        touched.teachingExperienceDocument &&
                        errors.teachingExperienceDocument
                      }
                      feedback={errors.teachingExperienceDocument}
                      accept=".pdf"
                    />
                    {errors.teachingExperienceDocument && (
                      <Form.Control.Feedback type="invalid">
                        {errors.teachingExperienceDocument}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
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
                    setTypeOf={setTypeOf}
                  ></CustomConditionalInput>
                </Col>
                <Col>
                  <Form.Group controlId={`researchExperienceDocument`}>
                    <Form.Label>Research Experience Document</Form.Label>
                    <Form.Control
                      type="file"
                      name="researchExperienceDocument"
                      onChange={(event) => {
                        values.researchExperienceDocument =
                          event.currentTarget.files[0];
                        console.log(values.researchExperienceDocument);
                      }}
                      onBlur={handleBlur}
                      isInvalid={
                        touched.researchExperienceDocument &&
                        errors.researchExperienceDocument
                      }
                      feedback={errors.researchExperienceDocument}
                      accept=".pdf"
                    />
                    {errors.researchExperienceDocument && (
                      <Form.Control.Feedback type="invalid">
                        {errors.researchExperienceDocument}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
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
                  <Form.Group controlId={`kpiDocument`}>
                    <Form.Label>KPI Document</Form.Label>
                    <Form.Control
                      type="file"
                      name="kpiDocument"
                      onChange={(event) => {
                        values.kpiDocument = event.currentTarget.files[0];
                        console.log(values.kpiDocument);
                      }}
                      onBlur={handleBlur}
                      isInvalid={touched.kpiDocument && errors.kpiDocument}
                      feedback={errors.kpiDocument}
                      accept=".pdf"
                    />
                    {errors.kpiDocument && (
                      <Form.Control.Feedback type="invalid">
                        {errors.kpiDocument}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <br />
              <Form.Group controlId={`strategicPlanDocument`}>
                <Form.Label>KPI Document</Form.Label>
                <Form.Control
                  type="file"
                  name="strategicPlanDocument"
                  onChange={(event) => {
                    values.strategicPlanDocument = event.currentTarget.files[0];
                    console.log(values.strategicPlanDocument);
                  }}
                  onBlur={handleBlur}
                  isInvalid={
                    touched.strategicPlanDocument &&
                    errors.strategicPlanDocument
                  }
                  feedback={errors.strategicPlanDocument}
                  accept=".pdf"
                />
                {errors.strategicPlanDocument && (
                  <Form.Control.Feedback type="invalid">
                    {errors.strategicPlanDocument}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

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
      <ProgressModal show={show} percent={100} onClose={setShow} />
    </>
  );
};
