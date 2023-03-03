import { Logo } from "@/assets";
import { MenuIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="relative h-[100px] flex items-center gap-2 border-b border-white/20 px-10 z-[var(--navbar-index)]">
        {/* left side */}
        <div>
          <span className="max-w-fit">
            <Image
              src={Logo}
              className="h-8 w-auto object-contain max-w-fit"
              alt="The7 Logo"
            />
          </span>
        </div>
        {/* right side */}
        <div className="flex-1 justify-end flex">
          {/* navbar, only visible in large screen */}
          <nav className="hidden lg:flex">
            <ul className="flex gap-7 font-thin items-center">
              <Link
                href="/"
                className="nav-link relative font-semibold hover:text-primary transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/"
                className="nav-link relative font-semibold hover:text-primary transition-all duration-200"
              >
                Agency
              </Link>
              <Link
                href="/"
                className="nav-link relative font-semibold hover:text-primary transition-all duration-200"
              >
                Team
              </Link>
              <Link
                href="/"
                className="nav-link relative font-semibold hover:text-primary transition-all duration-200"
              >
                Services
              </Link>
              <Link
                href="/"
                className="nav-link relative font-semibold hover:text-primary transition-all duration-200"
              >
                Showcase
              </Link>
              <Link
                href="/"
                className="nav-link relative font-semibold hover:text-primary transition-all duration-200"
              >
                Blog
              </Link>
              <Link
                href="/"
                className="nav-link relative font-semibold hover:text-primary transition-all duration-200"
              >
                Contact
              </Link>
              <button className="bg-primary text-black text-sm mr-2 font-medium px-6 py-3 rounded-full hover:brightness-110">
                Book a consultation
              </button>
            </ul>
          </nav>
          {/* menu icon, only visible in small screen */}
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Navbar;
