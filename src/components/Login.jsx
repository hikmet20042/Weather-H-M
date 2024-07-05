import React from "react";

const Login = () => {
  return (
    <div class="login">
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
        <a class="button" type="submit" href="#">
          Login
        </a>
      </form>
    </div>
  );
};

export default Login;
