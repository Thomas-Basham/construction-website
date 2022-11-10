import { Row, Col, Container, Form, TextArea, Button } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function BgImageSection() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  return (
    <section
    className="bg-image-section"
    style={{
      position: "relative",
    }}
  >
    <br></br>
    <br></br>
    <Container fluid className="text-center text-white ">
      <h1 className="display-5 text-uppercase">
        Lorem ipsum dolor imperdiet massa
      </h1>
      <p style={{ width: "50em", margin: "0 auto" }}>
        Amet mauris commodo quis imperdiet massa. Congue mauris rhoncus
        aenean vel elit scelerisque. Enim nulla aliquet porttitor lacus.
        Adipiscing
      </p>
      <br></br>
      <br></br>

      <Row className="px-4">
        <Col xs>
          <ReactCardFlip
            isFlipped={isFlipped1}
            flipDirection="horizontal"
          >
            <div
              onMouseEnter={() => setIsFlipped1((prev) => !prev)}
              className="CardFront flip-card"
            >
              <div>
                <h4>pellentesque habitant morbi</h4>
                <hr></hr>
              </div>
            </div>
            <div
              onMouseLeave={() => setIsFlipped1((prev) => !prev)}
              className="CardBack flip-card"
            >
              <p>
                Imperdiet massa tincidunt nunc pulvinar sapien et.
                Consectetur adipiscing elit pellentesque habitant morbi
                tristique senectus et netus.
              </p>
            </div>
          </ReactCardFlip>
        </Col>
        <Col lg></Col>

        <Col xs>
          <ReactCardFlip
            isFlipped={isFlipped2}
            flipDirection="horizontal"
          >
            <div
              onMouseEnter={() => setIsFlipped2((prev) => !prev)}
              className="CardFront flip-card"
            >
              <div>
                <h4>adipiscing elit pellentesque</h4>
                <hr></hr>
              </div>
            </div>
            <div
              onMouseLeave={() => setIsFlipped2((prev) => !prev)}
              className="CardBack flip-card"
            >
              <p>
                Imperdiet massa tincidunt nunc pulvinar sapien et.
                Consectetur adipiscing elit pellentesque habitant morbi
                tristique senectus et netus.
              </p>
            </div>
          </ReactCardFlip>
        </Col>
      </Row>
    </Container>
  </section>


  );
}
