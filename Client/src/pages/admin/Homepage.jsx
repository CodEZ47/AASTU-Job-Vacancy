import React from 'react'
import {Header} from "../../componenets/Header"
import { SearchBar } from "../../componenets/SearchBar";
import { SideBar } from "../../componenets/SideBar";

import {Positions} from "./Positions"
import {UsersList} from "./UsersList"
import { Offices } from './Offices';
import { Metric } from './Metric';
import { Roles } from "./Roles"

import { Route, Routes } from 'react-router-dom';


export const Homepage = () => {
  
  return (
    <div className="container">
      <Header />
      <SideBar />
      <div className="content">
        <SearchBar />
        <Routes>
          <Route path='/Users' element={<UsersList />} />
          <Route path='/Position' element={<Positions />} />
          <Route path='/Offices' element={<Offices />} />
          <Route path='/Metric' element={<Metric />} />
          <Route path='/Roles' element = { <Roles /> }/>
        </Routes>
      </div>
    </div>
  )
}
