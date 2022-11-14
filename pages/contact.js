import { Row, Col, Container } from "react-bootstrap";
import PartialContactSection from "../components/index/PartialContactSection";
export default function ContactPage() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container fluid="md">
        <Row>
          <Col className="text-center">
            <PartialContactSection/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
