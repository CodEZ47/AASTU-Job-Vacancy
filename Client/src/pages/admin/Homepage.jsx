import React from "react";
import { Header } from "../../componenets/Header";
import { SearchBar } from "../../componenets/SearchBar";
import { SideBar } from "../../componenets/SideBar";

import { Positions } from "./Positions";
import { Users } from "./Users";
import { Offices } from "./Offices";
import { Metric } from "./Metric";
import { Roles } from "./Roles";
import { Vacancies } from "../users/Vacancies";

import { Route, Routes } from 'react-router-dom';
import SignIn from '../../componenets/signIn';
import ApplicantSignUp from '../../componenets/signUp';


export const Homepage = () => {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <div className="content">
        <SearchBar />
        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<ApplicantSignUp />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Position" element={<Positions />} />
          <Route path="/Offices" element={<Offices />} />
          <Route path="/Metric" element={<Metric />} />
          <Route path="/Roles" element={<Roles />} />
          <Route path="/Vacancies" element={<Vacancies />} />
        </Routes>
      </div>
    </div>
  );
};
