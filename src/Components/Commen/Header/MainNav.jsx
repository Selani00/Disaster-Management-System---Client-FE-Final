
import React from "react";
import Languages from "./Languages";
import Logo from "./Logo";
import NavBar from "./NavBar";


const MainNav = () => {
    
  return (
    <div className="p-0 fixed w-full z-[999]">
      <Languages />
      <Logo />
      <NavBar/>
    </div>
  );
};

export default MainNav;
