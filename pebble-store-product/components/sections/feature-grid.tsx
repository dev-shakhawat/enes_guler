"use client";

import Container from "../common/container";
import {
  LuPackage,
  LuUndo2,
  LuCreditCard,
  LuMessageCircle,
} from "react-icons/lu";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const services = [
  {
    icon: LuPackage,
    title: "Free delivery",
    description: "In most US countries from $100",
  },
  {
    icon: LuUndo2,
    title: "Free returns",
    description: "Up to 30 days to return your items.",
  },
  {
    icon: LuCreditCard,
    title: "Payment 100% secured",
    description: "Multiple payment options offered.",
  },
  {
    icon: LuMessageCircle,
    title: "Customer service",
    description: "Monday-Friday: 9AM-4PM",
  },
];

export default function FeaturesGrid() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1.5,
      spacing: 15,
    },
  });

  return (
    <section className="pb-14 md:pb-24  ">
      <Container>
        <div className="hidden md:grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-bold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-60 text-lg leading-8 text-neutral-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div ref={sliderRef} className="keen-slider md:hidden!  ">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                className={`keen-slider__slide number-slide${index + 1}`}
                key={index}
              >
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-60 text-lg leading-8 text-neutral-500">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
