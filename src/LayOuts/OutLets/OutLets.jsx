import React from "react";
import Navbar from "../../Shear/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Shear/Footer/Footer";

const OutLets = () => {
  const location = useLocation();
  const noHedarFooter = location.pathname.includes("login") || location.pathname.includes('singUp');
  return (
    <div>
      {noHedarFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHedarFooter || <Footer></Footer>}
    </div>
  );
};

export default OutLets;
