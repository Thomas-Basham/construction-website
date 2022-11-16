import { Row, Col, Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import orangeCouch from "/public/stock/orange-couch.jpg";
import patio from "/public/stock/patio.jpg";
export default function Projects(props) {
  const images = [orangeCouch, patio];

  const imageGalleryData = images.map((image) => {
    return { original: image.src, thumbnail: image.src, originalHeight: 650 };
  });
  return (
    <>
    <Container fluid  >
      <ImageGallery autoPlay={true} items={imageGalleryData} />

      </Container>
    </>
  );
}
