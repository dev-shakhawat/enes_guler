"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import Container from "../common/container";
import confortImage from "@/public/images/confortImage.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ComfortableChairSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: animated text content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p
              variants={item}
              className="text-sm font-bold tracking-wide text-gray-900 mb-4"
            >
              SUPER COMFORTABLE
            </motion.p>

            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl  lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Ruffled hems with eyelet details.
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-600 leading-relaxed mb-8 max-w-md"
            >
              Made entirely of oak, the Bow Chair is comfortable, visually
              pleasing and brimming with character. The moulded plywood seat is
              unusually wide in proportion to its depth and a waterfall edge at
              the front softens contact with the hamstrings.
            </motion.p>

            <div
              className="
                    group
                    relative mt-8
                    flex w-fit cursor-pointer items-center gap-5
                    overflow-hidden
                    rounded-full 
                    border border-black/10
                    bg-black/60
                    px-4 py-3
                    text-white
                    after:absolute
                    after:right-2
                    after:top-1/2
                    after:h-8
                    after:w-8
                    after:-translate-y-1/2
                    after:rounded-full
                    after:bg-white
                    after:content-['']
                    after:transition-transform
                    after:duration-600
                    after:ease-out
                    after:origin-center
                    after:z-0
                    hover:after:scale-[15]
                "
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Continue Shopping
              </span>
              {/* Arrow marquee wrapper */}
              <div className="relative z-10 h-4 w-4 overflow-hidden">
                <div className="flex items-center gap-2 group-hover:animate-marquee">
                  <IoIosArrowForward className="shrink-0 text-black/60" />
                  <IoIosArrowForward className="shrink-0 text-black/60" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: static image + badges, no animation */}
          <div className="relative w-full aspect-square max-w-125 mx-auto">
            {/* big circle */}
            <div className="absolute inset-0 rounded-full bg-gray-200 grid place-items-center overflow-hidden  ">
              <div className="w-full h-full    rounded-md grid place-items-center">
                <Image
                  src={confortImage}
                  alt="Product placeholder"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            {/* "Wow" badge */}
            <div className="absolute top-8 left-2 w-24 h-16 rounded-[50%] bg-sky-100 grid place-items-center -rotate-12 shadow-sm">
              <span className="font-semibold text-gray-800 text-lg -rotate-6">
                Wow
              </span>
            </div>

            {/* "Playful" badge */}
            <div className="absolute bottom-6 right-0 w-28 h-20 rounded-[50%] bg-yellow-200 grid place-items-center rotate-6 shadow-sm">
              <span className="font-semibold text-gray-800 text-lg rotate-3">
                Playful
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
