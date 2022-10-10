import React from "react";
import "./style.scss";

const Login = () => {
  return (
    <div className="box">
      <div className="form">
        <h2>Sign in</h2>
        <div className="inputBox">
          <input type="text" required="required">
            <span>Username</span>
            <i></i>
          </input>
        </div>
        <div className="inputBox">
          <input type="password" required="required">
            <span>Password</span>
            <i></i>
          </input>
        </div>
        <div className="links">
          <a href="/">Forgot Password</a>
          <a href="/">Signup</a>
        </div>
        <input type="submit" value="Login"></input>
      </div>
    </div>
  );
};

export default Login;
