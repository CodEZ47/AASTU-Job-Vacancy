import { PostVacancyForm } from "../../componenets/PostVacancyForm.jsx";

export function PostVacancy() {
  const positions = [
    { value: "", label: "--Select a Position--" },
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
  ];
  return (
    <>
      <PostVacancyForm positionsArray={positions} />
    </>
  );
}
