
import React from "react";
import Languages from "./Languages";
import Logo from "./Logo";
import NavBar from "./NavBar";


const MainNav = () => {
    
  return (
    <header className="p-0 fixed w-full top-0 z-[998]">
      <Languages />
      <Logo />
      <NavBar/>
    </header>
  );
};

export default MainNav;
