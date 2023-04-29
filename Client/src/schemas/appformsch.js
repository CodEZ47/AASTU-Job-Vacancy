import * as Yup from "yup";

// const FILE_SIZE = 16000 * 1024;
const allowedExtensions = ["pdf"];

export const applicationFormSchema = Yup.object().shape({
  KPI: Yup.number()
    .required("Required")
    .min(0, "KPI must be at least 0")
    .max(100, "KPI cannot be greater than 100"),
  teachingExperience: Yup.string().required("Required"),
  researchExperience: Yup.string().required("Required"),
  workExperience: Yup.string().required("Required"),
  academicRank: Yup.string().required("Required"),

  workExperienceDocument: Yup.mixed()
    .required("Required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && allowedExtensions.includes(value.type.split("/")[1])
    ),
  teachingExperienceDocument: Yup.mixed()
    .required("Required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && allowedExtensions.includes(value.type.split("/")[1])
    ),
  researchExperienceDocument: Yup.mixed()
    .required("Required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && allowedExtensions.includes(value.type.split("/")[1])
    ),
  academicRankDocument: Yup.mixed()
    .required("Required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && allowedExtensions.includes(value.type.split("/")[1])
    ),
  kpiDocument: Yup.mixed()
    .required("Required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && allowedExtensions.includes(value.type.split("/")[1])
    ),
  strategicPlanDocument: Yup.mixed()
    .required("Required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && allowedExtensions.includes(value.type.split("/")[1])
    ),
});
