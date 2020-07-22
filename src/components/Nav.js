import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [hidden, setHidden] = useState(false);

  function handleClick() {
    setHidden(!hidden);
  }
  return (
    <div>
      <header>
        <div className="header-wrapper">
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
            <div className="hamburger" onClick={handleClick}>
              <div className="line"></div>
              <div className="line half"></div>
              <div className="line"></div>
            </div>
          </nav>
        </div>
        <div
          className="hidden-menu"
          style={{
            width: hidden ? "50%" : "0",
            opacity: hidden ? 1 : 0,
            pointerEvents: hidden ? "all" : "none",
          }}
        >
          <div className="close-hidden-menu" onClick={handleClick}>
            ✕
          </div>
          <div className="hidden-menu-text-container">
            <Link to="/about">
              <div className="nav-link" onClick={handleClick}>
                About
              </div>
            </Link>
            <Link to="/news">
              <div className="nav-link" onClick={handleClick}>
                News
              </div>
            </Link>
            <Link to="/contact">
              <div className="nav-link" onClick={handleClick}>
                Contact
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}