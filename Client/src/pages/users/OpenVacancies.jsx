import List from "../../componenets/List";
import { Container, Spinner } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { getVacancies } from "../../apis/vacancy.api";
const displayedData = [["title", "description", "requirement"], 4]; //data to be displayed for this specific list and the data type passed together
export const OpenVacancies = () => {
  const {data,isLoading, error, refetch} = useQuery({
    queryKey: ["openVacancies"],
    queryFn: getVacancies,
  })
  return (
    <Container>
      <h1>Vacancies</h1>
      {isLoading && 
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      }
      {data &&<List elems={data} dataHeads={displayedData} />}
      { /** if there is error show something happen and make a button to refetch**/ }
      {error && 
        <div>
          <h1>Something went wrong</h1>
          <button onClick={() => refetch()} className="btn btn-warning">Try again</button>
        </div>
      }
    </Container>
  );
};
