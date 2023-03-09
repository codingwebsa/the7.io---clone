import { Case1, Case2, Case3, Case4, Case5, Case6 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cards = [
  {
    img: Case1,
    text: "Neon Lights",
    subtitle: "DIGITAL MARKETING",
    href: "/",
  },
  {
    img: Case2,
    text: "Futuristic Furniture",
    subtitle: "WEBSITES",
    href: "/",
  },
  {
    img: Case3,
    text: "Smart Living",
    subtitle: "WEBSITES",
    href: "/",
  },
  {
    img: Case4,
    text: "Light Painting",
    subtitle: "BRANDING",
    href: "/",
  },
  {
    img: Case5,
    text: "Ideabox",
    subtitle: "BRANDING",
    href: "/",
  },
  {
    img: Case6,
    text: "VR Experience",
    subtitle: "WEBSITES",
    href: "/",
  },
];

const CaseSection = () => {
  return (
    <>
      <section id="casesSection" className="my-40 mx-3">
        <div>
          <h2 className="text-center text-3xl sm:text-4xl mb-12 sm:mb-16">
            Selected cases
          </h2>
          {/* cards */}
          <div className="grid mx-10 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <>
                <Link href={card.href}>
                  <div className="mb-10">
                    <Image
                      className="aspect-square object-cover rounded-tl-[2rem] rounded-br-[2rem] hover:saturate-50 hover:brightness-125 hover:contrast-125 transition-all duration-500"
                      width={720}
                      height={720}
                      src={card.img}
                      alt=""
                    />
                  </div>
                  <p className="text-2xl mb-4 hover:text-primary transition-colors duration-300">
                    {card.text}
                  </p>
                  <button
                    className="uppercase text-sm tracking-widest font-medium text-stone-500"
                    type="button"
                  >
                    {card.subtitle}
                  </button>
                </Link>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseSection;
