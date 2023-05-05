import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useAtom } from "jotai";
import { authAtom } from "../atoms/authAtom";
import styles from "../styles/sidebar.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
        <Nav defaultActiveKey="/OpenVacancies" className="flex-column">
          {auth.role === "APPLICANT" ? (
            <>
              <Nav.Link href="/OpenVacancies">Open Vacancies</Nav.Link>
              <Nav.Link href="/MyApplications">My Applications</Nav.Link>
              <Nav.Link href="/PostVacancy">Post Vacancy</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/Users">Users</Nav.Link>
              <Nav.Link href="/Position">Position</Nav.Link>
              <Nav.Link href="/Offices">Offices</Nav.Link>
              <Nav.Link href="/Metric">Metric</Nav.Link>
              <Nav.Link href="/Roles">Roles</Nav.Link>
            </>
          )}
        </Nav>
      </div>
    </div>
  );
};
