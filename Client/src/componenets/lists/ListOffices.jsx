import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

import EditModal from "../EditOffice.jsx";

const ListOffices = ({ offices, dataTypeInfo }) => {
  const [editingOffice, setEditingOffice] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = (office) => {
    setEditingOffice(office);
    setShowEditModal(true);
  };

  const handleCancelEdit = () => {
    setEditingOffice(null);
    setShowEditModal(false);
  };

  const handleSaveEdit = (updatedOffice) => {
    alert("Office updated: " + JSON.stringify(updatedOffice));
    setEditingOffice(null);
    setShowEditModal(false);
  };

  const descriptionLength = 300;
  const getDescriptionPreview = (description) => {
    if (description.length > descriptionLength) {
      return description.slice(0, descriptionLength) + "...";
    }
    return description;
  };

  return (
    <>
      <ListGroup>
        {offices && offices.length > 0 ? (
          offices.map((office) => (
            <ListGroupItem
              key={office.id}
              style={{
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              {office[dataTypeInfo[0]] ? (
                <h5>{office[dataTypeInfo[0]]}</h5>
              ) : (
                <h5>Title</h5>
              )}
              {office[dataTypeInfo[1]] ? (
                <p>{getDescriptionPreview(office[dataTypeInfo[1]])}</p>
              ) : (
                <p></p>
              )}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="danger"
                  style={{ marginRight: "10px", padding: "5px 10px" }}
                >
                  Delete
                </Button>
                <Button
                  variant="warning"
                  style={{ padding: "5px 10px" }}
                  onClick={() => handleEditClick(office)}
                >
                  Edit
                </Button>
              </div>
            </ListGroupItem>
          ))
        ) : (
          <h3>No Office</h3>
        )}
      </ListGroup>

      {editingOffice && (
        <EditModal
          office={editingOffice}
          show={showEditModal}
          onCancel={handleCancelEdit}
          onSave={handleSaveEdit}
        />
      )}
    </>
  );
};

export default ListOffices;
