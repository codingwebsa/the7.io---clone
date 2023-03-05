import { Navbar } from "@/components";
import DetailSection from "./DetailSection";
import HeroSection from "./HeroSection";
import "@/styles/Header.css";

const HomePage = () => {
  return (
    <>
      <header className="custom-hero relative">
        <Navbar />
        <HeroSection />
        {/* bottom gradiant effect */}
        <div className="custom-bottom-gradiant"></div>
      </header>
      {/* <DetailSection /> */}
    </>
  );
};

export default HomePage;
