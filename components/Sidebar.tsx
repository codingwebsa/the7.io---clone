"use client";

import { Logo } from "@/assets";
import { CloseIcon, MenuIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

// const sidebarItem = {
//   initial: { opacity: 0, x: 30 },
//   animate: { opacity: 1, x: 0 },
// };
const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

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

const Sidebar = () => {
  const [opened, setOpened] = useState(false);
  console.log("render");
  return (
    <>
      <div className="flex lg:hidden">
        <span className="cursor-pointer" onClick={() => setOpened(true)}>
          <MenuIcon size={30} />
        </span>
      </div>
      {opened && (
        <>
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 bottom-0 right-0 bg-ancent w-full max-w-md overflow-x-hidden overflow-y-auto lg:hidden z-[var(--sidebar-index)]"
          >
            {/* close button */}
            <span
              className="absolute top-6 right-6 cursor-pointer"
              onClick={() => setOpened(false)}
            >
              <CloseIcon size={33} />
            </span>
            {/* content */}
            <div className="pt-24 px-2 pl-10 flex flex-col">
              {/* logo */}
              <div>
                <Link href="/">
                  <Image
                    src={Logo}
                    className="h-10 w-auto"
                    alt="sidebar the7 logo"
                  />
                </Link>
              </div>
              <motion.nav className="mt-6 flex flex-col text-2xl gap-5 pb-16">
                {links.map((link, index) => (
                  <>
                    <motion.div
                      key={index}
                      variants={item}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={link.href}
                        className={clsx("flex items-center gap-2", {
                          "text-primary": link.activate,
                        })}
                      >
                        {link.text}{" "}
                        {link.hasSublinks && (
                          <span className="text-stone-400 text-3xl inline-block">
                            +
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  </>
                ))}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="bg-primary w-fit mt-6 text-black text-sm mr-2 font-medium px-6 py-3 rounded-full hover:brightness-110"
                >
                  Book a consultation
                </motion.button>
              </motion.nav>
            </div>
          </motion.aside>
        </>
      )}
    </>
  );
};

export default Sidebar;
