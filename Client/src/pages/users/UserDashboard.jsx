// import { Route, Routes } from "react-router-dom";

import { Header } from "../../componenets/Header.jsx";
import { SearchBar } from "../../componenets/SearchBar.jsx";
import { SideBar } from "../../componenets/SideBar.jsx";

export const UserDashboard = () => {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <div className="content">
        <SearchBar />
        {/* <Routes></Routes> */}
      </div>
    </div>
  );
};
