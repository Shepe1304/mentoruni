import React from "react";
import "./Background.css";
import schoolBackground from "../assets/img/Schoolback.png";

const Background = () => {
  return (
    <div className="background">
      <div className="background--img">
        <img src={schoolBackground} alt="" />
      </div>
    </div>
  );
};

export default Background;
