"use client";

import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import "@/styles/navbar.css";
import Sidebar from "./Sidebar";
import clsx from "clsx";
import { useState } from "react";

const links = [
  {
    text: "Home",
    href: "#heroSection",
  },
  {
    text: "Agency",
    href: "#detailsSec",
  },
  {
    text: "Team",
    href: "#sponserSection",
  },
  {
    text: "Services",
    href: "#expertiesSection",
    hasSublinks: true,
  },
  {
    text: "Showcase",
    href: "#casesSection",
    hasSublinks: true,
  },
  {
    text: "Blog",
    href: "#blogSection",
    hasSublinks: true,
  },
  {
    text: "Contact",
    href: "#footerSection",
  },
];

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [active, setActive] = useState("Home");

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        if (atTop) setAtTop(false);
      }
      if (window.scrollY == 0) setAtTop(true);
    });
  }
  return (
    <>
      <div
        className={clsx(
          "fixed top-0 w-full h-[100px] flex items-center gap-2 border-b border-white/20 px-10 transition-all duration-500 z-[var(--navbar-index)]",
          {
            "bg-ancent h-[70px]": !atTop,
          }
        )}
      >
        {/* left side */}
        <div>
          <Link href="/" className="max-w-fit">
            <Image
              src={Logo}
              className={clsx(
                "h-8 w-auto object-contain max-w-fit transition-all duration-500",
                {
                  "h-6": !atTop,
                }
              )}
              alt="The7 Logo"
            />
          </Link>
        </div>
        {/* right side */}
        <div className="flex-1 justify-end flex">
          {/* navbar, only visible in large screen */}
          <nav className="hidden lg:flex">
            <ul
              className={clsx("flex gap-7 font-thin items-center", {
                "text-sm": !atTop,
              })}
            >
              {links.map((link) => (
                <>
                  <a
                    href={link.href}
                    onClick={() => setActive(link.text)}
                    className={clsx(
                      "nav-link relative font-medium hover:text-primary transition-all duration-200",
                      {
                        "active text-primary": link.text === active,
                      }
                    )}
                  >
                    {link.text}
                  </a>
                </>
              ))}

              <button
                className={clsx(
                  "bg-primary text-black text-sm mr-2 font-medium px-6 py-3 rounded-full transition-all duration-500 hover:brightness-110",
                  {
                    "px-4 py-2.5": !atTop,
                  }
                )}
              >
                Book a consultation
              </button>
            </ul>
          </nav>
          {/* menu icon, only visible in small screen */}
          <Sidebar active={active} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
