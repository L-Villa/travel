import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <section className="contact-banner" id="contact">
        <div className="wrapper">
          <form className="contact-container" onSubmit={handleSubmit}>
            <h2>Get In Touch With Us</h2>
            <p>We'll get back to you as soon as possible</p>
            <div className="input-container">
              <label htmlFor="what">Full Name</label>
              <input type="text" placeholder="Your Name" required="true" />
            </div>
            <div className="input-container">
              <label htmlFor="what">Email</label>
              <input type="email" placeholder="Your Email" required="true" />
            </div>
            <div className="input-container">
              <label htmlFor="what">Phone Number</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                required="true"
              />
            </div>
            <div className="input-container">
              <label htmlFor="what">Travel Interests</label>
              <input
                type="text"
                placeholder="Your Travel Interests"
                required="true"
              />
            </div>
            <div className="input-container">
              <label htmlFor="what">Number Of Travelers</label>
              <input
                type="text"
                placeholder="How People Will Be Traveling"
                required="true"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

const handleSubmit = (e) => {
  e.preventDefault();
  alert("Your message has been sent");
};
