import React from "react";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="links">
        <a className="link" href="/">
          Home
        </a>
        <a className="link" href="/about">
          About
        </a>
        <a className="link" href="/contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
export default NavBar;
