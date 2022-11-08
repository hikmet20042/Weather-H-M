import React from "react";
import logo from "../assets/logo.png";

export default function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="links">
        <a className="link" href="#">
          Home
        </a>
        <a className="link" href="#">
          About
        </a>
        <a className="link" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
}
