import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Intro(props) {
  return (
    <Container fluid="md" className="text align-text center">
      <h1>JRich Business Services Inc.</h1>
      <Row className="pb-3">
        <Col>
          JRich Business Services Inc. is a company dedicated to providing you
          with efficient business solutions adapted to your specific needs. With
          33 years at Canada Revenue Agency, Janis Richards has the experience
          to assist you in managing your finances for a better bottom line.
        </Col>
      </Row>
      <Row className="pb-3">
        <Col>
          To get started with our services, please fill out our online
          questionnaire below or contact us via phone or email.
        </Col>
      </Row>
    </Container>
  );
}
