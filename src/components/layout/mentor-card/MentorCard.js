import React from "react";
import "./MentorCard.css";
import star from "../../assets/img/star.png";

const MentorCard = (props) => {
  console.log(props.searchInputValue.trim().toLowerCase().split(" "));
  console.log(props.skills.trim().toLowerCase().split(" "));

  return (
    <div className="mentor_card">
      <div className="mentor_card--profile_picture">
        <img src={props.img} alt="" />
      </div>
      <div className="mentor_card--info">
        <div className="mentor_card--info_first_line">
          <div className="mentor_card--info_item" id="mentor_card--info_name">
            {/* {props.name} */}
            {props.name
              .trim()
              .split(" ")
              .map((name_word, id) => {
                let punctuationFirst = "",
                  punctuationLast = "";
                while (!/^[a-zA-Z]$/.test(name_word[0])) {
                  punctuationFirst = name_word[0];
                  name_word = name_word.substring(1);
                }
                while (!/^[a-zA-Z]$/.test(name_word[name_word.length - 1])) {
                  punctuationLast = name_word[name_word.length - 1];
                  name_word = name_word.substring(0, name_word.length - 1);
                }
                if (
                  !props.searchInputValue
                    .trim()
                    .toLowerCase()
                    .split(" ")
                    .includes(name_word.toLowerCase())
                ) {
                  return (
                    <span>
                      {punctuationFirst + name_word + punctuationLast}{" "}
                    </span>
                  );
                } else {
                  return (
                    <span>
                      {punctuationFirst}
                      <span
                        style={{
                          backgroundColor: "rgb(247, 202, 94)",
                          fontWeight: "bold",
                        }}
                      >
                        {name_word}
                      </span>
                      {punctuationLast}{" "}
                    </span>
                  );
                }
              })}
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
          {/* {props.skills} */}
          {props.skills
            .trim()
            .split(" ")
            .map((skill_word, id) => {
              let punctuationFirst = "",
                punctuationLast = "";
              while (!/^[a-zA-Z]$/.test(skill_word[0])) {
                punctuationFirst = skill_word[0];
                skill_word = skill_word.substring(1);
              }
              while (!/^[a-zA-Z]$/.test(skill_word[skill_word.length - 1])) {
                punctuationLast = skill_word[skill_word.length - 1];
                skill_word = skill_word.substring(0, skill_word.length - 1);
              }
              if (
                !props.searchInputValue
                  .trim()
                  .toLowerCase()
                  .split(" ")
                  .includes(skill_word.toLowerCase())
              ) {
                return (
                  <span>
                    {punctuationFirst + skill_word + punctuationLast}{" "}
                  </span>
                );
              } else {
                return (
                  <span>
                    {punctuationFirst}
                    <span
                      style={{
                        backgroundColor: "rgb(247, 202, 94)",
                        fontWeight: "bold",
                      }}
                    >
                      {skill_word}
                    </span>
                    {punctuationLast}{" "}
                  </span>
                );
              }
            })}
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
