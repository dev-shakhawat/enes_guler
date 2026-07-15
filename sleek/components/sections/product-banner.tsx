"use client"

import Container from "../common/container"
import productBannerImage from "@/public/images/product.jpg"
import ImageZoomer from "../common/image-zoomer"
import StockBadge from "../common/stock-badge"
import { useState } from "react"
import { AiOutlineMinus } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"
import CmnButton from "../common/cmn-button"
import { LuBox } from "react-icons/lu"
import { HiOutlineCurrencyDollar } from "react-icons/hi2"
import { BsCurrencyDollar } from "react-icons/bs"
import Accordion from "../common/accordion"
import { PiShareFatLight } from "react-icons/pi"
import { VscQuestion } from "react-icons/vsc"

export default function ProductBanner({}: {}) {
  const [count, setCount] = useState(1)

  const handleCountChange = (type: "i" | "d") => {
    if (type === "i") {
      setCount((prevCount) => prevCount + 1)
    } else if (type === "d" && count > 1) {
      setCount((prevCount) => prevCount - 1)
    }
  }

  const accordians = [
    {
      title: "Overview",
      txt: "A clinically proven, non-sticky, vegan lip treatment that delivers the intense hydration of a lip mask with a sweet sheer tint using food-grade, non-artificial flavor. Designed for sensitive, irritated lips, this cushiony treatment delivers instant comfort to rescue dry, chapped lips.",
    },
    {
      title: "How to use",
      txt: "Apply generously to lips for hydration and comfort. Use at night for an overnight mask.",
    },
    {
      title: "Ingredients",
      txt: (
        <ul>
          <li>Dulce De Leche</li>
          <li>Ube vanilla</li>
          <li>Watermelon kiwi</li>
          <li>Blood orange vanilla</li>
        </ul>
      ),
    },
  ]

  return (
    <section className="mt-5">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* image viewer */}
          <div className="md:sticky self-start top-30  ">
            <ImageZoomer imageSrc={productBannerImage.src} />
          </div>

          {/* product info */}
          <div className="md:ml-20   ">
            <h2 className="font-brico text-2xl font-bold">
              North Star Valerio Basic Slip-On Sneaker For Men
            </h2>
            <p className="my-4 text-xl font-semibold">TK 278.00</p>

            <div className="text-base text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptatum omnis eaque sit incidunt reprehenderit eius harum
              ipsam, iusto officia repellat quisquam molestiae odit! Suscipit
              repellat rerum placeat nulla molestiae!
            </div>

            <StockBadge />

            <div className="flex gap-2 select-none">
              <div className="flex items-center rounded-full border px-4 py-3">
                <AiOutlineMinus onClick={() => handleCountChange("d")} />
                <p className="mx-4">{count}</p>
                <AiOutlinePlus onClick={() => handleCountChange("i")} />
              </div>
              <CmnButton
                btnClassName=" bg-primary/10 text-primary hover:bg-primary hover:text-white py-6.25 rounded-full flex-1       "
                text="Add To Cart"
              />
            </div>

            <CmnButton
              btnClassName=" bg-primary text-white py-6.25 rounded-full w-full mt-4         "
              text="Add To Cart"
            />

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-md py-5">
              <div className="flex items-center gap-3">
                <LuBox className="h-6 w-6 text-black" />
                <span className="text-lg font-medium text-[#1a1a1a]">
                  Orders over
                </span>
              </div>

              <div className="flex items-center gap-3">
                <BsCurrencyDollar className="h-6 w-6 text-black" />
                <span className="text-lg font-medium text-[#1a1a1a]">
                  50 ship free
                </span>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineCurrencyDollar className="h-6 w-6 text-black" />
                <span className="text-lg font-medium text-[#1a1a1a]">
                  30 day returns
                </span>
              </div>
            </div>

            {accordians.map((acc, i) => (
              <Accordion key={i} title={acc.title}>
                <div className="text-base text-muted-foreground">{acc.txt}</div>
              </Accordion>
            ))}

            <div className="my-4 flex items-center gap-5 text-xl">
              <div className="flex items-center gap-1">
                <PiShareFatLight />
                <span className="">Share</span>
              </div>
              <div className="flex items-center gap-1">
                <VscQuestion />
                <span className="">Share</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
