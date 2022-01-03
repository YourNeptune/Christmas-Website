import React from "react";
import "boxicons";
import navbar_logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div>
      <section>
        <img src={navbar_logo} alt="navbar_logo" />
        <p>Christmas</p>
      </section>

      <section>
        <nav>
          <ul>
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

        <box-icon name="moon"></box-icon>
      </section>
    </div>
  );
};

export default Navbar;
