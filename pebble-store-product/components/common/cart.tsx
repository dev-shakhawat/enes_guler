"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";

type CartBoxProps = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CartBox({ isCartOpen, setIsCartOpen }: CartBoxProps) {
  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.35 }}
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-9999"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 right-0 h-dvh w-full bg-white shadow-2xl md:w-1/4"
          >
            {/* Header */}
            <div className="flex items-center border-b border-black/10 pl-4">
              <h2 className="mb-4 text-2xl font-bold">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="flex h-14 w-14 items-center justify-center ml-auto  "
              >
                <VscClose
                  size={24}
                  className="transition-transform duration-300 hover:rotate-180"
                />
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100dvh-56px)] overflow-y-auto p-6 mt-10 ">
              <h2 className="mb-4 text-xl font-bold text-center ">
                Your cart is empty
              </h2>
              <p className="text-center text-gray-600">
                Have an account?{" "}
                <Link href="/" className="text-black hover:underline">
                  Log in
                </Link>{" "}
                to check out faster.
              </p>

              <div
                className="
                    group
                    relative
                    mx-auto mt-8
                    flex w-fit cursor-pointer items-center gap-5
                    overflow-hidden
                    rounded-full
                    border border-black
                    bg-black
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
                    <IoIosArrowForward className="shrink-0 text-black" />
                    <IoIosArrowForward className="shrink-0 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
