"use client"

import Marquee from "react-fast-marquee"

const items = [
  "Beauty in simplicity.",
  "For all skin types",
  "Glow with confidence",
  "Clean beauty",
  "Cruelty Free",
  "100% Organic",
]

export default function ScrollingPromotion({}: {}) {
  return (
    <section className="overflow-hidden bg-[#F8EEEC] py-6">
      <Marquee speed={60} gradient={false} autoFill>
        {items.map((item, index) => (
          <div key={index} className="mx-10 flex items-center gap-10">
            <span className="h-px w-14 bg-black/70" />

            <h3 className="text-[28px] leading-none font-medium whitespace-nowrap">
              {item}
            </h3>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
