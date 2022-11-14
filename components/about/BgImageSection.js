import { Row, Col, Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { Zoom } from "react-reveal";

export default function AboutBgImageSection() {
  return (
    <section className="about-bg-image-section">
      <Container fluid className=" " style={{ width: "80%" }}>
        <div className="display-3 about-heading">Our Team</div>
      </Container>
    </section>
  );
}
