import { Article1, Article2, Article3, Article4 } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    img: Article1,
    text: "Ligula vel urna accumsan placerat",
    subtitle: "TIPS & TRICKS / JANUARY 12, 2022",
    href: "/",
  },
  {
    img: Article2,
    text: "Don’t underestimate the lorem ipsum dolor amet",
    subtitle: "INDUSTRY / OCTOBER 20, 2020",
    href: "/",
  },
  {
    img: Article3,
    text: "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
    subtitle: "TIPS & TRICKS / OCTOBER 9, 2020",
    href: "/",
  },
  {
    img: Article4,
    text: "What eleifend posuere tincidunt",
    subtitle: "EVENTS / OCTOBER 8, 2020",
    href: "/",
  },
];

const LatestArticales = () => {
  return (
    <>
      <section>
        <h2 className="text-center text-3xl sm:text-4xl mb-12 sm:mb-16">
          Latest news & articles
        </h2>
        <div className="grid mx-10 gap-12 lg:grid-cols-2">
          {cards.map((card) => (
            <>
              <Link href={card.href} className="sm:flex gap-10 items-center">
                <div className="mb-10">
                  <Image
                    className="aspect-square object-cover sm:max-h-[200px] sm:max-w-[200px] rounded-tl-[2rem] rounded-br-[2rem] transition-all duration-500"
                    width={720}
                    height={720}
                    src={card.img}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-2xl mb-4 hover:text-primary transition-colors duration-300">
                    {card.text}
                  </p>
                  <p className="uppercase text-sm tracking-widest font-medium text-stone-500">
                    {card.subtitle}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>
        <div className="m-10 flex justify-end">
          <Link
            href="/"
            className="uppercase text-purple-600 hover:text-purple-500 transition-colors duration-300"
          >
            Visit our blog &#10142;
          </Link>
        </div>
      </section>
    </>
  );
};

export default LatestArticales;
