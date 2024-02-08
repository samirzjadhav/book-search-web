import React from "react";
import Header from "../../Components/Header/Header.js";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Home;
