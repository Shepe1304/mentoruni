import React, { useEffect, useState } from "react";
import "./FindMentors.css";
import magnifier from "../../assets/img/magnifier.png";
import MentorCard from "../../layout/mentor-card/MentorCard";
import { mentorList } from "../../assets/data-lists/MentorList";

const FindMentors = () => {
  const [country, setCountry] = useState("");
  const [school, setSchool] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    console.log(price);
  }, [price]);

  return (
    <div className="find_mentors">
      <aside className="find_mentors--filter_bar">
        <div className="find_mentors--filter_bar--headline">Filter</div>
        <div className="find_mentors--filter_bar--searchbar">
          <div className="find_mentors--filter_bar--searchbar_icon_container">
            <img
              src={magnifier}
              alt="Magnifier icon"
              className="find_mentors--filter_bar--searchbar_icon"
            />
          </div>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="find_mentors--filter_options">
          <div className="find_mentors--filter_option">
            <div className="find_mentors--filter_option_text">Country</div>
            <select
              className="find_mentors--filter_option"
              name="country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              <option value="choose">Choose Country...</option>
              <option value="Vietnam">Vietnam</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className="find_mentors--filter_option">
            <div className="find_mentors--filter_option_text">
              Current School/Institution
            </div>
            <select
              className="find_mentors--filter_option"
              name="current_school_institution"
              onChange={(e) => {
                setSchool(e.target.value);
              }}
            >
              <option value="choose">Choose School/Institution</option>
              <option value="University of South Florida">
                University of South Florida
              </option>
              <option value="University of Central Florida">
                University of Central Florida
              </option>
              <option value="Harvard University">Harvard University</option>
              <option value="Duke University">Duke University</option>
              <option value="Duke University">
                University of Saint Thomas
              </option>
            </select>
          </div>
          <div className="find_mentors--filter_option">
            <div className="find_mentors--filter_option_text">Rating</div>
            <select
              className="find_mentors--filter_option"
              name="rating"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            >
              <option value="choose">Choose Rating Range</option>
              <option value="4-5">4.1 - 5</option>
              <option value="3-4">3.1 - 4</option>
              <option value="2-3">2.1 - 3</option>
              <option value="1-2">1.1 - 2</option>
              <option value="1-2">0.1 - 1</option>
            </select>
          </div>
          <div className="find_mentors--filter_option">
            <div className="find_mentors--filter_option_text">Price</div>
            <select
              className="find_mentors--filter_option"
              name="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            >
              <option value="choose">Choose Price Range</option>
              <option value="1-10">$1 - $10</option>
              <option value="11-20">$11 - $20</option>
              <option value="21-30">$21 - $30</option>
              <option value="31-40">$31 - $40</option>
              <option value="41-50">$41 - $50</option>
            </select>
          </div>
        </div>
      </aside>

      <div className="find_mentors--mentor_list">
        {mentorList.map((mentor) => (
          <MentorCard
            name={mentor.name}
            country={mentor.country}
            school={mentor.school}
            skills={mentor.skills}
            gpa={mentor.gpa}
            rating={mentor.rating}
            price={mentor.price}
            img={mentor.img}
          />
        ))}
      </div>
    </div>
  );
};

export default FindMentors;
