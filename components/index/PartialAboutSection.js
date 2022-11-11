import { Row, Col, Container, Form, TextArea, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import team from "/public/stock/team.jpg";

export default function PartialAboutSection() {
  return (
    <section
      className="partial-about-section"
      style={{
        position: "relative",
      }}
    >
      <Container fluid className="partial-about-container" style={{margin:'0 auto'}}>
        <Row >
          <Col sm={7}>
            <Image
              alt="Teamwork"
              objectFit="contain"
              layout="responsive"
              src={team}
            />
          </Col>
          <Col sm={4}>
            <div  className="display-6">
              Dis parturient montes nascetur ridiculus
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div >
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
            </div>
            <button className="button">
              <Link href={"/about"}>
                ABOUT US &nbsp; <BsArrowUpRight />
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
