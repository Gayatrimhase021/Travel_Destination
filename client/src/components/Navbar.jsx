import { Link, useNavigate } from "react-router-dom";
import {
  Plane,
  LogIn,
  UserPlus,
  LogOut
} from "lucide-react";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <Plane size={28} />
          <span>TravelDestination</span>
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/my-bookings">My Bookings</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-actions">

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
              >
                <LogIn size={17} />
                Login
              </Link>

              <Link
                to="/signup"
                className="signup-btn"
              >
                <UserPlus size={17} />
                Sign Up
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;