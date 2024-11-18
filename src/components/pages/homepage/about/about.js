import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          We are a passionate team dedicated to connecting students with experienced mentors 
          who can guide them on their academic journey. Our mission is to empower students 
          to achieve their full potential by providing them with personalized support, 
          valuable insights, and a network of professionals in their field of interest.
        </p>
        {/* You can add more content here, like team member profiles, company history, etc. */}
      </div>
    </div>
  );
}

export default About;