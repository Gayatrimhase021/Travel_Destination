import { Link, useNavigate } from "react-router-dom";
import {
  Plane,
  LogIn,
  UserPlus,
  LogOut,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";

import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");

    navigate("/login");
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <Plane size={28} />
          <span>TravelDestination</span>
        </Link>

        {/* Desktop + Mobile Links */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/destinations" onClick={closeMenu}>Destinations</Link>
          <Link to="/tours" onClick={closeMenu}>Tours</Link>
          <Link to="/my-bookings" onClick={closeMenu}>My Bookings</Link>
          <Link to="/wishlist" onClick={closeMenu}>Wishlist</Link>
          <Link to="/trip-planner" onClick={closeMenu}>TripPlanner</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        {/* Actions */}
        <div className="navbar-actions">

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Login / Logout */}
          {loggedInUser ? (
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              <LogOut size={17} />
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="login-btn"
                onClick={closeMenu}
              >
                <LogIn size={17} />
                Login
              </Link>

              <Link
                to="/signup"
                className="signup-btn"
                onClick={closeMenu}
              >
                <UserPlus size={17} />
                Sign Up
              </Link>
            </>
          )}

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={27} />
            ) : (
              <Menu size={27} />
            )}
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;