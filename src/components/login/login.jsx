import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://api.mudoapi.tech/login", {
        username,
        password,
      });

      if (response.data.success) {
        setResponseMessage("Login successful");
        setErrorMessage("");
        console.log(response);


        localStorage.setItem("token", response.data.data.token);


        navigate("/");
      } else {
        setErrorMessage("Login unsuccessful");
        setResponseMessage("");
        console.log("Login unsuccessful");
      }
    } catch (error) {
      setErrorMessage("An error occurred while logging in");
      setResponseMessage("");
      console.error("API Error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>
          Welcome Back! <span>Login to your account.</span>
        </h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter your Username"
          id="username"
          value={username}
          onChange={handleEmail}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <button className="LoginBtn" type="submit">
          Sign In
        </button>

        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="haveaccount">
          <Link to="/register" className="white-link">Doesn't have an account? Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
