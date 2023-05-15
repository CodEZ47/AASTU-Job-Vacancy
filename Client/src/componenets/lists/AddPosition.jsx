import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddPositionForm from "../AddPositionFrom";

export const AddPosition = ({ levels }) => {
  const [showAddPosition, setShowAddPosition] = useState(false);

  const handleAddClick = () => {
    setShowAddPosition(true);
  };

  const handleCancelAdd = () => {
    setShowAddPosition(false);
  };

  const handleSaveAdd = (newPosition) => {
    alert("New position added: " + JSON.stringify(newPosition));
    setShowAddPosition(false);
  };  

  return (
    <div>
      <Button
        variant="primary"
        style={{ padding: "10px", margin: "5px" }}
        onClick={handleAddClick}
      >
        Add Position
      </Button>

      {showAddPosition && (
        <AddPositionForm levels={levels} onCancel={handleCancelAdd} onSave={handleSaveAdd} />
      )}
    </div>
  );
};
