import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Footer(props) {
  return (
    <Container className="border-top mt-4 p-4 fst-italic">
      <Row>
        <Col>© 2023 JRich Business Services Inc. All rights reserved.</Col>
      </Row>
    </Container>
  );
}
