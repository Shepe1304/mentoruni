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
  const [filteredMentorList, setFilteredMentorList] = useState([]);

  useEffect(() => {
    setFilteredMentorList(mentorList);
  }, []);

  useEffect(() => {
    const filteredMentorsByRating = mentorList.filter((mentor) => {
      if (rating == "1") {
        return mentor.rating >= 1 && mentor.rating <= 10;
      } else if (rating == "2") {
        return mentor.rating >= 11 && mentor.rating <= 20;
      } else if (rating == "3") {
        return mentor.rating >= 21 && mentor.rating <= 30;
      } else if (rating == "4") {
        return mentor.rating >= 31 && mentor.rating <= 40;
      } else if (rating == "5") {
        return mentor.rating >= 41 && mentor.rating <= 50;
      }
    });
    setFilteredMentorList(filteredMentorsByRating);
  }, [rating]);

  useEffect(() => {
    const filteredMentorsByPrice = mentorList.filter((mentor) => {
      if (price == "1") {
        return mentor.price >= 1 && mentor.price <= 10;
      } else if (price == "2") {
        return mentor.price >= 11 && mentor.price <= 20;
      } else if (price == "3") {
        return mentor.price >= 21 && mentor.price <= 30;
      } else if (price == "4") {
        return mentor.price >= 31 && mentor.price <= 40;
      } else if (price == "5") {
        return mentor.price >= 41 && mentor.price <= 50;
      }
    });
    setFilteredMentorList(filteredMentorsByPrice);
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
              <option value="1">4.1 - 5</option>
              <option value="2">3.1 - 4</option>
              <option value="3">2.1 - 3</option>
              <option value="4">1.1 - 2</option>
              <option value="5">0.1 - 1</option>
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
              <option value="1">$1 - $10</option>
              <option value="2">$11 - $20</option>
              <option value="3">$21 - $30</option>
              <option value="4">$31 - $40</option>
              <option value="5">$41 - $50</option>
            </select>
          </div>
        </div>
      </aside>

      <div className="find_mentors--mentor_list">
        {filteredMentorList.length != 0 ? (
          <>
            {filteredMentorList.map((mentor) => (
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
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default FindMentors;
