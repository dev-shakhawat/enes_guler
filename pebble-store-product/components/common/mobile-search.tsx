"use client";

import { motion, AnimatePresence } from "framer-motion";
import { VscClose } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";

export default function MobileSearch({
  isMobileSearchOpen,
  setIsMobileSearchOpen,
}: {
  isMobileSearchOpen: boolean;
  setIsMobileSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <AnimatePresence>
      {isMobileSearchOpen && (
        <motion.div
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.35 }}
          onClick={() => setIsMobileSearchOpen(false)}
          className="fixed inset-0 z-50 md:hidden"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1], // Premium ease
            }}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 right-0 h-dvh w-full bg-white"
          >
            <div className="flex items-center border-b border-black/10 pl-4">
              <div className="flex flex-1 items-center">
                <IoSearchOutline size={24} />

                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 h-10 w-full flex-1 px-2 focus:outline-none"
                />
              </div>

              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="ml-auto h-15 w-fit border-l border-black/10 px-4"
              >
                <VscClose
                  size={24}
                  className="transition-transform duration-300 hover:rotate-180"
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}