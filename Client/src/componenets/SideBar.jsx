import React from "react";
import { Links } from "./Links";

export const SideBar = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul>
          <Links link="/AddPositions">Add Positions</Links>
          <Links link="/Users">Users</Links>
          <Links link="/Position">Position</Links>
          <Links link="/Offices">Offices</Links>
          <Links link="/Metric">Metric</Links>
          <Links link="/Roles">Roles</Links>
          <Links link="/OpenVacancies">Open Vacancies</Links>
          <Links link="/signin">Sign in</Links>
          <Links link="/signup">Sign Up </Links>
        </ul>
      </div>
    </div>
  );
};
