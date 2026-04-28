import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./contact.css";
import contactImg from "../assests/contact-img.png";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    if (value.includes(".")) {
      setError("Numbers only, please!");
    } else {
      setError("");
    }

    if (value.length <= 12) {
      onFormUpdate("phone", value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const serviceId = "service_zyx103p";
    const templateId = "template_1wn0dic";
    const publicKey = "igsqtdXTlZvtmrtOs";

    const templateParams = {
      from_name: `${formDetails.firstName} ${formDetails.lastName}`,
      to_name: "Rawan",
      message: formDetails.message,
      phone: formDetails.phone,
      reply_to: formDetails.email,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        setButtonText("Send");
        setIsVisible(false);
        console.log("Notification sent to phone!", result.text);
      },
      (err) => {
        setButtonText("Send");
        alert("Failed to send. Please try again.");
        console.log("FAILED...", err);
      },
    );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" className="img-fluid" />
          </Col>
          <Col size={12} md={6}>
            {isVisible ? (
              <div className="contact-form">
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row className="gx-3 gy-2">
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) =>
                          onFormUpdate("firstName", e.target.value)
                        }
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) =>
                          onFormUpdate("lastName", e.target.value)
                        }
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={handlePhoneChange}
                      />
                      {error && (
                        <span
                          className="error-msg"
                          style={{ color: "red", fontSize: "12px" }}
                        >
                          {error}
                        </span>
                      )}
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        rows="4"
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                      ></textarea>
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            ) : (
              <div className="submission-success">
                <h2>Thank you! We will be in touch soon.</h2>
                <button
                  className="reset-btn"
                  onClick={() => {
                    setIsVisible(true);
                    setFormDetails({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      message: "",
                    });
                  }}
                >
                  <span>Show Form Again</span>
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
