"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StickyUp from "../common/sticky-up";
import { motion, AnimatePresence } from "framer-motion";

export default function BannerVideo({}: {}) {
  const bannerVideoRef = useRef<HTMLDivElement>(null);
  const [isPassed, setIsPassed] = useState(false);

  useLayoutEffect(() => {
    if (!bannerVideoRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: bannerVideoRef.current,
      start: "top bottom",

      onUpdate: (self) => {
        setIsPassed(self.scroll() >= self.start);
      },
    });

    return () => trigger.kill();
  }, []);

  console.log(isPassed);

  return (
    <section
      ref={bannerVideoRef}
      className=" py-10 md:py-15 lg:py-20 xl:py-25   "
    >
      {/* youtube video using iframe */}
      <iframe
        src="https://www.youtube.com/embed/CBxgZxjdJyk?autoplay=1&mute=1&playsinline=1&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-[80dvh] aspect-video "
        
      ></iframe>

      <AnimatePresence>
        {isPassed && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed right-4 bottom-10 z-20 w-full sm:w-1/2 lg:w-1/4 "
          >
            <StickyUp />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
