import React, { useEffect } from "react";
import "./Login.css";
import googleIcon from "../../assets/img/googleIcon.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login--headline">Log in</div>
      <div className="login--email">
        <div className="login--email_text">Email</div>
        <div className="login--input_container">
          <input
            className="login--input"
            type="email"
            placeholder="Type your email..."
          />
        </div>
      </div>
      <div className="login--password">
        <div className="login--password_text">
          <div className="login--password_text_content">Password</div>
          <div className="login--password_text_forgot">Forgot password?</div>
        </div>
        <div className="login--input_container">
          <input
            className="login--input"
            type="password"
            placeholder="Type your password..."
          />
        </div>
      </div>
      <div className="login--buttons">
        <button className="login--button login--normal_login">Log in</button>
        <button className="login--button login--login_with_google">
          <div className="login--google_icon">
            <img src={googleIcon} alt="Google icon" />
          </div>
          <div className="login--login_with_google_text">Login with Google</div>
        </button>
      </div>
    </div>
  );
};

export default Login;
