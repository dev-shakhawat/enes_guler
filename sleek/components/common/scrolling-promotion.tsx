"use client";

import Marquee from "react-fast-marquee";

const items = [
  "NON-IRRITATING",
  "NO ANIMAL TESTING",
  "FREE SHIPPING ON ALL U.S. ORDERS $200+",
  "100% CLEAN, NON-IRRITATING",
  "NO ANIMAL TESTING",
  "FREE SHIPPING ON ALL U.S. ORDERS $200+",
];

export default function ScrollingPromotionTop() {
  return (
    <div className="bg-black py-3">
      <Marquee
        speed={80}
        gradient={false}
        autoFill
        pauseOnHover
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="mx-14 text-xs font-semibold tracking-wide whitespace-nowrap text-white uppercase"
          >
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  );
}