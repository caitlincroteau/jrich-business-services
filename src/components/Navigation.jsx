import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Brand from "../images/JRICH-name.png";

export default function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="text">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            width="100"
            src={Brand}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
