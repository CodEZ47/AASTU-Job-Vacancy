import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constant";
import List from "../../componenets/List";
import { Container, Spinner } from "react-bootstrap";
import { getApplicationsUser } from "../../apis/vacancy.api";
import { useQuery } from "@tanstack/react-query";
const data = [
  {
    id: 1,
    title: "Software Engineer",
    status: "PENDING",
    createdAt: "03/05/23",
  },
  {
    id: 2,
    title: "Database Manager",
    status: "REJECTED",
    createdAt: "13/05/23",
  },
  {
    id: 3,
    title: "Content Manager",
    status: "APPROVED",
    createdAt: "10/05/23",
  },
];

const displayedData = [["title", "status", "createdAt"], 5]; //data to be displayed for this specific list and the data type passed together

export const MyApplications = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["myApplications"],
    queryFn: getApplicationsUser,
  });
  return (
    <Container>
      <h1>My Applications</h1>
      <br />
      {isLoading && (
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {data && <List elems={data} dataHeads={displayedData} />}
      {/** if there is error show something happen and make a button to refetch**/}
      {error && (
        <div>
          <h1>Something went wrong</h1>
          <button onClick={() => refetch()} className="btn btn-warning">
            Try again
          </button>
        </div>
      )}
    </Container>
  );
};
