import Container from "react-bootstrap/Container";
import logo from "../images/JRICH-brand-med-transp.png";

export default function Header(props) {
  return (
    <Container className="App-header">
      <img
        src={logo}
        className="pt-4 pb-2"
        alt="logo"
        style={{ width: "350px" }}
      />
    </Container>
  );
}
