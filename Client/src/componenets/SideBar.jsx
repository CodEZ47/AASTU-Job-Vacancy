import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useAtom } from "jotai";
import { authAtom } from "../atoms/authAtom";
import styles from "../styles/sidebar.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PagesLinks } from "./PagesLinks.jsx";

export const SideBar = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.wrapper} ${isOpen ? styles.open : styles.closed}`}
    >
      <button
        className={`${styles.toggle} ${isOpen ? styles.open : styles.closed}`}
        onClick={handleToggle}
      >
        {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </button>
      <div className={styles.sidebar}>
        <ul>
          {auth.role === "APPLICANT" && (
            <>
              <PagesLinks link="/OpenVacancies">Open Vacancies</PagesLinks>
              <PagesLinks link="/MyApplications">My Applications</PagesLinks>
            </>
          )}
          {auth.role === "ADMIN" && (
            <>
              <PagesLinks link="/PostVacancy">Post Vacancy</PagesLinks>
              <PagesLinks link="/Users">Users</PagesLinks>
              <PagesLinks link="/Position">Position</PagesLinks>
              <PagesLinks link="/Offices">Offices</PagesLinks>
              <PagesLinks link="/Metric">Metric</PagesLinks>
              <PagesLinks link="/Roles">Roles</PagesLinks>
            </>
          )}
          {auth.role === "OFFICE" && (
            <>
              <PagesLinks link="/PostVacancy">Post Vacancy</PagesLinks>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
