import React from "react";
import "./MentorCard.css";
import star from "../../assets/img/star.png";

const MentorCard = (props) => {
  return (
    <div className="mentor_card">
      <div className="mentor_card--profile_picture">
        <img src={props.img} alt="" />
      </div>
      <div className="mentor_card--info">
        <div className="mentor_card--info_first_line">
          <div className="mentor_card--info_item" id="mentor_card--info_name">
            {props.name}
          </div>
          <div className="mentor_card--info_first_line_seperator">|</div>
          <div
            className="mentor_card--info_item"
            id="mentor_card--info_country"
          >
            {props.country}
          </div>
        </div>
        <div className="mentor_card--info_item" id="mentor_card--info_school">
          {props.school}
        </div>
        <div className="mentor_card--info_item" id="mentor_card--info_skills">
          Skills: {props.skills}
        </div>
        <div className="mentor_card--info_last_line">
          <div className="mentor_card--info_gpa_and_rating">
            <div className="mentor_card--info_item" id="mentor_card--info_gpa">
              GPA: {props.gpa}
            </div>
            <div
              className="mentor_card--info_item"
              id="mentor_card--info_rating"
            >
              {Array.from(Array(props.rating), (e, i) => {
                return (
                  <div className="mentor_card--info_rating--star_container">
                    <img src={star} alt="Rating star" />
                  </div>
                );
              })}
              {/* <img src="" alt="rating star" /> */}
            </div>
          </div>
          <div className="mentor_card--info_item" id="mentor_card--info_price">
            ${props.price}/hour
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
