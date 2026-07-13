"use client";

import Marquee from "react-fast-marquee";

const items: string[] = [
  "PEBBLE",
  "Comfort Products",
  "PEBBLE",
  "Organic Cotton",
  "PEBBLE",
  "Safety for Skin",
  "PEBBLE",
  "Premium Quality",
];

export default function MarqueeSection() {
  return (
    <section className="mt-10 overflow-hidden bg-[#F6FB63] py-3 md:mt-16 md:py-4 lg:mt-20 lg:py-5">
      <Marquee
        autoFill
        speed={60}
        gradient={false}
        pauseOnHover
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="mx-5 flex items-center gap-5 whitespace-nowrap md:mx-8 md:gap-8 lg:mx-10 lg:gap-10"
          >
            <span
              className={`text-black ${
                item === "PEBBLE"
                  ? "text-2xl font-black uppercase sm:text-3xl md:text-4xl lg:text-5xl"
                  : "text-sm font-semibold sm:text-base md:text-lg lg:text-xl"
              }`}
            >
              {item}
            </span>

            <span className="text-lg font-black text-black sm:text-xl md:text-2xl lg:text-3xl">
              •
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}