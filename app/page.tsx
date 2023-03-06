import DetailSection from "./DetailSection";
import HeroSection from "./HeroSection";
import "@/styles/Header.css";
import ExperienceSection from "./ExperienceSection";
import CallbackSection from "./CallbackSection";
import CaseSection from "./CaseSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DetailSection />
      <ExperienceSection />
      {/* TODO: not completed */}
      <CallbackSection />
      <CaseSection />
    </>
  );
};

export default HomePage;
