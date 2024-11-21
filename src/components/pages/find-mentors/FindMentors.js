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
  const [searchInputValue, setSearchInputValue] = useState("");
  const [mentorSearched, setMentorSearched] = useState(false);

  useEffect(() => {
    setFilteredMentorList(mentorList);
  }, []);

  const HandleMentorSearch = (e) => {
    e.preventDefault();
    const words = searchInputValue.trim().toLowerCase().split(" ");
    const filteredMentorsBySearchInput = mentorList.filter((mentor) => {
      let include = false;
      words.map((word) => {
        if (
          mentor.name.toLowerCase().includes(word) ||
          mentor.skills.toLowerCase().includes(word)
        ) {
          include = true;
          return;
        }
      });
      return include;
    });
    setFilteredMentorList(filteredMentorsBySearchInput);
    setMentorSearched(true);
  };

  useEffect(() => {
    if (mentorSearched && searchInputValue === "") {
      setMentorSearched(false);
    }
  }, [searchInputValue]);

  useEffect(() => {
    const result = mentorList.filter((mentor) => {
      return (
        mentor.country == country ||
        mentor.school == school ||
        (rating == "1" && mentor.rating >= 4.1 && mentor.rating <= 5) ||
        (rating == "2" && mentor.rating >= 3.1 && mentor.rating <= 4) ||
        (rating == "3" && mentor.rating >= 2.1 && mentor.rating <= 3) ||
        (rating == "4" && mentor.rating >= 1.1 && mentor.rating <= 2) ||
        (rating == "5" && mentor.rating >= 0.1 && mentor.rating <= 1) ||
        (price == "1" && mentor.price >= 1 && mentor.price <= 10) ||
        (price == "2" && mentor.price >= 11 && mentor.price <= 20) ||
        (price == "3" && mentor.price >= 21 && mentor.price <= 30) ||
        (price == "4" && mentor.price >= 31 && mentor.price <= 40) ||
        (price == "5" && mentor.price >= 41 && mentor.price <= 50)
      );
    });
    setFilteredMentorList(result);
  }, [country, school, rating, price]);

  // useEffect(() => {
  //   const filteredMentorsByCountry = mentorList.filter((mentor) => {
  //     return mentor.country == country;
  //   });
  //   setFilteredMentorList(filteredMentorsByCountry);
  // }, [country]);

  // useEffect(() => {
  //   const filteredMentorsBySchool = mentorList.filter((mentor) => {
  //     return mentor.school == school;
  //   });
  //   setFilteredMentorList(filteredMentorsBySchool);
  // }, [school]);

  // useEffect(() => {
  //   const filteredMentorsByRating = mentorList.filter((mentor) => {
  //     if (rating == "1") {
  //       return mentor.rating >= 4.1 && mentor.rating <= 5;
  //     } else if (rating == "2") {
  //       return mentor.rating >= 3.1 && mentor.rating <= 4;
  //     } else if (rating == "3") {
  //       return mentor.rating >= 2.1 && mentor.rating <= 3;
  //     } else if (rating == "4") {
  //       return mentor.rating >= 1.1 && mentor.rating <= 2;
  //     } else if (rating == "5") {
  //       return mentor.rating >= 0.1 && mentor.rating <= 1;
  //     }
  //   });
  //   setFilteredMentorList(filteredMentorsByRating);
  // }, [rating]);

  // useEffect(() => {
  //   const filteredMentorsByPrice = mentorList.filter((mentor) => {
  //     if (price == "1") {
  //       return mentor.price >= 1 && mentor.price <= 10;
  //     } else if (price == "2") {
  //       return mentor.price >= 11 && mentor.price <= 20;
  //     } else if (price == "3") {
  //       return mentor.price >= 21 && mentor.price <= 30;
  //     } else if (price == "4") {
  //       return mentor.price >= 31 && mentor.price <= 40;
  //     } else if (price == "5") {
  //       return mentor.price >= 41 && mentor.price <= 50;
  //     }
  //   });
  //   setFilteredMentorList(filteredMentorsByPrice);
  // }, [price]);

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
          <form
            action=""
            onSubmit={(e) => {
              HandleMentorSearch(e);
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setSearchInputValue(e.target.value);
              }}
            />
          </form>
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
              <option value="University of Saint Thomas">
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

      <div className="find_mentors--mentor_list_wrapper">
        {mentorSearched &&
        filteredMentorList.length == 0 &&
        searchInputValue !== "" ? (
          <div className="find_mentors--mentor_list_no_result">
            <div>We could not find a mentor that matches your search.</div>
            <div>Explore some mentors below?</div>
          </div>
        ) : null}
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
                  searchInputValue={mentorSearched ? searchInputValue : ""}
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
                  searchInputValue={mentorSearched ? searchInputValue : ""}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindMentors;
