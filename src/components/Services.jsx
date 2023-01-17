import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";

export default function Services(props) {
  return (
    <Container fluid="md" className="text align-text center pt-5">
      <CardGroup>
          <Card className="">
            <Card.Body>
            <Card.Header as="h5">Bookkeeping and Tax Filing</Card.Header>
              <Card.Text className="pt-3">
                At the most affordable rates, we provide bookkeeping and tax
                filing for small to medium unincorporated or incorporated
                businesses.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Header as="h5">Tax Seminars & Personal Consulting</Card.Header>
              <Card.Text className="pt-3">
                Our Tax Seminars & personal consulting services are geared
                toward your type of business and will cover topics such as
                self-employment, record keeping, business income, eligible
                expenses, GST treatment, inventory, audits and dispelling tax
                myths. We will provide you with the information you need to keep
                your business, your paperwork and your taxes up to date and
                accurate.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
            <Card.Header as="h5">CRA Troubleshooting</Card.Header>
              <Card.Text className="pt-3">
                We are here to help you resolve all questions and issues related
                to CRA audits and appeals and can act as your representative in
                these matters.
              </Card.Text>
            </Card.Body>
          </Card>
          </CardGroup>

    </Container>
  );
}
