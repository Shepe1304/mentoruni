import React from "react";
import "./Contact.css";
import NavCard from "../../../layout/navigation-card/NavCard";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact--headline">Contact us</div>
      <div className="contact--sub_headline">
        Have any questions? We would love to hear from you!
      </div>
      <div className="contact--overlay"></div>
      <div className="contact--nav_cards">
        <NavCard pos={1}/>
        <NavCard pos={2} />
        <NavCard pos={3}/>
      </div>
    </div>
  );
};

export default Contact;
