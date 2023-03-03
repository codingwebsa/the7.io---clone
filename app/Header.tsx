import "./Header.css";
import HeroSection from "./HeroSection";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="custom-hero relative">
        {children}
        <HeroSection />
        {/* bottom gradiant effect */}
        <div className="custom-bottom-gradiant"></div>
      </header>
    </>
  );
};

export default Header;
