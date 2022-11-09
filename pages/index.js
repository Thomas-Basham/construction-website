import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import orangeCouch from "/public/stock/orange-couch.jpg";
import patio from "/public/stock/patio.jpg";
export default function Home(props) {

  return (
    <>
   
      <Image alt="house with orange couch" objectFit="contain" layout="responsive"src={orangeCouch}/>
   
    <section>
      <Container>
        <Row>
          <Col>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nec sagittis</p>
      <br></br>   
      <p>Imperdiet massa tincidunt nunc pulvinar sapien et. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Amet mauris commodo quis imperdiet massa. Congue mauris rhoncus aenean vel elit scelerisque. Enim nulla aliquet porttitor lacus. Adipiscing</p>   
          
          </Col>
          </Row>
      </Container>
    </section>

    </>
  );
}
