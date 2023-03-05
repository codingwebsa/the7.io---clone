"use client";

import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import "@/styles/navbar.css";
import Sidebar from "./Sidebar";
import clsx from "clsx";
import { useMemo, useState } from "react";

const links = [
  {
    text: "Home",
    href: "/",
    activate: true,
  },
  {
    text: "Agency",
    href: "/",
    activate: false,
  },
  {
    text: "Team",
    href: "/",
    activate: false,
  },
  {
    text: "Services",
    href: "/",
    activate: false,
    hasSublinks: true,
  },
  {
    text: "Showcase",
    href: "/",
    activate: false,
    hasSublinks: true,
  },
  {
    text: "Blog",
    href: "/",
    activate: false,
    hasSublinks: true,
  },
  {
    text: "Contact",
    href: "/",
    activate: false,
  },
];

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);

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
          "sticky top-0 h-[100px] flex items-center gap-2 border-b border-white/20 px-10 transition-all duration-500 z-[var(--navbar-index)]",
          {
            "bg-ancent h-[70px]": !atTop,
          }
        )}
      >
        {/* left side */}
        <div>
          <span className="max-w-fit">
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
          </span>
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
                  <Link
                    href={link.href}
                    className="nav-link relative font-semibold hover:text-primary transition-all duration-200"
                  >
                    {link.text}
                  </Link>
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
          {useMemo(
            () => (
              <Sidebar />
            ),
            []
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
