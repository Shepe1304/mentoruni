import React from "react";
import "./Header.css";
import logo from "../../assets/img/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header--logo">
        <img
          src={logo}
          alt="Logo, a smiling globe with university hat and bull horns, and the text 'MentorUni' around it."
        />
      </div>
      <div className="header--find_mentor">Find Mentor</div>
      <div className="header--options">
        <div className="header--option">Home</div>
        <div className="header--option">About</div>
        <div className="header--option">Contact</div>
        <div className="header--option">FAQ</div>
      </div>
      <div className="header--user_login">Log in</div>
    </header>
  );
};

export default Header;
