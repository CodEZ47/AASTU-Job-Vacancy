import List from "../../componenets/List";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constant";
import { Container, Spinner } from "react-bootstrap";

const displayedData = [["title", "description", "requirement"], 4]; //data to be displayed for this specific list and the data type passed together
export const OpenVacancies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    //fetch data from the server
   try {
      const res = await fetch(`${BASE_URL}/vacancies`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
      if(!res.ok) throw Error("Could not fetch the data for that resource");
      const json = await res.json();
      let d = json.map((vacancy) => {
        return {
          id: vacancy.id,
          title: vacancy.name,
          description: vacancy.description,
          requirement: vacancy.position.requirement,
          applied: vacancy.applied,
        }
      });
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
