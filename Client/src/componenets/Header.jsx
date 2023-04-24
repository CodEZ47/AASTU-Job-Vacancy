import React from "react";
import "../styles/style.css";
import logo from "../resources/logo.jpeg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/#" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="header-right">
        Addis Ababa Science and Technology University Admin Dashboard
      </div>
    </div>
  );
};
