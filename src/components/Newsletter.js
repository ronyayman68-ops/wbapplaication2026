import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './newsletter.css';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleBlur = () => {
    if (email && !validateEmail(email)) {
      setStatus('Please enter a valid email address.');
    } else {
      setStatus('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('Invalid email. Please include an @ and a domain.');
      return;
    }

    setButtonText("Sending...");

    const serviceId = 'service_zyx103p'; 
    const templateId = 'template_1wn0dic';
    const publicKey = 'igsqtdXTlZvtmrtOs';

    const templateParams = {
      from_name: "Newsletter Subscriber",
      reply_to: email,
      message: `Great news! A new user with the email ${email} has just subscribed to your newsletter.`,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setButtonText("Submit");
        setEmail('');
        setStatus("Thank you for subscribing!");
        console.log("SUCCESS!");
      }, (error) => {
        setButtonText("Submit");
        setStatus("Something went wrong. Please try again.");
        console.log("FAILED...", error);
      });
  };

  return (
    <section className="subscribe" id="subscribe">
      <div className="container">
        <div className="subscribe-box">
          <div className="subscribe-content">
            <div className="subscribe-text">
              <h3>Subscribe to our Newsletter</h3>
              <p>Never miss the latest updates and news.</p>
            </div>
            <div className="subscribe-form">
              <form onSubmit={handleSubmit}>
                <div className="email-input-wrapper">
                  <input 
                    type="text" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleBlur} 
                    required 
                  />
                  <button type="submit">{buttonText}</button>
                </div>
                {status && (
                  <p style={{ 
                    color: status.includes('Thank') ? 'green' : 'red', 
                    marginTop: '10px' 
                  }}>
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};