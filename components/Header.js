import { Container, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { RiToolsFill, RiTrophyLine } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import logo from "/public/logo.png";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  let location = router.pathname;

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container fluid style={{ width: "50vw" }}>
          <Navbar.Brand href="/">
            <Image alt="logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav
              className=" justify-content-between "
              style={{ width: "100%" }}
              activeKey={location}
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about" className="d-flex align-items-center ">
                <BsInfoCircle /> &nbsp; About
              </Nav.Link>
              <Nav.Link href="/projects" className="d-flex align-items-center ">
                <RiTrophyLine /> &nbsp; Projects
              </Nav.Link>
              <Nav.Link href="/services" className="d-flex align-items-center ">
                <RiToolsFill /> &nbsp; Services
              </Nav.Link>
              <Nav.Link href="/contact" className="d-flex align-items-center ">
                <CgProfile /> &nbsp; Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
