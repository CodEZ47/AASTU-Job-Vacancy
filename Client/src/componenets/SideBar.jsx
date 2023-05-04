import React from "react";
import { Links } from "./Links";
import { useAtom } from "jotai";
import { authAtom } from "../atoms/authAtom";

export const SideBar = () => {
  const [auth, setAuth] = useAtom(authAtom);
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul>
          {auth.role === "APPLICANT" ? (
            <>
              <Links link="/OpenVacancies">Open Vacancies</Links>
              <Links link="/MyApplications">My Applications</Links>
              <Links link="/PostVacancy">Post Vacancy</Links>
            </>
          ) : (
            <>
              <Links link="/Users">Users</Links>
              <Links link="/Position">Position</Links>
              <Links link="/Offices">Offices</Links>
              <Links link="/Metric">Metric</Links>
              <Links link="/Roles">Roles</Links>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
