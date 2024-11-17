import React from "react";
import "./Homepage.css";
import heroImage from "../../assets/img/homepageHeroLogo.png";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage--hero">
        <img src={heroImage} alt="Mentorship University" />
      </div>
    </div>
  );
};

export default Homepage;
