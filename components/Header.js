import { Container, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  let location = router.pathname;
  
  return (
    <header className="">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <h1>Construction Company</h1>
          </Navbar.Brand>
          <h5>Building futures, together</h5>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <br></br>
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav
              className=" justify-content-between "
              style={{ width: "30vw" }}
              activeKey={location}
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about" className="d-flex align-items-center ">
                <CgProfile /> &nbsp; About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
