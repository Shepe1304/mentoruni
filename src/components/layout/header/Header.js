import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo_blue.png";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const HandleFindMentorsClick = () => {
    navigate("/find-mentors");
  };

  const HandleHomeClick = () => {
    navigate("/");
  };

  const HandleLoginClick = () => {
    navigate("/login");
  };

  const location = useLocation();

  return (
    <header className="header">
      <div className="header--logo" onClick={HandleHomeClick}>
        <img
          src={logo}
          alt="Logo, a smiling globe with university hat and bull horns, and the text 'MentorUni' around it."
        />
      </div>
      {!(location.pathname == "/find-mentors") ? (
        <div
          className="header--find_mentor dark-shadow"
          onClick={HandleFindMentorsClick}
        >
          Find Mentor
        </div>
      ) : null}
      {!(
        location.pathname == "/login" || location.pathname == "/find-mentors"
      ) ? (
        <>
          <div className="header--options dark-shadow">
            <div className="header--option" onClick={HandleHomeClick}>
              Home
            </div>
            <a href="#about" className="header--option">
              <div className="header--option_text">About</div>
            </a>
            <a href="#contact" className="header--option">
              <div className="header--option_text">Contact</div>
            </a>
            <a href="#faq" className="header--option">
              <div className="header--option_text">FAQ</div>
            </a>
          </div>
          <div
            className="header--user_login dark-shadow"
            onClick={HandleLoginClick}
          >
            Log in
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Header;
