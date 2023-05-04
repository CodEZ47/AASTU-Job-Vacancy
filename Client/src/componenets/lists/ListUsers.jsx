import React, { useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import EditModal from "../EditUser";

const ListUsers = ({ users, dataTypeInfo }) => {
  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = (user) => {
    setEditingUser(user);
    setShowEditModal(true);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setShowEditModal(false);
  };

  const handleSaveEdit = (updatedUser) => {
    alert("User updated:", updatedUser); //server-side call here
    setEditingUser(null);
    setShowEditModal(false);
  };

  return (
    <>
      <ListGroup>
        {users &&
          users.map((user) => (
            <>
              <ListGroupItem key={user.id}>
                {user[dataTypeInfo[0]] ? (
                  <h5>{user[dataTypeInfo[0]]}</h5>
                ) : (
                  <h5>No Name</h5>
                )}
                {user[dataTypeInfo[1]] ? (
                  <p>ID: {user[dataTypeInfo[1]]}</p>
                ) : (
                  <p>-</p>
                )}
                {user[dataTypeInfo[2]] ? (
                  <p>Email: {user[dataTypeInfo[2]]}</p>
                ) : (
                  <p></p>
                )}
                :
                <DropdownButton id="dropdown-basic-button" title="Role">
                  <Dropdown.Item>Role 1</Dropdown.Item>
                  <Dropdown.Item>Role 2</Dropdown.Item>
                  <Dropdown.Item>Role 3</Dropdown.Item>
                </DropdownButton>
                <Button
                  variant="danger"
                  className="float-end"
                  // onClick={() => handleDeleteClick(user)}
                >
                  Delete
                </Button>
                <Button
                  variant="warning"
                  className="float-end"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </Button>
              </ListGroupItem>
            </>
          ))}
      </ListGroup>
      {editingUser && (
        <EditModal
          user={editingUser}
          show={showEditModal}
          onCancel={handleCancelEdit}
          onSave={handleSaveEdit}
        />
      )}

      {users.length == 0 ? (
        <h1>Users List is Empty :(</h1>
      ) : (
        <h3>All Users Loaded</h3>
      )}
    </>
  );
};

export default ListUsers;
