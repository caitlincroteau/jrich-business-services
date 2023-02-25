import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Brand from "../images/JRICH-name.png";

export default function Navigation(props) {
  return (
    <Navbar
      collapseOnSelect
      bg="white"
      expand="sm"
      sticky="top"
      className="text"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            width="100"
            src={Brand}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
