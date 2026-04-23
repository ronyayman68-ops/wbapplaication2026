import React from "react";
import "./contact.css";
import contactImg from "../assests/contact-img.png";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-image">
            <img src={contactImg} alt="Contact Us" />
          </div>
          <div className="contact-form">
            <h2>Get In Touch</h2>
            <form>
              <div className="input-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="input-row">
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone No." />
              </div>
              <textarea rows="6" placeholder="Message"></textarea>
              <button type="submit">
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
