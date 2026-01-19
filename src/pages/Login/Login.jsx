import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets/assets.js";
const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login">
      <img src={assets.logo_big} className="logo" alt="" />
      <form className="login-form ">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            type="text"
            required
            placeholder="Username"
            className="form-input"
          />
        ) : null}
        <input
          required
          type="email"
          placeholder="Email"
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="form-input"
        />
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login Now"}
        </button>
        <div className="login-term">
          <input type="checkbox" name="" id="" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span
                onClick={() => {
                  setCurrState("Login");
                }}
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span
                onClick={() => {
                  setCurrState("Sign Up");
                }}
              >
                Click Here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
