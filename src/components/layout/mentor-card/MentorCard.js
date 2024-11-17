import React from "react";
import "./MentorCard.css";

const MentorCard = () => {
  return (
    <div className="mentor_card">
      <div className="mentor_card--profile_picture">
        <img src="" alt="" />
      </div>
      <div className="mentor_card--info">
        <div className="mentor_card--info_item" id="mentor_card--info_name">
          Name: An Dinh
        </div>
        <div className="mentor_card--info_item" id="mentor_card--info_country">
          Country: Vietnam
        </div>
        <div className="mentor_card--info_item" id="mentor_card--info_school">
          School: University of South Earth
        </div>
        <div className="mentor_card--info_item" id="mentor_card--info_gpa">
          GPA: 10/10
        </div>
        <div className="mentor_card--info_item" id="mentor_card--info_rating">
          <img src="" alt="rating star" />
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
