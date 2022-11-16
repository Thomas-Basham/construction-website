import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import orangeCouch from "/public/stock/orange-couch.jpg";
import patio from "/public/stock/patio.jpg";
export default function Projects(props) {
  const images = [orangeCouch, patio];
  const projectImages = [
    orangeCouch,
    patio,
    orangeCouch,
    patio,
    orangeCouch,
    patio,
    orangeCouch,
    patio,
    orangeCouch,
    patio,
    orangeCouch,
    patio,
    orangeCouch,
    patio,
    orangeCouch,
    patio,
    orangeCouch,
    patio,
  ];

  const imageGalleryData = images.map((image) => {
    return { original: image.src, thumbnail: image.src, originalHeight: 650 };
  });

  const projects = projectImages.map((image, i) => {
    return (
      <Image
        className="project-image "
        width={400}
        key={i}
        src={image}
        alt="project"
      />
    );
  });
  return (
    <>
      <Container fluid>
        <ImageGallery autoPlay={true} items={imageGalleryData} />
        <br></br>
        <br></br>
        <Container style={{ padding: 0 }}>{projects}</Container>
      </Container>
    </>
  );
}
