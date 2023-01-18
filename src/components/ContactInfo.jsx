import Container from "react-bootstrap/Container";
import EmailIcon from "../images/JRICH-icon-email.png";
import PhoneIcon from "../images/JRICH-icon-phone.png";
import AddressIcon from "../images/JRICH-icon-address.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ContactInfo(props) {
  return (
    <Container fluid="md" className="text p-3" id="contact">
      <h1>Contact Info</h1>
      <Row className="p-1">
        <Col md="auto">
          {" "}
          <img alt="" width="30px" height="30px" src={AddressIcon} />
        </Col>
        <Col md="auto"> Suite 109, 3-11 Bellrose Drive, St. Albert, Alberta T8N 5C9</Col>
      </Row>
      <Row className="p-1">
        <Col md="auto">
          {" "}
          <img alt="" width="30px" height="30px" src={EmailIcon} />
        </Col>
        <Col md="auto">jerich@shaw.ca</Col>
      </Row>
      <Row className="p-1">
        <Col md="auto">
          {" "}
          <img alt="" width="30px" height="30px" src={PhoneIcon} />
        </Col>
        <Col md="auto">780-995-2807</Col>
      </Row>
    </Container>
  );
}
