import React from "react";
import "./Homepage.css";
import heroImage from "../../assets/img/mentoruni.png";
import RecCard from "../../layout/recommendation-card/RecCard";
import Contact from "./contact/Contact";
import FAQs from "./faqs/FAQs";
import About from "./about/about"

const Homepage = () => {
  return (
    <div className="homepage">
      <img src={heroImage} alt="Mentorship University" />
      <About  />
      <Contact />
      <FAQs />
      
      {/* <div className="homepage--hero">
        <img src={heroImage} alt="Mentorship University" />
      </div>
      <div className="homepage--recommendations">
        <div className="homepage--recommendations_background_upper">
          <div>Testimonials</div>
        </div>
        <div className="homepage--recommendations_testimonial_space">
          Testimonials
        </div>
        <div className="homepage--recommendations_container">
          <RecCard />
          <RecCard />
          <RecCard />
        </div>
      </div> */}
    </div>
  );
};

export default Homepage;
