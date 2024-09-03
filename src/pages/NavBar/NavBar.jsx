import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./css/navbar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
export default NavBar;
