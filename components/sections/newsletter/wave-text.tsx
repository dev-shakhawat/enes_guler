"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
}

export default function WaveText({ text }: Props) {
  const letters = text.split("");

  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="font-bold leading-tight"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              y: 30,
              opacity: 0,
            },
            visible: {
              y: [0, -18, 0, -10, 0],
              opacity: 1,
              transition: {
                delay: index * 0.04,
                duration: 1.6,
                ease: "easeInOut",
              },
            },
          }}
          className="inline-block font-oswald text-4xl text-white   "
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}