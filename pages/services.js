import ProcessSection from "../components/index/ProcessSection";
import QualitySection from "../components/index/QualitySection";
import AboutSection from "../components/about/AboutSection";
export default function servicesPage() {
  return (
    <>
      <div>
        <QualitySection />
        <AboutSection />
        <ProcessSection />
        <QualitySection />
      </div>
    </>
  );
}
