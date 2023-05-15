import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

import EditPosition from "../EditPosition.jsx";

const ListPositions = ({ positions, dataTypeInfo, levels }) => {
  const [editingPosition, setEditingPosition] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = (position) => {
    setEditingPosition(position);
    setShowEditModal(true);
  };

  const handleCancelEdit = () => {
    setEditingPosition(null);
    setShowEditModal(false);
  };

  const handleSaveEdit = (updatedPosition) => {
    alert("Position updated: " + JSON.stringify(updatedPosition));
    setEditingPosition(null);
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
        {positions && positions.length > 0 ? (
          positions.map((position) => (
            <ListGroupItem
              key={position.id}
              style={{
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <h5>{position.name}</h5>
              <p>Level: {position.level}</p>
              <p>{getDescriptionPreview(position.description)}</p>
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
                  onClick={() => handleEditClick(position)}
                >
                  Edit
                </Button>
              </div>
            </ListGroupItem>
          ))
        ) : (
          <h3>No Position</h3>
        )}
      </ListGroup>

      {editingPosition && (
        <EditPosition
          position={editingPosition}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
          levels={levels}
        />
      )}
    </>
  );
};

export default ListPositions;
