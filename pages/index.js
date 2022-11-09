import { Row, Col, Container } from "react-bootstrap";
export default function Home(props) {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container fluid="md">
        <Row>
          <Col className="text-center">
            <h1>Hello, World!</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
