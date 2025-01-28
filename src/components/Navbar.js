import React from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="navbar bg-primeColor text-white font-poppins">
      <div className="navbar-start">
        <img src={logo} className="w-16 md:w-40 ml-5 md:ml-28 my-5 md:my-10" alt="logo" />
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-base md:text-lg drop-shadow-lg hover:bg-transparent hover:text-secondColor">STUDIOS</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-base md:text-lg mr-5 md:mr-28 drop-shadow-lg hover:bg-transparent hover:text-secondColor" href="https://creocreatorclub.simplybook.me/v2/">
              RESERVATION
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;