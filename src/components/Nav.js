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
            <Link to="/how">
              <div className="nav-link">How It Works</div>
            </Link>
            <a href="/contact">
              <div className="nav-link">Contact</div>
            </a>
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
              <div className="menu-link" onClick={handleClick}>
                About
              </div>
            </Link>
            <Link to="/how">
              <div className="menu-link" onClick={handleClick}>
                How It Works
              </div>
            </Link>
            <Link to="/contact">
              <div className="menu-link" onClick={handleClick}>
                Contact
              </div>
            </Link>
            <Link to="/newyork">
              <div className="menu-link" onClick={handleClick}>
                New York
              </div>
            </Link>
            <Link to="/california">
              <div className="menu-link" onClick={handleClick}>
                California
              </div>
            </Link>
            <Link to="/italy">
              <div className="menu-link" onClick={handleClick}>
                Italy
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
