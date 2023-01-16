import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function ContactForm(props) {
  return (
    <Container className="p-3 ms-auto square border border-2 rounded text-start card-lrg-bkgrnd">
      <Form>
        <Row className="mb-4 mt-4">
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Phone" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Label>What services does your business provide?</Form.Label>
          <Form.Check type="checkbox" label="Contractors/Trades" />
          <Form.Check type="checkbox" label="Health and Wellness Therapists" />
          <Form.Check type="checkbox" label="Performing and Visual Artists" />
          <Form.Check type="checkbox" label="Consultants" />
          <Form.Check type="checkbox" label="Realtors" />
          <Form.Check type="checkbox" label="Other" />
          <Form.Text className="text-muted">
            Please check as many as apply.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Label>
            What type of service would you like us to assist you with?
          </Form.Label>

          <Form.Check type="checkbox" label="Bookkeeping" />
          <Form.Check type="checkbox" label="Filing Tax Returns" />
          <Form.Check type="checkbox" label="Filing GST Returns" />
          <Form.Check type="checkbox" label="Business Advice" />
          <Form.Check type="checkbox" label="Other" />
          <Form.Text className="text-muted">
            Please check as many as apply.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Do you have a current bookkeeper or accountant?
          </Form.Label>
          <Form.Check
            type="radio"
            label="Yes"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
          <Form.Check
            type="radio"
            label="No"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Questions or Comments:</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
