import IntroSection from "../components/index/IntroSection";
import BgImageSection from "../components/index/BgImageSection";
import ProcessSection from "../components/index/ProcessSection";
import QualitySection from "../components/index/QualitySection";
import PartialAboutSection from "../components/index/PartialAboutSection";
import PartialContactSection from "../components/index/PartialContactSection";
import FullScreenImageSection from "../components/index/FullScreenImageSection";
export default function Home() {
  return (
    <>
      <div>
        <FullScreenImageSection />
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
