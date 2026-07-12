"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

type AccordionProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function Accordion({
  title,
  icon,
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <div className="flex">
          {icon && <div className="mr-4">{icon}</div>}
          <h3 className="text-lg  font-bold">{title}</h3>
        </div>

        <motion.div
          animate={{
            rotate: isOpen ? 270 : 90,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <IoIosArrowForward size={20} className="text-neutral-700" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-neutral-600 leading-7">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
