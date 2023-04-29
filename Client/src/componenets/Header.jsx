import React from "react";
import "../styles/style.css";
import logo from "../resources/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { authAtom, useIsAuthenticated } from "../atoms/authAtom";
import {useAtom} from 'jotai'
export const Header = () => {
  const [auth,setAuth] = useAtom(authAtom);
  const navigate = useNavigate()
  const isLoggedIn = useIsAuthenticated();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth({
      isAuthenticated: false,
      token: null,
      role: null,
    })
    navigate('/signin')
  }
  const header = {
    other: "Addis Ababa Science and Technology University Vacancy Portal",
    admin: "Addis Ababa Science and Technology University Admin Dashboard",
  }
  return (  
    <div className="header">
      <Link to="/#" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="header-right">
        {auth.role != "ADMIN" ? header.other : header.admin}
      </div>
      <div className="header-right">
        {isLoggedIn ? <button onClick={logout} className="btn btn-primary">Logout</button> : <Link to="/signin" className="btn btn-primary">Login</Link>}
      </div>
    </div>
  );
};
