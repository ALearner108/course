import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import CSS file for styling
import { AuthContext } from "./Authcontex";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signupContext = useContext(AuthContext);
  const { signup, currentUser } = signupContext;

  async function handleClick(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Email and password cannot be empty");
      return;
    }

    try {
      await signup(email, password);
      if (currentUser) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function goToLogin() {
    navigate("/login");
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button onClick={handleClick} type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
      <p className="already-have-account">
        Already have an account?{" "}
        <button onClick={goToLogin}>Log in</button>
      </p>
    </div>
  );
}
