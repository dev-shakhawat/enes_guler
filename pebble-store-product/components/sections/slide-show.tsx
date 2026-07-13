"use client";
import { TProductSlideShow } from "@/types";
import Container from "../common/container";
import { useEffect, useState } from "react";
import Image from "next/image";
import product1 from "@/public/images/product1.png";
import product2 from "@/public/images/product2.jpg";
import product3 from "@/public/images/product3.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_DURATION = 4; // seconds

export default function SlideShow({}: {}) {
  const slidesData: TProductSlideShow[] = [
    {
      id: 1,
      description:
        "Made from a soft, eco-friendly blend of organic cotton and recycled polyester.",
      title: "1. Made from a soft",
      image: product1,
    },
    {
      id: 2,
      description:
        "Combines gentle textures with everyday durability for lasting comfort.",
      title: "2. Softness and Practicality",
      image: product2,
    },
    {
      id: 3,
      description:
        "Offers effortless comfort with a laid-back silhouette that feels inviting.",
      title: "3. The relaxed fit and cozy feel",
      image: product3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  // increments every time a full cycle completes (helps force-remount bars on loop)
  const [loopCount, setLoopCount] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === slidesData.length - 1) {
          setLoopCount((c) => c + 1);
          return 0;
        }
        return prevSlide + 1;
      });
    }, SLIDE_DURATION * 1000);

    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

const goToSlide = (index: number) => {
  const nextIndex = (index + slidesData.length) % slidesData.length;

  setCurrentSlide(nextIndex);
  setLoopCount((prev) => prev + 1);
};

  return (
    <section>
      <Container>
        <div
          className="relative rounded-xl  md:rounded-3xl overflow-hidden  "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Image with zoom-out (Ken Burns) + crossfade effect */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ scale: 1.25, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                scale: { duration: 1, ease: "linear" },
                opacity: { duration: 0.8, ease: "easeOut" },
              }}
              className="w-full h-full"
            >
              <Image
                src={slidesData[currentSlide].image}
                alt={slidesData[currentSlide].title}
                width={1000}
                height={1000}
                priority
                className="w-full h-100 sm:h-110 md:h-130 lg:h-162.5 object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Bottom gradient for text legibility */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

          <div className="absolute top-0 left-0 w-full h-full z-2 flex flex-col justify-between py-10">
            <div className="flex-1 grid place-items-center">
              <div className="max-w-150 mx-auto px-6">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentSlide}
                    initial={{ y: 40, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -40, opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10 drop-shadow-lg"
                  >
                    {slidesData[currentSlide].description}
                  </motion.h2>
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative mx-auto flex w-fit cursor-pointer items-center gap-5 overflow-hidden rounded-full bg-white px-5 py-3 text-black shadow-lg after:absolute after:right-2 after:top-1/2 after:h-8 after:w-8 after:-translate-y-1/2 after:rounded-full after:bg-black after:content-[''] after:transition-transform after:duration-600 after:ease-out after:origin-center after:z-0 hover:after:scale-[15]"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white font-bold">
                    Shop Now
                  </span>
                  <div className="relative z-10 h-4 w-4 overflow-hidden">
                    <div className="flex items-center gap-2 group-hover:animate-marquee">
                      <IoIosArrowForward className="shrink-0 text-white" />
                      <IoIosArrowForward className="shrink-0 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Progress / navigation */}
            <div
              className=" hidden md:grid gap-6 px-20"
              style={{
                gridTemplateColumns: `repeat(${slidesData.length}, 1fr)`,
              }}
            >
              {slidesData.map((slide, index) => {
                const status =
                  index < currentSlide
                    ? "done"
                    : index === currentSlide
                      ? "active"
                      : "pending";

                return (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="text-left cursor-pointer group/item"
                  >
                    <p
                      className={`text-sm md:text-base mb-2 transition-colors duration-300 text-center  ${
                        status === "pending" ? "text-white/50" : "text-white"
                      } group-hover/item:text-white`}
                    >
                      {slide.title}
                    </p>

                    <div className="h-0.75 w-full bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                      {status === "active" ? (
                        // key forces a fresh remount every time this bar becomes active
                        // (including on every loop), so the 0% -> 100% animation always replays
                        <motion.div
                          key={`active-${index}-${loopCount}`}
                          className="h-full bg-white rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: SLIDE_DURATION,
                            ease: "linear",
                          }}
                        />
                      ) : (
                        <motion.div
                          className="h-full bg-white rounded-full"
                          animate={{
                            width: status === "done" ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* mobile progress slide */}
            <div className="md:hidden gap-6 px-4 ">
              {slidesData.map((slide, index) =>
                index === currentSlide ? (
                  <div
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="group/item cursor-pointer w-full  "
                  >
                    <div className="flex justify-between items-center   ">
                      <p
                        className={`mb-2 text-left text-sm transition-colors duration-300 md:text-base ${
                          index === currentSlide
                            ? "text-white"
                            : "text-white/50"
                        } group-hover/item:text-white`}
                      >
                        {slide.title}
                      </p>

                      <div className="flex text-white/40  ">
                        <IoIosArrowForward
                          onClick={(e) => {
                            e.stopPropagation();
                            goToSlide(currentSlide - 1);
                          }}
                          className="rotate-180 hover:text-white "
                          size={24}
                        />
                        <IoIosArrowForward
                          onClick={(e) => {
                            e.stopPropagation();
                            goToSlide(currentSlide + 1);
                          }}
                          size={24}
                          className="hover:text-white"
                        />
                      </div>
                    </div>

                    <div className="h-0.75 w-full overflow-hidden rounded-full bg-white/20">
                      {index === currentSlide ? (
                        <motion.div
                          key={`${currentSlide}-${loopCount}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: SLIDE_DURATION,
                            ease: "linear",
                          }}
                          className="h-full rounded-full bg-white"
                        />
                      ) : (
                        <div className="h-full w-0 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
