import React from "react";
import "./Contact.css";
import NavCard from "../../../layout/navigation-card/NavCard";

const Contact = () => {
  const contactMethods = [
    {
      headline: "Live Chat",
      content: "Chat with a member of our team.",
      buttonText: "Start Chat",
    },
    {
      headline: "Help & Support",
      content:
        "Our support team is spread across the globe to give you fast responses and even faster answers.",
      buttonText: "Scroll To Support",
      buttonText2: "SUBMIT A REQUEST",
    },
    {
      headline: "Press",
      content:
        "Are you interested in the lastest news on our students and mentors.",
      buttonText: "Scroll To Press",
    },
  ];

  return (
    <div className="contact">
      <div className="contact--headline">Contact us</div>
      <div className="contact--sub_headline">
        Have any questions? We would love to hear from you!
      </div>
      <div className="contact--overlay"></div>
      <div className="contact--nav_cards">
        {contactMethods.map((contactMethod, id) => (
          <NavCard
            pos={id+1}
            headline={contactMethod.headline}
            content={contactMethod.content}
            buttonText={contactMethod.buttonText}
            buttonText2={contactMethod.buttonText2}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
