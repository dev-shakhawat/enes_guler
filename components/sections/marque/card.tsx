"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export default function MarqueeCard({
  title,
  subtitle,
  image,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        rotate: 1,
      }}
      transition={{
        duration: .35,
      }}
      className="    group
    relative
    h-[220px]
    w-[170px]
    sm:h-[280px]
    sm:w-[220px]
    lg:h-[340px]
    lg:w-[280px]
    flex-shrink-0
    overflow-hidden
    rounded-[20px]
    sm:rounded-[30px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <motion.div
        initial={{ y: 20, opacity: .7 }}
        whileHover={{
          y: 0,
          opacity: 1,
        }}
        className="absolute bottom-6 left-6"
      >
        <p className="text-sm text-white/70">
          {subtitle}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {title}
        </h3>
      </motion.div>

      <div className="absolute right-5 top-5 rounded-full bg-white/20 px-4 py-2 text-xs text-white backdrop-blur-md">
        NEW
      </div>
    </motion.div>
  );
}