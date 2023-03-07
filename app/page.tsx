import DetailSection from "./DetailSection";
import HeroSection from "./HeroSection";
import "@/styles/Header.css";
import ExperienceSection from "./ExperienceSection";
import CallbackSection from "./CallbackSection";
import CaseSection from "./CaseSection";
import SponserSection from "./SponserSection";
import LatestArticales from "./LatestArticales";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DetailSection />
      <ExperienceSection />
      {/* TODO: not completed */}
      <CallbackSection />
      <CaseSection />
      <SponserSection />
      <LatestArticales />
    </>
  );
};

export default HomePage;
