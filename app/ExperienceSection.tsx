import {
  BrandingAndServices,
  DigitalMarketing,
  Ecommerce,
  WebDev,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    img: WebDev,
    text: "Web Design & Development",
    href: "/",
  },
  {
    img: DigitalMarketing,
    text: "Digital Marketing",
    href: "/",
  },
  {
    img: Ecommerce,
    text: "E-Commerce",
    href: "/",
  },
  {
    img: BrandingAndServices,
    text: "Branding & Creative Services",
    href: "/",
  },
];
const ExperienceSection = () => {
  return (
    <>
      <section id="expertiesSection" className="my-40 mx-3">
        <div>
          <h2 className="text-center text-3xl sm:text-4xl mb-12 sm:mb-16">
            Our expertise
          </h2>
          <p className="max-w-4xl mx-auto text-center text-lg sm:text-xl text-[#a1a4a5] leading-relaxed mb-16">
            Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac
            volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula
            at, molestie dolor.
          </p>
          {/* cards */}
          <div className="grid mx-10 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <>
                <Link href={card.href}>
                  <div className="mb-10">
                    <Image
                      className="aspect-square object-cover rounded-tl-[2rem] rounded-br-[2rem] hover:saturate-50 hover:brightness-125 hover:contrast-125 transition-all duration-500"
                      width={670}
                      height={670}
                      src={card.img}
                      alt=""
                    />
                  </div>
                  <p className="text-2xl mb-4 hover:text-primary transition-colors duration-300">
                    {card.text}
                  </p>
                  <button
                    className="uppercase text-sm tracking-widest font-medium text-purple-600 hover:text-purple-400 transition-colors duration-300"
                    type="button"
                  >
                    Learn More <span className="text-lg">&#8594;</span>
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

export default ExperienceSection;

const Card = () => {
  return <></>;
};
