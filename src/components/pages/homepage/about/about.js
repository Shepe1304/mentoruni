import React from 'react';
import './about.css';
import About1 from "../../../assets/img/about1.jpg";
import About2 from "../../../assets/img/about2.jpg";
import About3 from "../../../assets/img/about3.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="intro-section"> {/* Introduction section */}
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
        At MentorUni, we revolutionize the college application process by connecting high school students with peer mentors who have recently succeeded in their own college applications. We prioritize affordability and personalized guidance to make quality mentorship accessible to everyone. Our platform empowers students to reach their dream colleges with confidence and suppor 
        </p>
      </div>

      <div className="problem-section"> {/* Problem section */}
        <img src={About1} alt="About1" className="About1iamge"/>

        <h3>Problem</h3>
        <p>
        Traditional agencies are expensive and lack personalized guidance, leaving many students without adequate support for their college applications.
        </p>
      </div>

      <div className="mission-section"> {/* Mission section */}
      <img src={About2} alt="About2" className="About2iamge"/>
        <h3>Mission</h3>
        <p>
We solve this by directly connecting students with experienced peer mentors through an affordable, streamlined platform.  </p>    
</div>

      <div className="solution-section"> {/* Solution section */}
      <img src={About3} alt="About3" className="About3iamge"/>
        <h3>Solution</h3>
        <p>
        We solve this by directly connecting students with experienced peer mentors through an affordable, streamlined platform.        </p>
      </div>
    </div>
  );
}

export default About;