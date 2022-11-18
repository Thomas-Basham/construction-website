import { Container } from "react-bootstrap";

export default function FullScreenImageSection() {
  return (
    <section className="full-screen-image-section">
      <Container fluid style={{ width: "50%", paddingTop: "10%" }}>
        <div className="display-3 text-white cover-text">
          Amet mauris commodo quis.
          <br></br>
          Enim nulla aliquet. porttitor lacus. Adipiscin.
        </div>
      </Container>
    </section>
  );
}
