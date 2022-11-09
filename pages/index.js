import { Row, Col, Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import orangeCouch from "/public/stock/orange-couch.jpg";
export default function Home(props) {
  const images = [orangeCouch.src];
  const imageGalleryData = images.map((image) => {
    return { original: image };
  });
  return (
    <>
      <ImageGallery items={imageGalleryData} />
    </>
  );
}
