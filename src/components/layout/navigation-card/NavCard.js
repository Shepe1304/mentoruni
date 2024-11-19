import React from "react";
import "./NavCard.css";

const NavCard = (props) => {
  return (
    <div
      className={`nav_card dark-shadow ${
        props.pos == 1 ? "blue-background" : null
      }  ${props.pos == 2 ? "move-up pink-background" : null} ${
        props.pos == 3 ? "yellow-background" : null
      }`}
    >
      <div className="nav_card_binder"></div>
      <div className="nav_card--headline">{props.headline}</div>
      <div className="nav_card--content">{props.content}</div>
      <button
        className={`nav_card--button ${
          props.pos == 1 ? "button-blue-background" : null
        }  ${props.pos == 2 ? "button-pink-background" : null} ${
          props.pos == 3 ? "button-yellow-background" : null
        }`}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default NavCard;
