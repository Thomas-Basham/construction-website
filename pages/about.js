import { Row, Col, Container } from "react-bootstrap";
import BgImageSection from "../components/about/BgImageSection";
import AboutText from "../components/about/AboutText";
import AboutSection from '../components/about/AboutSection'
import ParagraphSection from "../components/about/ParagraphSection";
export default function AboutPage() {
  return (
    <>
    <BgImageSection/>
    <AboutText/>
    <AboutSection/>
    <ParagraphSection/>
    </>
  );
}
