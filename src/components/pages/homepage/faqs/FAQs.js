import React, { useState } from "react"; // Import useState from React
import "./FAQs.css";
// import "./FAQs.css";
import FAQsimage from "../../../assets/img/FAQs image.png";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your project about?",
      answer:
        "My project is a platform that connects students with mentors who can provide guidance and support in their academic journey.",
    },
    {
      question: "How does it work?",
      answer:
        "Students can create profiles, search for mentors based on their needs, and schedule online or in-person sessions.",
    },
    {
      question: "Who are the mentors?",
      answer:
        "Our mentors are experienced professionals and academics from various fields who are passionate about helping students succeed.",
    },
    {
      question: "How much does it cost?",
      answer:
        "The cost varies depending on the mentor and the type of session. You can view the mentor's hourly rate on their profile.",
    },
    {
      question: "Is it safe?",
      answer:
        "We take safety seriously. All mentors undergo a background check, and we provide a secure platform for communication and payments.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq--container">
      <div className="faq--introduction">
        <img src={FAQsimage} alt="Image" className="FAQsiamge" />
        <div className="faq--intro_text">
          <h2>Frequently Asked Questions</h2>
          <p>
            Have questions? Here you'll find the answers most valued by our
            partners, along with access to step-to-step instructions and support
          </p>
        </div>
      </div>
      <ul className="faq--list">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className={`faq--item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq--question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className="faq--icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="faq--answer">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQs;
