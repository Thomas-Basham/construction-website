import { Row, Col, Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import orangeCouch from "/public/stock/orange-couch.jpg";
import patio from "/public/stock/patio.jpg";
export default function Projects(props) {
  const images = [orangeCouch, patio];

  const imageGalleryData = images.map((image) => {
    return { original: image.src, thumbnail: image.src };
  });
  return (
    <>
      <ImageGallery autoPlay={true} showFullscreenButton={false} items={imageGalleryData} />
      {/* <hr></hr> */}


    </>
  );
}
