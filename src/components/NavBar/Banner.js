import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import spaceManImg from "../../assests/space man.png"; 
import MyCV from '../../assests/Rawan_Ayman_Saber_FlowCV_Resume_2026-03-13-1.pdf';
import './banner.css';

export const Banner = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = MyCV;
    link.download = 'Rawan_Ayman_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! I'm Rawan Ayman
              <span className="txt"> Web Developer </span>
            </h1>
            <p>Web App for Third Year College students :) </p>
            <button onClick={handleDownload}>
              Download CV <ArrowDownCircle size={25} />
            </button>
          </Col>

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