import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

import team from "/public/stock/team.jpg";

export default function AboutSection() {
  return (
    <section className="about-section pt-5 mx-auto" style={{ width: "60vw" }}>
      <Container fluid className="about-container mx-auto">
        <Row className=" mx-auto" style={{ margin: "0 auto", width: "50vw" }}>
          <Col sm={6}>
            <Image
              alt="Teamwork"
              objectFit="contain"
              layout="responsive"
              src={team}
            />
          </Col>
          <Col sm={6}>
            <div className="display-6">Dis parturient montes.</div>
            <br></br>
            <div className="ml-5 pl-5">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Amet mauris commodo quis imperdiet massa.</li>
                <li>Enim nulla aliquet porttitor lacus.</li>
                <li>Imperdiet massa tincidunt nunc pulvinar sapien.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Amet mauris commodo quis imperdiet massa.</li>
                <li>Enim nulla aliquet porttitor lacus.</li>
                <li>Imperdiet massa tincidunt nunc pulvinar sapien.</li>
              </ul>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                magnis dis parturient montes nascetur ridiculus mus mauris
                vitae. Nec sagittis
              </p>
              <br></br>
              <p>
                Imperdiet massa tincidunt nunc pulvinar sapien et. Consectetur
                adipiscing elit pellentesque habitant morbi tristique senectus
                et netus. Amet mauris commodo quis imperdiet massa. Congue
                mauris rhoncus aenean vel elit scelerisque. Enim nulla aliquet
                porttitor lacus.
              </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
