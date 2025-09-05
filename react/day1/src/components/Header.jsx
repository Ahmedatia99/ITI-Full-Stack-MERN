import React from "react";
import styles from "../css/Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home" className={styles.logo}>
          MyWebsite
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={styles.link}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" className={styles.link}>
              About
            </Nav.Link>
            <Nav.Link href="#services" className={styles.link}>
              Services
            </Nav.Link>

            <NavDropdown title="More" id="nav-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#action/1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
