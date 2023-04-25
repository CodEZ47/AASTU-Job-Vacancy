import List from "../../componenets/List";

const open_vacancies = [
  {
    id: 1,
    title: "Software Developer",
    description:
      "We are seeking a talented software developer to join our team and contribute to the development of cutting-edge software solutions.",
    requirements:
      "Candidates should have a strong background in software development, including experience with multiple programming languages and frameworks. A degree in computer science or a related field is preferred.",
  },
  {
    id: 2,
    title: "Marketing Manager",
    description:
      "We are looking for an experienced marketing manager to lead our marketing efforts and help us grow our brand.",
    requirements:
      "Candidates should have a proven track record of success in marketing, with experience in both online and offline marketing channels. A degree in marketing or a related field is preferred.",
  },
  {
    id: 3,
    title: "Sales Representative",
    description:
      "We are seeking a dynamic and ambitious sales representative to help us grow our customer base and increase revenue.",
    requirements:
      "Candidates should have a strong sales background, with experience in B2B sales preferred. Excellent communication and negotiation skills are a must.",
  },
];

const displayedData = [["title", "description", "requirements"], 4]; //data to be displayed for this specific list and the data type passed together
export const OpenVacancies = () => {
  return (
    <>
      <h1>Vacancies</h1>
      <List elems={open_vacancies} dataHeads={displayedData} />
    </>
  );
};
