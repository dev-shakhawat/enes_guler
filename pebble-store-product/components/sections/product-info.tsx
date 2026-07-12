"use client";
import { HiArrowUturnDown } from "react-icons/hi2";

import { useState } from "react";
import {
  LuBox,
  LuChevronRight,
  LuCreditCard,
  LuSparkles,
} from "react-icons/lu";
import { TbCheck } from "react-icons/tb";
import Accordion from "../common/accordian";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { VscTwitter } from "react-icons/vsc";

type ProductInfoProps = {
  name: string;
  price: number;
  description: string;
};

export default function ProductInfo({
  name,
  price,
  description,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const faqItems = [
    {
      id: 1,
      title: "Return policy",
      content:
        "We accept returns within 30 days of purchase. Please note that all items must be returned in their original condition, including all tags and packaging. Shipping costs are non-refundable.",
    },
    {
      id: 2,
      title: "Shipping",
      content:
        "We offer free shipping on all orders over $100. Orders under $100 will be charged a flat rate of $10.",
    },
    {
      id: 3,
      title: "Manufacturing",
      content:
        "Our manufacturing blends craftsmanship and innovation — ensuring every piece is made with precision, quality materials, and sustainable practices for lasting style.",
    },
  ];

  return (
    <div className="w-full ml-16 ">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-3 text-sm text-neutral-500">
        <span className="cursor-pointer hover:text-black transition-colors">
          Home
        </span>

        <span>/</span>

        <span className="cursor-pointer hover:text-black transition-colors">
          Home page
        </span>

        <span>/</span>

        <span className="text-black">{name}</span>
      </div>

      {/* Product Name */}
      <h1 className="text-5xl font-bold tracking-tight">{name}</h1>

      {/* Price */}
      <h2 className="mt-3 text-4xl font-bold">Tk {price.toFixed(2)}</h2>

      {/* Description */}
      <p className="mt-4 text-neutral-600 leading-7">{description}</p>

      {/* Stock */}
      <div className="mt-4 flex items-center gap-3">
        <TbCheck className="text-emerald-600" />

        <span className="font-medium text-emerald-600">
          In-stock and ready to ship
        </span>
      </div>

      {/* Quantity + Cart */}
      <div className="mt-4 flex gap-3">
        <div className="flex h-12 items-center rounded-full border border-neutral-300 px-5">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="text-xl transition hover:scale-110"
          >
            −
          </button>

          <span className="mx-7 font-medium">{quantity}</span>

          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="text-xl transition hover:scale-110"
          >
            +
          </button>
        </div>

        <button className="group relative isolate flex-1 overflow-hidden rounded-full bg-neutral-100 py-3 font-semibold transition-all duration-300 after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-black after:transition-transform after:duration-500 hover:after:scale-x-100  cursor-pointer  ">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Add To Cart
          </span>
        </button>
      </div>

      {/* Buy */}
      <button className="mt-4 w-full border group relative isolate flex-1 overflow-hidden rounded-full bg-black  py-3 font-semibold transition-all duration-300 after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-500 hover:after:scale-x-100  cursor-pointer  ">
        <span className="relative z-10 transition-colors duration-300 text-white group-hover:text-black ">
          Add To Cart
        </span>
      </button>

      {/* Features */}
      <div className="mt-6 grid grid-cols-3 border-t border-neutral-200 pt-6">
        <div className="flex flex-col items-center text-center">
          <LuBox size={34} className="mb-4" />

          <p className="font-medium">Free shipping</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <HiArrowUturnDown size={34} className="mb-4" />

          <p className="font-medium">Easy return</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <LuCreditCard size={34} className="mb-4" />

          <p className="font-medium">Safe checkout</p>
        </div>
      </div>

      {/* accordian */}
      {faqItems.map((accordian, idx) => (
        <Accordion key={idx} title={accordian.title}>
          {accordian.content}
        </Accordion>
      ))}

      <div className="flex items-center justify-between my-4!  ">
        <div className="flex">
          <p className="font-medium">Share :</p>
          <ul className="flex items-center gap-6 ml-4  ">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <VscTwitter />
            </li>
          </ul>
        </div>
        <button className="  w-fit   group relative px-4  overflow-hidden border border-gray-200 rounded-full bg-transparent  py-3 font-semibold transition-all duration-300 after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-500 hover:after:scale-x-100  cursor-pointer  ">
          <span className="relative z-10 transition-colors duration-300 text-gray-400 group-hover:text-black ">
            Need help ?
          </span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#EAF2FF] p-5 transition-all duration-300 hover:bg-[#E2EDFF]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2563EB]">
              <LuSparkles size={24} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2563EB]">
                Outfit Inspiration
              </h3>

              <p className="mt-1 text-sm text-[#2563EB]/90">
                Ideas to refresh your everyday wardrobe
              </p>
            </div>
          </div>

          <button className="group relative isolate grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white text-neutral-700 transition-all duration-300 after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-black after:transition-transform after:duration-500 hover:after:scale-x-100">
            <LuChevronRight
              size={20}
              className="relative z-10 transition-colors duration-300 group-hover:text-white"
            />
          </button>
        </div>
      </div>

      <h3 className="text-lg  font-bold mt-6  ">Complete the look</h3>
    </div>
  );
}
