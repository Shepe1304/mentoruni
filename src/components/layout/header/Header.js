import React from "react";
import "./Header.css";
import logo from "../../assets/img/Logo.png";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const HandleLoginClick = () => {
    navigate("/login");
  };

  const HandleHomeClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header--logo" onClick={HandleHomeClick}>
        <img
          src={logo}
          alt="Logo, a smiling globe with university hat and bull horns, and the text 'MentorUni' around it."
        />
      </div>
      <div className="header--find_mentor">
        <span>Find Mentor</span>
      </div>
      <div className="header--options">
        <div className="header--option" onClick={HandleHomeClick}>
          Home
        </div>
        <div className="header--option">About</div>
        <div className="header--option">Contact</div>
        <div className="header--option">FAQ</div>
      </div>
      <div className="header--user_login" onClick={HandleLoginClick}>
        Log in
      </div>
    </header>
  );
};

export default Header;
