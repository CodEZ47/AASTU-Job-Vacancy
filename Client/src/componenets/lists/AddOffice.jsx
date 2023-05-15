import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddOfficeForm from "../AddOfficeForm";

export const AddOffice = () => {
  const [showAddOffice, setShowAddOffice] = useState(false);

  const handleAddClick = () => {
    setShowAddOffice(true);
  };

  const handleCancelAdd = () => {
    setShowAddOffice(false);
  };

  const handleSaveAdd = (newOffice) => {
    alert("New office added: " + JSON.stringify(newOffice));
    setShowAddOffice(false);
  };  

  return (
    <div>
      <Button
        variant="primary"
        style={{ padding: "10px", margin: "5px" }}
        onClick={handleAddClick}
      >
        Add Office
      </Button>

      {showAddOffice && (
        <AddOfficeForm onCancel={handleCancelAdd} onSave={handleSaveAdd} />
      )}
    </div>
  );
};
