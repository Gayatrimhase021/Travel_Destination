import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Plane } from "lucide-react";
import "./Signup.css";

import signupImage from "../assets/signup.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/signup`,
        user
      );

      setMessage(response.data.message);

      setUser({
        name: "",
        email: "",
        password: ""
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `url(${signupImage})` }}
    >
      <div className="auth-overlay"></div>

      <div className="auth-box">
        <div className="auth-icon">
          <Plane size={30} />
        </div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Start your journey with TravelDestination
        </p>

        <form onSubmit={handleSignup}>

          <div className="input-group">
            <User size={19} />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <Mail size={19} />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <Lock size={19} />
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        {message && (
          <p className="auth-message">
            {message}
          </p>
        )}

        <p className="auth-bottom-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;