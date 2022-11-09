import { Row, Col, Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import orangeCouch from "/public/stock/orange-couch.jpg";
import patio from "/public/stock/patio.jpg";
export default function Home(props) {
  const images = [orangeCouch, patio];

  const imageGalleryData = images.map((image) => {
    return { original: image.src };
  });
  return (
    <>
      <ImageGallery items={imageGalleryData} />
    </>
  );
}
