"use client";

import Image from "next/image";
import Container from "../common/container";
import { motion } from "framer-motion";
import demoImage from "@/public/images/test4.png";
import { IoIosArrowForward } from "react-icons/io";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import Accordion from "../common/accordian";

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function FAQ({}: {}) {
  const faqItems = [
    {
      question: "How long does it take to process an order?",
      answer:
        "Orders are usually processed within 1–2 business days. You’ll receive a confirmation email once your order is fully prepared and ready to ship.",
      open: true,
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping times and rates vary by location, and all available options will be shown at checkout.",
      open: false,
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Items must be unworn, unwashed, and in original condition with tags attached for a full refund.",
      open: false,
    },
    {
      question: "What are your sizing options?",
      answer:
        "We offer a full range of sizes from XS to XL. Refer to our detailed size chart for accurate measurements to find your perfect fit.",
      open: false,
    },
  ];

  return (
    <section className="pb-0 md:pb-10 lg:pb-20">
      <Container>
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
        >
          You May Also Like
        </motion.h2>

        <div className=" pb-10 md:pb-15 lg:pb-20   xl:pb-24">
          <div className="overflow-hidden rounded-4xl  bg-[#f6f7fc]">
            <div className="grid lg:grid-cols-[380px_1fr]">
              {/* Left */}
              <div className="flex flex-col items-center bg-[#bdbdbd] px-10 py-14 text-center">
                <h2 className="text-3xl font-bold leading-tight text-white">
                  Still Need Help?
                </h2>

                <p className="mt-8   text-lg font-medium leading-8 text-white/90">
                  Shoot our team an email & we'll get back to you ASAP
                </p>

                <div
                  className="
                    group
                    relative
                    mx-auto mt-8
                    flex w-fit cursor-pointer items-center gap-5
                    overflow-hidden
                    rounded-full
                    border border-white/40
                    bg-white/40
                    px-4 py-3
                    text-black/70 
                    after:absolute
                    after:right-2
                    after:top-1/2
                    after:h-8
                    after:w-8
                    after:-translate-y-1/2
                    after:rounded-full
                    after:bg-black/40
                    after:content-['']
                    after:transition-transform
                    after:duration-600
                    after:ease-out
                    after:origin-center
                    after:z-0
                    hover:after:scale-[15]
                "
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white font-bold">
                    Contact Us
                  </span>
                  {/* Arrow marquee wrapper */}
                  <div className="relative z-10 h-4 w-4 overflow-hidden">
                    <div className="flex items-center gap-2 group-hover:animate-marquee">
                      <IoIosArrowForward className="shrink-0 text-white" />
                      <IoIosArrowForward className="shrink-0 text-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-10  ">
                  <Image
                    src={demoImage}
                    alt="help"
                    width={180}
                    height={180}
                    className="mx-auto opacity-70 rounded-lg  "
                  />
                </div>
              </div>

              {/* Right */}
              <div className=" px-4 md:px-6 lg:px-10 py-14 xl:px-16">
                <h2 className="mb-12 text-2xl md:text-3xl lg:text-5xl font-bold">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-5">
                  {faqItems.map((item, index) => (
                    <Accordion
                      key={index}
                      title={item.question}
                      className="border-0! bg-white p-3 rounded-2xl    "
                    >
                      {item.answer}
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
