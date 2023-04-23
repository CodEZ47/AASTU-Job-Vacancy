// import { Route, Routes } from "react-router-dom";

import { Header } from "../../componenets/Header";
import { SearchBar } from "../../componenets/SearchBar";
import { SideBar } from "../../componenets/SideBar";

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
