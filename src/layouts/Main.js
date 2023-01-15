import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-base">
      <Navbar />
      <div className="mt-[4.5rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
