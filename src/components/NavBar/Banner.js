import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// Import the image from your assets folder
import spaceManImg from "../../assests/space man.png"; 
import './banner.css';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          {/* Left Column for Text */}
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! I'm Rawan Ayman
              <span className="txt"> Web Developer </span>
            </h1>
            <p>Web App for Third Year College students :) </p>
            <button>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>

          {/* Right Column for the Image */}
          <Col xs={12} md={6} xl={5}>
            <div className="banner-img">
              <img src={spaceManImg} alt="Header Img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};