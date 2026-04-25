import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${isDark ? "dark" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">📖</span>
          <span className="logo-text">Web MyQuran</span>
        </Link>

        <div className="nav-menu">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            🏠 Beranda
          </Link>
          <Link
            to="/home"
            className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}
          >
            📚 Al-Qur'an
          </Link>
          <Link
            to="/profile"
            className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}
          >
            👤 Profile
          </Link>
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle">
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
