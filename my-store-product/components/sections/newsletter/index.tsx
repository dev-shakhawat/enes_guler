"use client";

import { motion } from "framer-motion"; 
import WaveText from "./wave-text";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] py-36">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />

      {/* Floating */}

      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute left-40 top-40 h-3 w-3 rounded-full bg-white/20"
      />

      <motion.div
        animate={{
          y: [30, -30, 30],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute right-52 bottom-24 h-2 w-2 rounded-full bg-purple-400"
      />

      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-4xl text-center">

          <WaveText text="Subscribe to our newsletter" />

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-2xl text-lg text-white/60"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A perferendis veritatis rem, porro ut numquam.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: .8,
            }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"
          >

            <input
              type="email"
              placeholder="Enter your email"
              className="h-16 w-full rounded-xl border border-white/10 bg-white/5 px-6 text-white backdrop-blur-xl outline-none transition-all placeholder:text-white/40 focus:border-purple-500 sm:w-[450px]"
            />

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: .96,
              }}
              className="h-16 rounded-xl bg-white px-10 font-semibold text-black shadow-2xl"
            >
              Notify Me
            </motion.button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}