import { Row, Col, Container, Form, TextArea, Button } from "react-bootstrap";
import { GiLaurelsTrophy, GiCheckMark } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { BiPaperPlane, BiHeartCircle, BiFingerprint } from "react-icons/bi";
import { FaFileInvoice, FaTools } from "react-icons/fa";

export default function QualitySection() {
  return (
    <section
      style={{
        position: "relative",
      }}
      className="quality-section"
    >
      <Container fluid style={{ width: "95vw" }}>
        <Row>
          <br></br>
          <br></br>
          <Col className="quality-steps">
            <BiFingerprint size={80} />
            <br></br>
            <br></br>
            <br></br>
            <p>
              Habitant morbi tristique et netus. <br></br>
              Amet mauris commodo quis imperdiet massa.
            </p>
          </Col>
          <Col className="quality-steps">
            <BiHeartCircle size={80} />
            <br></br>
            <br></br>
            <br></br>
            <p>
              Habitant morbi tristique et netus. <br></br>
              Amet mauris commodo quis imperdiet massa.
            </p>
          </Col>
          <Col className="quality-steps">
            <GiCheckMark size={80} />
            <br></br>
            <br></br>
            <br></br>
            <p>
              Habitant morbi tristique et netus. <br></br>
              Amet mauris commodo quis imperdiet massa.
            </p>
          </Col>
          <Col className="quality-steps">
            <GiLaurelsTrophy size={80} />
            <br></br>
            <br></br>
            <br></br>
            <p>
              Habitant morbi tristique et netus. <br></br>
              Amet mauris commodo quis imperdiet massa.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
