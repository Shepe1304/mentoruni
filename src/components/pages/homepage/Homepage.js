import React from "react";
import "./Homepage.css";
import heroImage from "../../assets/img/homepageHeroLogo.png";
import RecCard from "../../layout/recommendation-card/RecCard";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage--hero">
        <img src={heroImage} alt="Mentorship University" />
      </div>
      <div className="homepage--recommendations">
        {/* <RecCard /> */}
      </div>
    </div>
  );
};

export default Homepage;
