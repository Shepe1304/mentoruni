import React from "react";
import "./about.css";
import About1 from "../../../assets/img/about1.jpg";
import About2 from "../../../assets/img/about2.jpg";
import About3 from "../../../assets/img/about3.jpg";

function About() {
  return (
    <div className="about--container">
      <div className="about--intro_section">
        {" "}
        {/* Introduction section */}
        <h2 className="about--title">About Us</h2>
        <p className="about--description">
          At MentorUni, we revolutionize the college application process by
          connecting high school students with peer mentors who have recently
          succeeded in their own college applications. We prioritize
          affordability and personalized guidance to make quality mentorship
          accessible to everyone. Our platform empowers students to reach their
          dream colleges with confidence and suppor
        </p>
      </div>
      <div className="about--items">
        <div className="about--problem_section">
          {" "}
          {/* Problem section */}
          <div className="about--image_container">
            <img
              src={About1}
              alt="about--About1"
              className="about--About1iamge"
            />
          </div>
          <div className="about--item_content">
            <h3>Problem</h3>
            <p>
              Traditional agencies are expensive and lack personalized guidance,
              leaving many students without adequate support for their college
              applications.
            </p>
          </div>
        </div>

        <div className="about--mission_section">
          {" "}
          {/* Mission section */}
          <div className="about--image_container">
            <img
              src={About2}
              alt="about--About2"
              className="about--About2iamge"
            />
          </div>
          <div className="about--item_content">
            <h3>Mission</h3>
            <p>
              Providing personalized and affordable support on different
              specific aspects of college application that elevate the education
              of our students.{" "}
            </p>
          </div>
        </div>

        <div className="about--solution_section">
          {" "}
          {/* Solution section */}
          <div className="about--image_container">
            <img
              src={About3}
              alt="about--About3"
              className="about--About3iamge"
            />
          </div>
          <div className="about--item_content">
            <h3>Solution</h3>
            <p>
              We solve this by directly connecting students with experienced
              peer mentors through an affordable, streamlined platform.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
