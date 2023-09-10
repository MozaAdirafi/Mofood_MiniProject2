import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://api.mudoapi.tech/register", {
        name,
        username,
        password,
        roleId: 2,
      });

      if (response.data.success) {
        localStorage.setItem("registrationData", JSON.stringify(response.data.data));

        setResponseMessage("Registration successful");
        setErrorMessage("");
        console.log(response);

        navigate("/login");
      } else {
        setErrorMessage("Registration unsuccessful");
        setResponseMessage("");
        console.log("Registration unsuccessful");
      }
    } catch (error) {
      setErrorMessage("An error occurred while registering");
      setResponseMessage("");
      console.error("API Error:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>
          Create an Account <span>Register for a new account.</span>
        </h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          id="name"
          value={name}
          onChange={handleName}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter your Username"
          id="username"
          value={username}
          onChange={handleUsername}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <button className="RegisterBtn" type="submit">
          Register
        </button>

        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="haveaccount">
          <Link to="/login" className="white-link">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
