import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useAtom } from "jotai";
import { authAtom } from "../atoms/authAtom";
import styles from "../styles/sidebar.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Links } from "./Links.jsx";

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
              <Links link="/OpenVacancies">Open Vacancies</Links>
            </>
          )}
          {auth.role === "ADMIN" && (
            <>
              <Links link="/PostVacancy">Post Vacancy</Links>
              <Links link="/Users">Users</Links>
              <Links link="/Position">Position</Links>
              <Links link="/Offices">Offices</Links>
              <Links link="/Metric">Metric</Links>
              <Links link="/Roles">Roles</Links>
            </>
          )}
          {auth.role === "OFFICE" && (
            <>
              <Links link="/PostVacancy">Post Vacancy</Links>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
