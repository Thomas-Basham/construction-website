import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import patio from "/public/stock/patio.jpg";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { Fade } from "react-reveal";

export default function IntroSection() {
  return (
    <section
      className="intro-section"
      style={{
        marginTop: "40em",
        padding: "5em",
        width: "80vw",
        position: "relative",
      }}
    >
      <Fade left cascade>
        <div className="detached-heading text-center display-6">
          commodo massa. dolore aliqua.
        </div>
      </Fade>
      <Container fluid>
        <Fade left cascade>
          <Row>
            <Col sm={6}>
              <h1 className="display-3">Lorem ipsum dolor</h1>
              <strong>Eiusmod tempor incididunt ut labore</strong>
              <br></br>
              <br></br>
              <p>
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
                porttitor lacus. Adipiscing
              </p>
              <button className="button">
                <Link href={"/projects"}>
                  PROJECTS &nbsp; <BsArrowUpRight />
                </Link>
              </button>
            </Col>
            <Col sm={6}>
              <Image
                alt="house with orange couch"
                objectFit="contain"
                layout="responsive"
                src={patio}
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
}
