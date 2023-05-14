import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../componenets/Header.jsx";
import { SearchBar } from "../../componenets/SearchBar.jsx";
import { SideBar } from "../../componenets/SideBar.jsx";
import { AddPositions } from "./AddPositions.jsx";
import { Positions } from "./Positions.jsx";
import { Users } from "./Users.jsx";
import { Offices } from "./Offices.jsx";
import { Metric } from "./Metric.jsx";
import { Roles } from "./Roles.jsx";
import { OpenVacancies } from "../users/OpenVacancies.jsx";
import { MyApplications } from "../users/MyApplications.jsx";
import { PostVacancy } from "../users/PostVacancy.jsx";
import { Route, Routes } from "react-router-dom";
import SignIn from "../../componenets/signIn.jsx";
import ApplicantSignUp from "../../componenets/signUp.jsx";
import IsAuth from "../../hooks/useAuth.jsx";
import { authAtom, useIsAuthenticated } from "../../atoms/authAtom";
import { useAtom } from "jotai";
import RedirectUser from "../../hooks/RedirectUser.jsx";
import { PostVacancyForm } from "../../componenets/PostVacancyForm.jsx";

import styles from "../../styles/homePage.module.css";

export const Homepage = () => {
  const [auth, setAuth] = useAtom(authAtom);

  return (
    <div className={styles.container}>
      <Header />
      <Container fluid>
        <Row>{auth.isAuthenticated && <SearchBar />}</Row>
        <Row className={styles.row}>
          {auth.isAuthenticated && (
            <Col xs={12} md={3} className={styles.sidebar}>
              <SideBar />
            </Col>
          )}
          <Col xs={12} md={auth.isAuthenticated ? 9 : 12}>
            <div className={styles.content}>
              <Routes>
                <Route path="/" element={<RedirectUser />}></Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<ApplicantSignUp />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/Position" element={<Positions />} />
                <Route path="/Offices" element={<Offices />} />
                <Route path="/Metric" element={<Metric />} />
                <Route path="/Roles" element={<Roles />} />
                <Route
                  path="/OpenVacancies"
                  element={
                    <IsAuth role={["APPLICANT"]}>
                      <OpenVacancies />
                    </IsAuth>
                  }
                />

                <Route
                  path="/PostVacancy"
                  element={
                    <IsAuth role={["ADMIN", "OFFICE"]}>
                      <PostVacancyForm />
                    </IsAuth>
                  }
                />

                <Route
                  path="/MyApplications"
                  element={
                    <IsAuth role={["APPLICANT"]}>
                      <MyApplications />
                    </IsAuth>
                  }
                />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
