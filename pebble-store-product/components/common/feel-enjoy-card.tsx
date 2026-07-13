import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { PiPlus } from "react-icons/pi";

type FeatureCardProps = {
  index: number;
  title: string;
  image: StaticImageData | string;
  onClick?: () => void;
};

export default function FeelEnjoyCard({
  index,
  title,
  image,
  onClick,
}: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover="hover"
      className="group/card relative overflow-hidden rounded-[30px]   p-8 min-h-100 md:min-h-120 cursor-pointer"
      onClick={onClick}
    >
      {/* Background Glow */}
      <motion.div
        variants={{
          hover: {
            scale: 1.2,
            opacity: 1,
          },
        }}
        transition={{ duration: 0.6 }}
        className="absolute -right-32 -top-32 h-64 w-64 rounded-full  blur-3xl opacity-0"
      />

      {/* Number */}
      <span className="relative z-10 text-lg font-bold text-white/80">
        {String(index + 1).padStart(2, "0")}.
      </span>

      {/* Title */}
      <motion.h3
        variants={{
          hover: {
            y: -6,
          },
        }}
        transition={{ duration: 0.35 }}
        className="relative z-10 mt-8 max-w-xs text-3xl font-bold leading-tight text-white"
      >
        {title}
      </motion.h3>

      {/* Image */}
      <div className="absolute left-1/2 top-1/2 h-full w-full    -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl">
        <motion.div
          variants={{
            hover: {
              scale: 1.12,
              rotate: -2,
            },
          }}
          transition={{
            duration: 0.5,
          }}
          className="h-full w-full"
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
      </div>

      {/* Bottom Button */}
      <button
        type="button"
        className="group/button   flex h-10 w-10 items-center justify-center absolute bottom-4 right-4  overflow-hidden rounded-full border border-white bg-white after:absolute after:inset-0 after:-translate-x-full after:rounded-full after:bg-black after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:translate-x-0"
      >
        <PiPlus
          size={18}
          className="relative z-10 text-black transition-colors duration-300 group-hover/button:text-white"
        />
      </button>

      {/* Border */}
      <motion.div
        variants={{
          hover: {
            opacity: 1,
          },
        }}
        className="absolute inset-0 rounded-[30px] border border-white/10 opacity-0"
      />
    </motion.article>
  );
}
