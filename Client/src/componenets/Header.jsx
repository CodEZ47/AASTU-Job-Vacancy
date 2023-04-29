import React from "react";
import "../styles/style.css";
import logo from "../resources/logo.jpeg";
import { Link } from "react-router-dom";
import { Navbar, Image } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/#" className="logo">
          <Image src={logo} alt="Logo" style={{ width: "50px" }} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Text>
          Addis Ababa Science and Technology University Admin Dashboard
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
