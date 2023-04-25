import * as Yup from "yup";

// const FILE_SIZE = 16000 * 1024;
const allowedExtensions = ["pdf"];

export const applicationFormSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(/@aastu\.edu\.et$/, "Email must end with @aastu.edu.et")
    .required("Required"),
  academicRank: Yup.string().required("Required"),
  workExperience: Yup.string().required("Required"),
  teachingExperience: Yup.string().required("Required"),
  researchExperience: Yup.number().required("Required"),

  KPI: Yup.number()
    .required("Required")
    .min(0, "KPI must be at least 0")
    .max(100, "KPI cannot be greater than 100"),
  academicRankDocument: Yup.mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported Format Pdf only", (value) => {
      let fileExtension = value.split(".").pop().toLowerCase();
      return value && allowedExtensions.includes(fileExtension);
    }),
  workExperienceDocument: Yup.mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported Format Pdf only", (value) => {
      let fileExtension = value.split(".").pop().toLowerCase();
      return value && allowedExtensions.includes(fileExtension);
    }),
  teachingExperienceDocument: Yup.mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported Format Pdf only", (value) => {
      let fileExtension = value.split(".").pop().toLowerCase();
      return value && allowedExtensions.includes(fileExtension);
    }),
  kpiDocument: Yup.mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported Format Pdf only", (value) => {
      let fileExtension = value.split(".").pop().toLowerCase();
      return value && allowedExtensions.includes(fileExtension);
    }),
  researchExperienceDocument: Yup.mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported Format Pdf only", (value) => {
      let fileExtension = value.split(".").pop().toLowerCase();
      return value && allowedExtensions.includes(fileExtension);
    }),
  strategicPlanDocument: Yup.mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported Format Pdf only", (value) => {
      let fileExtension = value.split(".").pop().toLowerCase();
      return value && allowedExtensions.includes(fileExtension);
    }),
});
