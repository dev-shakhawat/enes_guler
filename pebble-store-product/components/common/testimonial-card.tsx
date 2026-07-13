"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type TestimonialCardProps = {
  image: StaticImageData | string;
  name: string;
  review: string;
  className?: string;
};

export default function TestimonialCard({
  image,
  name,
  review,
  className = "",
}: TestimonialCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={`max-w-71.25 rounded-[28px] bg-white p-4 shadow-sm ${className}`}
    >
      <div className="overflow-hidden rounded-3xl">
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="relative aspect-square"
        >
          <Image src={image} alt={name} fill className="object-cover" />
        </motion.div>
      </div>

      <div className="mt-5 space-y-4">
        <p className="text-base leading-8 text-neutral-600 line-clamp-3 ">"{review}"</p>

        <h4 className="text-xl font-bold text-neutral-900">{name}</h4>
      </div>
    </motion.article>
  );
}