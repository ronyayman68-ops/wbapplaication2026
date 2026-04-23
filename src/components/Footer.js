import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Facebook, Instagram } from "react-bootstrap-icons";
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <h1 className="footer-logo">LOGO</h1>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ronyayman" target="_blank" rel="noreferrer">
                <Linkedin size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram size={18} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}