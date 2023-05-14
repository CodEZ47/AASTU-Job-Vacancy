import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { ComplaintModal } from "../modals/ComplaintModal.jsx";

const ListUserApplications = ({ applications, dataTypeInfo }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "APPROVED":
        return "green";
      case "REJECTED":
        return "red";
      default:
        return "blue";
    }
  };

  const [showComplaintModal, setShowComplaintModal] = useState(false);
  const [complaintApplicationId, setComplaintApplicationId] = useState(null);

  const handleShowComplaintModal = (applicationId) => {
    setShowComplaintModal(true);
    setComplaintApplicationId(applicationId);
  };

  const handleCloseComplaintModal = () => {
    setShowComplaintModal(false);
    setComplaintApplicationId(null);
  };

  return (
    <>
      <ListGroup>
        {applications.map((application) => (
          <ListGroup.Item key={application.id} className="my-3 p-3 shadow">
            {/* Title */}
            {application[dataTypeInfo[0]] && (
              <h3>{application[dataTypeInfo[0]]}</h3>
            )}
            {/* Status */}
            {application[dataTypeInfo[1]] && (
              <p
                style={{ color: getStatusColor(application[dataTypeInfo[1]]) }}
              >
                {application[dataTypeInfo[1]]}
              </p>
            )}
            {/* Date Applied */}
            {application[dataTypeInfo[2]] && (
              <p>
                <strong>Date Applied:</strong> {application[dataTypeInfo[2]]}
              </p>
            )}
            {/* Submit Complaint */}
            {application[dataTypeInfo[1]] === "REJECTED" && (
              <Button
                variant="primary"
                onClick={() => handleShowComplaintModal(application.id)}
              >
                Submit Complaint
              </Button>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
      {/* Complaint Modal */}
      <ComplaintModal
        show={showComplaintModal}
        onHide={handleCloseComplaintModal}
        applicationId={complaintApplicationId}
      />
    </>
  );
};

export default ListUserApplications;
