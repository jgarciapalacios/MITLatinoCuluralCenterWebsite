import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import general from "../data/general.json";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-logo">
        <img
          src={general.logoSrc}
          alt={general.fullName}
          className="header-logo-image"
        />
        <h1 className="header-title">{general.fullName}</h1>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          {general.pages.map(({ path, label }) => (
            <li key={path} className="nav-item">
              <Link
                to={path}
                className={`nav-link ${isActive(path) ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
