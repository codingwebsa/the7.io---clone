"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Logo } from "@/assets";

const HeroSection = () => {
  return (
    <>
      <div className="h-[100vh] pb-20 flex items-center justify-center">
        <div className="flex items-center flex-col">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={Logo}
              className="h-10 sm:h-12 w-auto mb-7"
              alt="hero-section-logo"
            />
          </motion.span>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center text-4xl sm:text-6xl leading-tight font-bold"
          >
            WE BUILD DIGITAL <br /> EXPERIENCES
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-baseline font-normal mt-12 sm:tracking-wider text-sm sm:text-xl"
          >
            <p>WEBSITES</p>
            <span className="h-2 w-2 bg-primary rounded-full mx-2 sm:mx-4"></span>
            <p>BRANDING</p>
            <span className="h-2 w-2 bg-primary rounded-full mx-2 sm:mx-4"></span>
            <p>DIGITAL MARKETING</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
