"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "../common/container";

import img1 from "@/public/images/test1.png";
import img2 from "@/public/images/test2.png";
import img3 from "@/public/images/test3.png";
import img4 from "@/public/images/test4.png";
import img5 from "@/public/images/test5.png";
import TestimonialCard from "../common/testimonial-card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// each column gets a different parallax range -> different speed
const COLUMN_RANGES: [number, number][] = [
  [60, -160], // col 0: medium speed, upward
  [-30, 90], // col 1: opposite direction, slower
  [140, -220], // col 2: fastest, upward
];

export default function Testimonial() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // smooth out the raw scroll progress so parallax feels buttery, not jittery
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const testimonials = [
    {
      image: img1,
      name: "Tony S.",
      review: `“Amazing look and quality!The dress is beautiful. It fits perfect and is excellent quality.”`,
    },
    {
      image: img2,
      name: "Sarah M.",
      review: `“Beautiful piece! The fit is perfect and the quality feels exceptional in every way.”`,
    },
    {
      image: img3,
      name: "Juniper",
      review: `“Beautiful piece! The fit is perfect and the quality feels exceptional in every way.”`,
    },
    {
      image: img4,
      name: "Chloe M.",
      review: `“Such great quality! Fits beautifully and looks stunning for any occasion.”`,
    },
    {
      image: img5,
      name: "Amanda B.",
      review: `“Love this outfit! Great material, flattering shape, and even better than expected.”`,
    },
    {
      image: img1,
      name: "Brian S.",
      review: `“Gorgeous design and top-notch quality. This quickly became my new favorite.”`,
    },
    {
      image: img2,
      name: "Dylan P.",
      review: `“The fit is amazing and the material feels premium. Highly recommend this style!”`,
    },
    {
      image: img3,
      name: "Lena M.",
      review: `“The top is soft, fits perfectly, and looks even better in person. Excellent quality throughout.”`,
    },
  ];

  // distribute testimonials into 3 columns (round-robin)
  const columns: (typeof testimonials)[] = [[], [], []];
  testimonials.forEach((t, i) => {
    columns[i % 3].push(t);
  });

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1.5,
      spacing: 10,
    },
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-32! md:py-48 bg-[#e5e1f7]  "
    >
      <Container>
        {/* Heading */}
        <div className="md:sticky top-1/2 -translate-y-1/2   ">
          <div className="relative text-center mx-auto mb-16 md:mb-24     ">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold tracking-wide text-gray-900 mb-4"
            >
              WHAT CUSTOMERS SAY
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold max-w-140 mx-auto  text-gray-900 leading-tight"
            >
              Over 500 Happy Reviews
            </motion.h2>
          </div>
        </div>

        {/* Parallax columns */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, colIndex) => (
            <ParallaxColumn
              key={colIndex}
              testimonials={col}
              progress={smoothProgress}
              range={COLUMN_RANGES[colIndex]}
              // middle column visually offset down so it doesn't align in a flat row
              offsetClass={colIndex === 1 ? "md:mt-20" : ""}
            />
          ))}
        </div>

        {/* Mobile slider */}
        <div ref={sliderRef} className="keen-slider md:hidden!  ">
          {testimonials.map((t, index) => (
            <div
              className={`keen-slider__slide number-slide${index + 1}`}
              key={index}
            >
              <TestimonialCard 
                image={t.image}
                name={t.name}
                review={t.review}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ParallaxColumn({
  testimonials,
  progress,
  range,
  offsetClass = "",
}: {
  testimonials: {
    image: any;
    name: string;
    review: string;
  }[];
  progress: ReturnType<typeof useSpring>;
  range: [number, number];
  offsetClass?: string;
}) {
  const y = useTransform(progress, [0, 1], range);

  return (
    <motion.div
      style={{ y }}
      className={`flex flex-col gap-8 gap-y-50 ${offsetClass}`}
    >
      {testimonials.map((t, i) => (
        <TestimonialCard
          key={i}
          image={t.image}
          name={t.name}
          review={t.review}
        />
      ))}
    </motion.div>
  );
}
