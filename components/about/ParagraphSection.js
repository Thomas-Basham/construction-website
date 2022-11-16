import { Container } from "react-bootstrap";

export default function ParagraphSection() {
  return (
    <section className="about-section pt-5 mx-auto" style={{ width: "50vw" }}>
      <Container fluid className="about-container mx-auto">
        <div className="display-6 text-center">About our company</div>
        <hr></hr>
        <br></br>
        <br></br>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          scelerisque augue enim, vitae porttitor augue rhoncus eget. Aliquam
          ultrices fringilla bibendum. Pellentesque lobortis eget justo nec
          blandit. Phasellus consectetur vel quam sed commodo. Nullam cursus
          porttitor sodales. Praesent augue sapien, scelerisque a purus at,
          ullamcorper posuere mauris. Nullam dapibus mollis imperdiet.
          Pellentesque non erat non augue porta vestibulum sed quis purus.
          <br></br>
          <br></br>
          Vestibulum vestibulum ante mi, id porta tellus commodo sit amet.
          Mauris cursus ullamcorper ipsum, eu consequat libero feugiat porta.
          Duis cursus arcu id magna bibendum faucibus. Praesent ac lorem quis
          augue viverra lobortis non vitae felis. Donec laoreet ultricies quam
          nec lobortis. Aenean at urna porta, varius nisi non, pulvinar massa.
          Fusce eu cursus leo. Mauris rhoncus venenatis ligula, ac blandit enim
          vulputate aliquet.
          <br></br>
          <br></br>
          Integer fringilla lacus non augue mollis, vel bibendum dui viverra.
          Donec vestibulum justo non purus lacinia efficitur. Nunc eu diam eu
          augue scelerisque commodo. Vestibulum pharetra viverra massa sit amet
          tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Suspendisse quis fringilla augue.
          Donec malesuada ipsum enim, eu maximus metus faucibus et.
        </p>
      </Container>
    </section>
  );
}
