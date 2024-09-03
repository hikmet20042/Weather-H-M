import React from "react";
import "./css/login.css";
const Login = () => {
  return (
    <div className="login">
      <form className="login_form">
        <h1>Login</h1>
        <label for="username" name="username">
          Username:
          <input type="text" id="username" />
        </label>
        <label for="password" name="password">
          Password:
          <input type="password" id="password" />
        </label>
        <a className="button" type="submit" href="#">
          Login
        </a>
      </form>
    </div>
  );
};

export default Login;
