import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Linkedin, Facebook, Instagram } from "react-bootstrap-icons";
import "./style.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled custom-navbar" : "custom-navbar"} fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="logo-text">
          LOGO
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            
            <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
            <Nav.Link href="#skills" className="navbar-link">Skills</Nav.Link>
            <Nav.Link href="#projects" className="navbar-link">Projects</Nav.Link>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin size={16} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram size={16} />
                </a>
              </div>
              
              <button className="vvd" onClick={() => console.log('connect')}>
                <span>Let's Connect</span>
              </button>
            </span>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;