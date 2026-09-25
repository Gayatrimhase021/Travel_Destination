import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Plane } from "lucide-react";

import "./Login.css";

import loginImage from "../assets/login.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/login`,
        user
      );

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(response.data.user)
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className="auth-overlay"></div>

      <div className="auth-box">

        <div className="auth-icon">
          <Plane size={30} />
        </div>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue your journey
        </p>

        <form onSubmit={handleLogin}>

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
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>

        </form>

        {message && (
          <p className="auth-message">
            {message}
          </p>
        )}

        <p className="auth-bottom-text">
          Don't have an account?{" "}
          <Link to="/signup">Create Account</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;