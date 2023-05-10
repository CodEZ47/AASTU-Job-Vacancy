import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../componenets/Header";
import { SearchBar } from "../../componenets/SearchBar";
import { SideBar } from "../../componenets/SideBar";
import { AddPositions } from "./AddPositions";
import { Positions } from "./Positions";
import { Users } from "./Users";
import { Offices } from "./Offices";
import { Metric } from "./Metric";
import { Roles } from "./Roles";
import { OpenVacancies } from "../users/OpenVacancies";
import { MyApplications } from "../users/MyApplications";
import { PostVacancy } from "../users/PostVacancy";
import { Route, Routes } from "react-router-dom";
import SignIn from "../../componenets/signIn";
import ApplicantSignUp from "../../componenets/signUp";
import IsAuth from "../../hooks/useAuth";
import { authAtom, useIsAuthenticated } from "../../atoms/authAtom";
import { useAtom } from "jotai";
import RedirectUser from "../../hooks/RedirectUser";
import {PostVacancyForm} from "../../componenets/PostVacancyForm";

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
          <Route path="/OpenVacancies" element={<IsAuth role={["APPLICANT"]}>
            <OpenVacancies />
          </IsAuth>} />

          <Route path="/PostVacancy" element={<IsAuth role={["ADMIN", "OFFICE"]}>
            <PostVacancyForm/>
          </IsAuth>} />
          
          <Route path="/MyApplications" element={<IsAuth role={["ADMIN", "OFFICE"]}>
            <MyApplications/>
          </IsAuth>} />
        </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
