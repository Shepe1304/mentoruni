import React from "react";
import "./Login.css"; // Ensure this path is correct
import Auth from '../../layout/auth'; // Ensure this path is correct

const Login = () => {
  return (
    <div className="login">
      <div className="login--headline">Log in</div>
      <Auth /> {/* Render the Auth component directly */}
    </div>
  );
};

export default Login;