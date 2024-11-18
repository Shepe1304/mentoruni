import React from "react";
import "./NavCard.css";

const NavCard = (props) => {
  return (
    <div className={`nav_card dark-shadow ${props.pos==2 ? "move-up" : null}`}>
      <div className="nav_card_binder"></div>
      <div className="nav_card--headline">Live Chat</div>
      <div className="nav_card--content">Chat with a member of our team</div>
      <button className="nav_card--button">Start Chat</button>
    </div>
  );
};

export default NavCard;

