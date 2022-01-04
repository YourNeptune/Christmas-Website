import React from "react";
import "boxicons";
import nav_light from "../img/nav-light.png";

const NavbarMeun = () => {
  return (
    <div>
      <nav>
        <ul className="flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Celebrate</a>
          </li>
          <li>
            <a href="">Gifts</a>
          </li>
          <li>
            <a href="">New</a>
          </li>
        </ul>
      </nav>
      <div><box-icon name='x'></box-icon></div>
      <section>
        <img src={nav_light} alt="nav_light" />
      </section>
    </div>
  );
};

export default NavbarMeun;
