import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import * as handlers from "../functions/formHandlers"; //handler functions for all the submit fields
// import { metrics } from "../functions/metrics"; //static metrics for the requirements that show up in the dropdowns below some of the input fields like academic rank etc
import CustomFormInput from "./CustomFormInput";

export const ApplicationForm = ({ vacancy, dataTypeInfo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [academicRank, setAcademicRank] = useState("");
  const [academicRankDocument, setAcademicRankDocument] = useState(null);
  const [workExperience, setWorkExperience] = useState("");
  const [workExperienceDocument, setWorkExperienceDocument] = useState(null);
  const [teachingExperience, setTeachingExperience] = useState("");
  const [teachingExperienceDocument, setTeachingExperienceDocument] =
    useState(null);
  const [researchExperience, setResearchExperience] = useState("");
  const [researchExperienceDocument, setResearchExperienceDocument] =
    useState(null);
  const [KPI, setKPI] = useState("");
  const [KPIDocument, setKPIDocument] = useState(null);
  const [strategicPlan, setStrategicPlan] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted:", {
      name,
      email,
      resume,
      academicRank,
      academicRankDocument,
      workExperience,
      workExperienceDocument,
      teachingExperience,
      teachingExperienceDocument,
      researchExperience,
      researchExperienceDocument,
      KPI,
      KPIDocument,
      strategicPlan,
    });
    // Reset form fields
    setName("");
    setEmail("");
    setResume(null);
    setAcademicRank("");
    setAcademicRankDocument(null);
    setWorkExperience("");
    setWorkExperienceDocument(null);
    setTeachingExperience("");
    setTeachingExperienceDocument(null);
    setResearchExperience("");
    setResearchExperienceDocument(null);
    setKPI("");
    setKPIDocument(null);
    setStrategicPlan(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Apply for {vacancy[dataTypeInfo[0]]}</h2>
      <p>{vacancy[dataTypeInfo[1]]}</p>
      {/* Name Input */}
      <CustomFormInput
        label="Name"
        type="text"
        value={name}
        onChange={handlers.handleTextFieldChange(setName)}
        required
      />

      <CustomFormInput
        label="Email"
        type="email"
        value={email}
        onChange={handlers.handleTextFieldChange(setEmail)}
        required
      />

      <CustomFormInput
        label="Academic Rank"
        type="dropdown"
        value={academicRank}
        onChange={handlers.handleTextFieldChange(setAcademicRank)}
        options={[
          "Lecturer",
          "Assistant Professor",
          "Associate Professor",
          "Professor",
        ]}
        required
      />

      <CustomFormInput
        label="Academic Rank Document"
        type="file"
        onChange={handlers.handleFileChange(setAcademicRankDocument)}
        required
      />

      <CustomFormInput
        label="Work Experience"
        type="dropdown"
        value={workExperience}
        onChange={handlers.handleTextFieldChange(setWorkExperience)}
        options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        required
      />

      <CustomFormInput
        label="Academic Rank Document"
        type="file"
        onChange={handlers.handleFileChange(setAcademicRankDocument)}
        required
      />
      <CustomFormInput
        label="Teaching Experience"
        type="dropdown"
        value={teachingExperience}
        onChange={handlers.handleTextFieldChange(setTeachingExperience)}
        options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        required
      />
      <CustomFormInput
        label="Teaching Experience Document"
        type="file"
        onChange={handlers.handleFileChange(setTeachingExperienceDocument)}
        required
      />
      <CustomFormInput
        type="research"
        label="Research Experience"
        onChange={handlers.handleTextFieldChange(setResearchExperience)}
        value={researchExperience}
        required
      />
      <CustomFormInput
        label="Research Experience Document"
        type="file"
        onChange={handlers.handleFileChange(setResearchExperienceDocument)}
        required
      />
      <CustomFormInput
        type="number"
        label="KPI"
        onChange={handlers.handleTextFieldChange(setKPI)}
        value={KPI}
        required
      />
      <CustomFormInput
        label="KPI Document"
        type="file"
        onChange={handlers.handleFileChange(setKPIDocument)}
        required
      />

      <CustomFormInput
        label="Strategic Plan"
        type="file"
        onChange={handlers.handleFileChange(setStrategicPlan)}
        required
      />
      <p>
        <b>Requirements:</b>
        {vacancy[dataTypeInfo[2]]}
      </p>
      <br />

      <br />
      <Button variant="primary" type="submit" className="float-end">
        Submit Application
      </Button>
    </Form>
  );
};

// export default ApplicationForm;
