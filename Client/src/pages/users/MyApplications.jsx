import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constant";
import List from "../../componenets/List";
import { Container, Spinner } from "react-bootstrap";

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
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchApplications = async () => {
  //   try {
  //     const response = await fetch(`${BASE_URL}/application`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw Error("Failed to fetch applications");
  //     }

  //     const applications = await response.json();
  //     const formattedData = applications.map((application) => ({
  //       id: application.id,
  //       title: application.vacancy.name,
  //       status: application.status,
  //       createdAt: application.createdAt,
  //     }));

  //     setData(formattedData);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchApplications();
  // }, []);
  return (
    <Container>
      <br />
      {/* {loading && (
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )} */}
      <List elems={data} dataHeads={displayedData} />
    </Container>
  );
};
