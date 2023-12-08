import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <nav className="nav-header">
        <Link to="/" className="title">
          Home
        </Link>

        <Link to="/about" className="title">
          About
        </Link>

        <Link to="/contact" className="title">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
