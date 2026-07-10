"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import MarqueeCard from "./card";

export default function ImageMarquee() {
  const marqueeItems = [
    {
      title: "Nike Air Jordan",
      subtitle: "Premium Sneakers",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    },
    {
      title: "Apple Watch",
      subtitle: "Luxury Smart Watch",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    },
    {
      title: "Leather Bag",
      subtitle: "New Collection",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
    },
    {
      title: "Modern Chair",
      subtitle: "Home Decor",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    },
    {
      title: "Headphones",
      subtitle: "Studio Quality",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/15 blur-[120px] sm:h-[500px] sm:w-[900px] sm:blur-[180px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10 px-5 text-center sm:mb-16"
      >
        <p className="font-dancing-script text-sm uppercase tracking-[4px] text-black sm:text-base sm:tracking-[6px]">
          Trending Collection
        </p>

        <h2 className="mt-3 text-3xl font-bold text-black sm:text-5xl lg:text-6xl">
          Discover What's New
        </h2>
      </motion.div>

      {/* First Row */}
      <Marquee
        autoFill
        speed={40}
        pauseOnHover
        gradient={false}
      >
        <div className="flex items-center gap-4 sm:gap-6">
          {marqueeItems.map((item, i) => (
            <MarqueeCard key={i} {...item} />
          ))}
        </div>
      </Marquee>

      {/* Second Row */}
      <div className="mt-5 sm:mt-8">
        <Marquee
          autoFill
          direction="right"
          speed={32}
          pauseOnHover
          gradient={false}
        >
          <div className="flex items-center gap-4 sm:gap-6">
            {marqueeItems.map((item, i) => (
              <MarqueeCard key={i} {...item} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}