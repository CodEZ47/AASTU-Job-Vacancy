import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useAtom } from "jotai";
import { authAtom, useIsAuthenticated } from "../atoms/authAtom";
import logo from "../resources/logo.jpeg";
import styles from "../styles/header.module.css";

export const Header = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const navigate = useNavigate();
  const isLoggedIn = useIsAuthenticated();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth({
      isAuthenticated: false,
      token: null,
      role: null,
    });
    navigate("/signin");
  };

  const headerText = {
    other: "Addis Ababa Science and Technology University Vacancy Portal",
    admin: "Addis Ababa Science and Technology University Admin Dashboard",
  };

  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Navbar.Brand as={Link} to="/" className={`logo ${styles.brand}`}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Navbar.Brand>
      <Nav className={`mr-auto ${styles.nav}`}>
        <Nav.Link as={Link} to="/" className={styles.link}>
          {auth.role !== "ADMIN" ? headerText.other : headerText.admin}
        </Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {isLoggedIn ? (
            <Button onClick={logout} variant="primary" className="float-end">
              Logout
            </Button>
          ) : (
            <Link to="/signin" className={`btn btn-primary ${styles.link}`}>
              Login
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
