import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Logo.png";
import "./Navs.css";

const Navs = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} title="Logo" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#explore">Explore Foods</Nav.Link>
              <Nav.Link href="#review">Review</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link id="last-nav">0123456789</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navs;
