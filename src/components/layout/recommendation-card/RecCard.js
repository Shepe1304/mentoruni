import React from "react";
import "./RecCard.css";
import quotationMarks from "../../assets/img/quotationMarks.png";

const RecCard = () => {
  return (
    <div className="rec_card">
      <div className="rec_card--quotation_marks">
        <img src={quotationMarks} alt="" />
      </div>
      <div className="rec_card--quote">
        Very good awesome great would recommend {"<3"} {"<3"} {"<3"}
      </div>
      <div className="rec_card--recommender">Aristotle - </div>
    </div>
  );
};

export default RecCard;
