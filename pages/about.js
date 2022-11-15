import { Row, Col, Container } from "react-bootstrap";
import BgImageSection from "../components/about/BgImageSection";
import AboutText from "../components/about/aboutText";
import AboutSection from '../components/about/AboutSection'
export default function AboutPage() {
  return (
    <>
    <BgImageSection/>
    <AboutText/>
    <AboutSection/>
    </>
  );
}
