import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { ApplicationForm } from "../ApplicationForm.jsx";
import { ToastContainer } from "react-toastify";
const ListVacancies = ({ vacancies, dataTypeInfo }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showOpenVacancies, setShowOpenVacancies] = useState(true);
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  const handleApplyNowClick = (vacancy) => {
    setShowApplicationForm(true);
    setShowOpenVacancies(false);
    setSelectedVacancy(vacancy);
  };
  const handleCloseApplication = () => {
    setShowApplicationForm(false);
    setShowOpenVacancies(true);
  };

  return (
    <>
      <ToastContainer />
      {showOpenVacancies && (
        <ListGroup>
          {vacancies.map((vacancy) => (
            <ListGroup.Item key={vacancy.id} className="my-3 p-3 shadow">
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
                disabled={vacancy.applied}
              >
                {vacancy.applied ? "Applied" : "Apply Now"}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {showApplicationForm && (
        <>
          <br />
          <Button
            variant="primary"
            onClick={() => handleCloseApplication()}
            className="float-end"
          >
            Go back
          </Button>
          <ApplicationForm
            vacancy={selectedVacancy}
            dataTypeInfo={dataTypeInfo}
            setApplicationForm={setShowApplicationForm}
            setShowOpenVacancies={setShowOpenVacancies}
            onClose={() => setShowApplicationForm(false)}
          />
        </>
      )}
    </>
  );
};

export default ListVacancies;
