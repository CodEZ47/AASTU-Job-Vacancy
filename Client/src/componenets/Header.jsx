import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useAtom } from "jotai";
import { authAtom, useIsAuthenticated } from "../atoms/authAtom";
import logo from "../resources/logo.jpeg";

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
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/" className="logo">
        <img src={logo} alt="Logo" style={{ maxHeight: "60px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            {auth.role !== "ADMIN" ? headerText.other : headerText.admin}
          </Nav.Link>
        </Nav>
        <Nav>
          {isLoggedIn ? (
            <Button onClick={logout} variant="primary">
              Logout
            </Button>
          ) : (
            <Link to="/signin" className="btn btn-primary">
              Login
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
