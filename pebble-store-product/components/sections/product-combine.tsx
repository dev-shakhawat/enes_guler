"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TOutfitInspirationProps } from "@/types";

const ITEMS_PER_PAGE_DEFAULT = 2;

import productImage from "@/public/images/productimage.jpg";
import product1 from "@/public/images/product1.png";
import product2 from "@/public/images/product2.jpg";
import product3 from "@/public/images/product3.jpg";
import product4 from "@/public/images/product4.jpg";
import Container from "../common/container";

export default function ProductCombine() {
  return (
    <Container>
      <div className="pt-20">
        <OutfitInspiration
          mainImage={productImage}
          currentItemLabel="Current item"
          itemTitle="Cherry Blossom Dress"
          itemPrice={278.0}
          products={[
            { id: 1, title: "Product title", price: 19.99, image: product1 },
            { id: 2, title: "Product title", price: 19.99, image: product2 },
            { id: 3, title: "Product title", price: 19.99, image: product3 },
            { id: 4, title: "Product title", price: 19.99, image: product4 },
          ]}
        />
      </div>
    </Container>
  );
}

function OutfitInspiration({
  mainImage,
  mainImageAlt = "Product",
  currentItemLabel = "Current item",
  itemTitle,
  itemPrice,
  products,
  itemsPerPage = ITEMS_PER_PAGE_DEFAULT,
}: TOutfitInspirationProps) {
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const currentProducts = products.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  const goNext = () => {
    if (page === totalPages - 1) return;
    setDirection(1);
    setPage((p) => p + 1);
  };

  const goPrev = () => {
    if (page === 0) return;
    setDirection(-1);
    setPage((p) => p - 1);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      {/* Left: main image */}
      <div>
        <div className="relative rounded-2xl overflow-hidden aspect-4/3">
          <motion.div
            className="w-full h-full"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full cursor-pointer "
            >
              <Image
                src={mainImage}
                alt={mainImageAlt}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full">
            {currentItemLabel}
          </span>
        </div>

        <p className="mt-4 font-bold text-black ">{itemTitle}</p>
        <p className="font-bold text-gray-900">Tk {itemPrice.toFixed(2)}</p>
      </div>

      {/* Right: heading + product carousel */}
      <div>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-black mb-8"
        >
          Outfit Inspiration
        </motion.h2>

        <div className="relative overflow-hidden min-h-45">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              {currentProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-5">
                  <div className="relative w-20 h-20 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-3"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {product.title}
                    </p>
                    <p className="font-bold text-gray-900">
                      Tk {product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-4 mt-8 md:w-1/2  ">
          <span className="text-sm font-medium text-gray-900 shrink-0">
            {page + 1} / {totalPages}
          </span>

          <div className="relative flex-1 h-0.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black rounded-full"
              animate={{
                width: `${((page + 1) / totalPages) * 100}%`,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={goPrev}
              disabled={page === 0}
              className="w-8 h-8 grid place-items-center rounded-full border border-gray-300 text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <IoIosArrowBack size={16} />
            </button>
            <button
              onClick={goNext}
              disabled={page === totalPages - 1}
              className="w-8 h-8 grid place-items-center rounded-full border border-gray-300 text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <IoIosArrowForward size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}