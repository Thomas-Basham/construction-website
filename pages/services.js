import Image from "next/image";
import orangeCouch from "/public/stock/orange-couch.jpg";

import IntroSection from "../components/index/IntroSection";
import BgImageSection from "../components/index/BgImageSection";
import ProcessSection from "../components/index/ProcessSection";
import QualitySection from "../components/index/QualitySection";
import PartialAboutSection from "../components/index/PartialAboutSection";
import PartialContactSection from "../components/index/PartialContactSection";
import AboutSection from "../components/about/AboutSection";
export default function servicesPage() {
  return (
    <>

      <div>

        <QualitySection />        
        <AboutSection/>
        <ProcessSection />
        <QualitySection />        
      </div>
    </>
  );
}
