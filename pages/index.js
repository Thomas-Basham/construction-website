import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import orangeCouch from "/public/stock/orange-couch.jpg";
import stairsPeople from "/public/stock/stairs-people.jpg";
import patio from "/public/stock/patio.jpg";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { BiPaperPlane } from "react-icons/bi";
import { FaFileInvoice, FaTools } from "react-icons/fa";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function Home() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  return (
    <>
      <Image
        alt="house with orange couch"
        objectFit="contain"
        layout="responsive"
        src={orangeCouch}
        style={{ position: "relative", top: -400 }}
      />
      <section
        style={{
          padding: "5em",
          width: "fit-content",
          position: "relative",
          top: -650,
        }}
      >
        <div className="detached-heading text-center display-6">
          commodo massa. dolore aliqua.
        </div>
        <Container>
          <Row>
            <Col>
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
            <Col>
              <Image
                alt="house with orange couch"
                objectFit="contain"
                layout="responsive"
                src={patio}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="bg-image-section"
        style={{
          position: "relative",
          top: -650,
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
              <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
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
              <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
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
      <section
        style={{
          position: "relative",
          top: -650,
        }}
        className="process-section"
      >
        <Container fluid style={{ width: "95vw" }}>
          <div className="display-5 text-center text-uppercase ">
            Our Process
          </div>
          <hr style={{ width: 80 }}></hr>
          <Row>
            <br></br>
            <br></br>
            <Col className="process-steps">
              <MdContactPhone size={80} />
              <br></br>
              <br></br>
              <h6>
                <strong>Step 1</strong>
              </h6>
              <br></br>
              <p>
                Habitant morbi tristique et netus. <br></br>
                Amet mauris commodo quis imperdiet massa.
              </p>
            </Col>
            <Col className="process-steps">
              <BiPaperPlane size={80} />
              <br></br>
              <br></br>
              <h6>
                <strong>Step 2</strong>
              </h6>
              <br></br>
              <p>
                Habitant morbi tristique et netus. <br></br>
                Amet mauris commodo quis imperdiet massa.
              </p>
            </Col>
            <Col className="process-steps">
              <FaFileInvoice size={80} />
              <br></br>
              <br></br>
              <h6>
                <strong>Step 3</strong>
              </h6>
              <br></br>
              <p>
                Habitant morbi tristique et netus. <br></br>
                Amet mauris commodo quis imperdiet massa.
              </p>
            </Col>
            <Col className="process-steps">
              <FaTools size={80} />
              <br></br>
              <br></br>
              <h6>
                <strong>Step 4</strong>
              </h6>
              <br></br>
              <p>
                Habitant morbi tristique et netus. <br></br>
                Amet mauris commodo quis imperdiet massa.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
