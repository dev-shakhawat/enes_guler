"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { LuChevronDown } from "react-icons/lu"
import { HiOutlineMinus } from "react-icons/hi2";

type AccordionProps = {
  title: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-xl font-brico  ">{title}</span>


        <div className="relative ">
            <HiOutlineMinus size={24} /> 
            <HiOutlineMinus size={24} className={`absolute top-0 left-0 transition-all duration-700 
                ${open ? "rotate-360" : "rotate-90"}   `} /> 
        </div>

 
      </button>

      <AnimatePresence initial={false}>
        {open && (
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
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -10,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 0.05,
              }}
              className="pb-5 text-gray-600 font-brico!"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}