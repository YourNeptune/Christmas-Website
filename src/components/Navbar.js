import React from "react";
import "boxicons";
import navbar_logo from "../img/logo.png";
import { Container } from "react-bootstrap";
import { BiMoon, BiBorderAll } from "react-icons/bi";

const Navbar = () => {
  return (
    <Container className="Navbar flex">
      <section className="flex Navbar__logo">
        <img src={navbar_logo} alt="navbar_logo" />
        <p>Christmas</p>
      </section>

      <section className="Navbar__icons flex">
        <BiMoon className="Navbar__icon" />
        <BiBorderAll className="Navbar__icon" />
      </section>
    </Container>
  );
};

export default Navbar;
