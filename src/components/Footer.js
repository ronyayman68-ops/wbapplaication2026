import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, Instagram } from "react-bootstrap-icons";
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <h1 className="footer-logo">LOGO<span>.</span></h1>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ronyayman" target="_blank" rel="noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/ronyayman68-ops/wbapplaication2026.git" target="_blank" rel="noreferrer">
                <Github size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram size={20} />
              </a>
            </div>
            <p className="copyright">© 2026 Rawan Ayman Saber. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}