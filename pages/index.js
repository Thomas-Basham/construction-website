import Image from "next/image";
import orangeCouch from "/public/stock/orange-couch.jpg";

import IntroSection from "../components/index/IntroSection";
import BgImageSection from "../components/index/BgImageSection";
import ProcessSection from "../components/index/ProcessSection";
import QualitySection from "../components/index/QualitySection";
import PartialAboutSection from "../components/index/PartialAboutSection";
import PartialContactSection from "../components/index/PartialContactSection";

export default function Home() {
  return (
    <>
      <Image
        alt="house with orange couch"
        objectFit="cover"
        layout="fill"
        src={orangeCouch}
      />
      <div>
        <IntroSection />
        <BgImageSection />
        <ProcessSection />
        <QualitySection />
        <PartialAboutSection />
        <PartialContactSection />
      </div>
    </>
  );
}
