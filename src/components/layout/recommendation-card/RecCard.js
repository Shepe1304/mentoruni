import React from "react";
import "./RecCard.css";
import quotationMarks from "../../assets/img/quotationMarks.png";

const RecCard = () => {
  return (
    <div className="rec_card">
      <div className="rec_card--background_upper"></div>
      <div className="rec_card--quotation_marks">
        <img src={quotationMarks} alt="" />
      </div>
      <div className="rec_card--quote">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
        quas tenetur ducimus, a harum vero non molestiae doloribus
        necessitatibus similique, assumenda veritatis! Expedita sint ea libero
        quo blanditiis pariatur dolorem.
      </div>
      <div className="rec_card--recommender">Aristotle - </div>
    </div>
  );
};

export default RecCard;
