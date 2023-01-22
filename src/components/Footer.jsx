import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Footer(props) {
  return (
    <Container className="border-top m-3 p-3 fst-italic">
      <Row>
        <Col>© 2023 JRich Business Services Inc. All rights reserved.</Col>
      </Row>
    </Container>
  );
}
