import React from 'react'
import {Header} from "../../componenets/Header"
import { SearchBar } from "../../componenets/SearchBar";
import { SideBar } from "../../componenets/SideBar";

import {Positions} from "./Positions"
import {UsersList} from "./UsersList"
import { Offices } from './Offices';
import { Metric } from './Metric';

import { Route, Routes } from 'react-router-dom';


export const Homepage = () => {
  
  return (
    <div className="container">
      <Header />
      <SideBar />
      <div className="containt">
        <SearchBar />
        <Routes>
          <Route path='/Users' element={<UsersList />} />
          <Route path='/Position' element={<Positions />} />
          <Route path='/Offices' element={<Offices />} />
          <Route path='/Metric' element={<Metric />} />
        </Routes>
      </div>
    </div>
  )
}
