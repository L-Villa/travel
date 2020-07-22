import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <header>
        <Link to="/">
          <div className="logo-container">Travel.</div>
        </Link>
        <nav>
          <Link to="/about">
            <div className="nav-link">About</div>
          </Link>
          <Link to="/news">
            <div className="nav-link">News</div>
          </Link>
          <Link to="/contact">
            <div className="nav-link">Contact</div>
          </Link>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line half"></div>
            <div className="line"></div>
          </div>
        </nav>
      </header>
    </div>
  );
}
