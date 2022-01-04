import React from "react";
import "boxicons";
import navbar_logo from "../img/logo.png";


const Navbar = () => {
  return (
    <div className="Navbar flex">
      <section className="flex Navbar__logo">
        <img src={navbar_logo} alt="navbar_logo" />
        <p>Christmas</p>
      </section>

      <section className="Navbar__icons flex">
        <div className="Navbar__icon">
          <box-icon name="moon" color="hsl(355, 4%, 35%)"></box-icon>
        </div>
        <div className="Navbar__icon">
          <box-icon
            name="border-all"
            flip="horizontal"
            color="hsl(355, 4%, 35%)"
          ></box-icon>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
