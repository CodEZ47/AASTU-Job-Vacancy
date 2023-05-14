import React from "react";
import List from "../../componenets/List.jsx";

const users = [
  { id: 1, name: "Test Testerson", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

const displayedData = [["name", "id", "email"], 0]; //takes names of colums from server passes them for the list component
export const Users = () => {
  return (
    <>
      <h1>All Users</h1>
      <List elems={users} dataHeads={displayedData} />
    </>
  );
};
