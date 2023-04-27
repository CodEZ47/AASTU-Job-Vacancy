import List from "../../componenets/List";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constant";
import { Container, Spinner } from "react-bootstrap";
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

const displayedData = [["title", "description", "requirement"], 4]; //data to be displayed for this specific list and the data type passed together
export const OpenVacancies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    //fetch data from the server
   try {
      const res = await fetch(`${BASE_URL}/vacancies`);
      if(!res.ok) throw Error("Could not fetch the data for that resource");
      const json = await res.json();
      let d = json.map((vacancy) => {
        return {
          id: vacancy.id,
          title: vacancy.name,
          description: vacancy.description,
          requirement: vacancy.position.requirement,
        }
      });
      console.log(d, "data")
      setData(d);
      setLoading(false);
   } catch(e){
      setError(e);
   }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <h1>Vacancies</h1>
      {loading && 
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      }
      <List elems={data} dataHeads={displayedData} />
    </Container>
  );
};
