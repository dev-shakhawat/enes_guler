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

export default function DiscoverDetails() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* left : static image + badges, no animation */}
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
            {/* "Soft" badge - scalloped pink sticker via clip-path */}
            <div className="absolute top-8 left-2 -rotate-12">
              <svg
                width="96"
                height="96"
                viewBox="0 0 100 100"
                className="drop-shadow-md"
              >
                <path
                  fill="#FBCFE8"
                  d="
        M50 4
        C56 4 58 10 63 11
        C69 12 73 8 77 12
        C81 16 79 22 84 25
        C89 29 95 29 96 35
        C97 41 92 45 93 50
        C92 55 97 59 96 65
        C95 71 89 71 84 75
        C79 78 81 84 77 88
        C73 92 69 88 63 89
        C58 90 56 96 50 96
        C44 96 42 90 37 89
        C31 88 27 92 23 88
        C19 84 21 78 16 75
        C11 71 5 71 4 65
        C3 59 8 55 7 50
        C8 45 3 41 4 35
        C5 29 11 29 16 25
        C21 22 19 16 23 12
        C27 8 31 12 37 11
        C42 10 44 4 50 4
        Z
      "
                />

                <text
                  x="50"
                  y="56"
                  textAnchor="middle"
                  fontSize="20"
                  fontWeight="700"
                  fill="#1F2937"
                >
                  Soft
                </text>
              </svg>
            </div>

            {/* "Playful" badge */}
            <div className="absolute bottom-6 right-0 w-28 h-28 rounded-full bg-[#BDE6EE] grid place-items-center -rotate-20 shadow-sm">
              <span className="font-semibold text-gray-800 text-lg rotate-3">
                Smooth
              </span>
            </div>
          </div>

          {/* right: animated text content */}
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
              className="text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Made from cozy cotton fabric
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-600 leading-relaxed mb-8 max-w-md"
            >
              Made entirely of oak, the Bow Chair is comfortable, visually
              pleasing and brimming with character.  The moulded plywood seat is
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
                Discover Details
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
        </div>
      </Container>
    </section>
  );
}
