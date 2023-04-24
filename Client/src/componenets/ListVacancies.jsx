import { React, useState } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

import { ApplicationForm } from "./ApplicationForm";

const ListVacancies = ({ vacancies, dataTypeInfo }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showOpenVacancies, setShowOpenVacancies] = useState(true);
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  const handleApplyNowClick = (vacancy) => {
    setShowApplicationForm(true);
    setShowOpenVacancies(false);
    this;
    setSelectedVacancy(vacancy);
  };
  const handleCloseApplication = () => {
    setShowApplicationForm(false);
    setShowOpenVacancies(true);
  };
  return (
    <>
      {showOpenVacancies && (
        <ListGroup>
          {vacancies.map((vacancy) => (
            <ListGroupItem key={vacancy.id}>
              {vacancy[dataTypeInfo[0]] && <h3>{vacancy[dataTypeInfo[0]]}</h3>}
              {vacancy[dataTypeInfo[1]] && <p>{vacancy[dataTypeInfo[1]]}</p>}
              {vacancy[dataTypeInfo[2]] && (
                <p>
                  <strong>Requirements:</strong> {vacancy[dataTypeInfo[2]]}
                </p>
              )}
              <Button
                variant="primary"
                onClick={() => handleApplyNowClick(vacancy)}
              >
                Apply Now
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
      {showApplicationForm && (
        <>
          <ApplicationForm
            vacancy={selectedVacancy}
            dataTypeInfo={dataTypeInfo}
            onClose={() => setShowApplicationForm(false)}
          />
          <Button variant="primary" onClick={() => handleCloseApplication()}>
            Go back
          </Button>
        </>
      )}
    </>
  );
};

export default ListVacancies;
