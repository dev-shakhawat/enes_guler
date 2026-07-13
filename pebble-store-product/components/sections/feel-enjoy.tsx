"use client";
import demoImage from "@/public/images/product1.png";
import FeelEnjoyCard from "../common/feel-enjoy-card";
import { StaticImageData } from "next/image";
import Container from "../common/container";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; 

export default function FeelEnjoy() {
  const features: { title: string; image: string | StaticImageData }[] = [
    {
      title: "Fluffy, comfy shorts",
      image: demoImage,
    },
    {
      title: "Elastic waistband for a comfortable",
      image: demoImage,
    },
    {
      title: "Playful ruffled hems for a fun touch",
      image: demoImage,
    },
  ];

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1.5,
      spacing: 15,
    },
  });

  return (
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-10 pt-20 text-center text-4xl font-bold md:text-5xl"
      >
        Feel good & enjoy every day
      </motion.h2>

      <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <FeelEnjoyCard
            key={index}
            index={index}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>

      <div ref={sliderRef} className="keen-slider md:hidden!  ">
        {features.map((item, index) => (
          <div className={`keen-slider__slide number-slide${index + 1}`} key={index}>
            <FeelEnjoyCard 
              index={index}
              title={item.title}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
