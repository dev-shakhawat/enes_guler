"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import insta1 from "@/public/images/product1.png";
import insta2 from "@/public/images/product2.jpg";
import insta3 from "@/public/images/product3.jpg";
import Container from "../common/container";
import Accordion from "../common/accordian";
import Accordian from "../common/accordian";

const companyLinks = ["Search"];

const collectionLinks = ["Search"];

const helpLinks = ["Search"];

const instagramImages = [insta1, insta2, insta3];

export default function Footer() {
  return (
    <footer className=" mt-5 sm:mt-10 md:mt-15 lg:mt-20 xl:mt-32 overflow-hidden rounded-t-[36px] bg-black text-white">
      <div className=" px-8 pt-14 pb-4   ">
        <Container>
          {/* Top */}
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="max-w-xl text-3xl font-bold leading-tight lg:text-5xl">
                Subscribe for updates,
                <br />
                tips & exclusive offers
              </h2>
            </div>

            <div className="lg:pl-20">
              <div className="flex h-18 items-center rounded-full bg-white p-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-6 text-lg text-black outline-none placeholder:text-neutral-500"
                />

                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-105">
                  <IoIosArrowForward size={20} />
                </button>
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-400">
                By subscribing you agree to the{" "}
                <Link
                  href="#"
                  className="underline underline-offset-4 transition-colors hover:text-white"
                >
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link
                  href="#"
                  className="underline underline-offset-4 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Middle / desktop */}
          <div className=" hidden md:grid gap-14 lg:grid-cols-[220px_220px_220px_1fr]">
            {/* Company */}
            <div>
              <h3 className="mb-8 text-2xl font-bold">Company</h3>

              <ul className="space-y-5">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-lg text-neutral-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collection */}
            <div>
              <h3 className="mb-8 text-2xl font-bold">Collection</h3>

              <ul className="space-y-5">
                {collectionLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-lg text-neutral-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="mb-8 text-2xl font-bold">Get Help</h3>

              <ul className="space-y-5">
                {helpLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-lg text-neutral-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instagram */}
            <div>
              <h3 className="mb-8 text-2xl font-bold">
                Follow Us on Instagram
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {instagramImages.map((image, index) => (
                  <Link
                    href="#"
                    key={index}
                    className="group overflow-hidden rounded-3xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-3xl">
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                ))}
              </div>

              <p className="mt-5 text-lg font-semibold text-neutral-400">
                @littlepebble.co
              </p>
            </div>
          </div>

          {/* middle / mobile */}
          <div className="md:hidden">
            <Accordion className="border-0! " title="Follow Us on Instagram">
              <div className="grid grid-cols-3 gap-4">
                {instagramImages.map((image, index) => (
                  <Link
                    href="#"
                    key={index}
                    className="group overflow-hidden rounded-3xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-3xl">
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                ))}
              </div>

              <p className="mt-5 text-lg font-semibold text-neutral-400">
                @littlepebble.co
              </p>
            </Accordion>

            <Accordion className="border-0! " title="Company">
              <ul className="space-y-5">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-lg text-neutral-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion className="border-0! " title="Collection">
              <ul className="space-y-5">
                {collectionLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-lg text-neutral-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion className="border-0! " title="Get Help">
              <ul className="space-y-5">
                {helpLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-lg text-neutral-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>

          {/* Bottom */}
          <div className=" mt-5 lg:mt-10 border-t border-white/10 pt-5">
            <p className="text-lg text-neutral-400">
              © 2026 My Store 2, Powered by Shopify
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
