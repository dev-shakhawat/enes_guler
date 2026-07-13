"use client";
import Link from "next/link";
import Container from "./container";
import { TNavLink } from "@/types";
import Logo from "./logo";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { useEffect, useState } from "react";
import MobileNav from "./mobile-nav";
import MobileSearch from "./mobile-search";
import CartBox from "./cart";

export default function Nav({}: {}) {
  const navLinks: TNavLink[] = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
    { name: "Contact", href: "/contact" },
  ];

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`overflow-x-hidden border-b fixed top-0 left-0 z-20 w-full bg-white border-black/10  ${isScrolled ? "shadow-md" : ""}`}>
      <Container>
        <div className="flex items-center justify-between h-15   ">
          {/* nav links */}
          <ul className="md:flex items-center gap-8.5 text-base font-medium text-black hidden   ">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex items-center   ">
            <button
              className="mr-3 pr-3  h-15 border-r border-black/10   "
              onClick={() => setIsMobileNavOpen(true)}
            >
              <LuMenu size={24} />
            </button>
            <Logo className="text-[26px] " />
          </div>

          {/* mobile nav */}
          <MobileNav
            isMobileNavOpen={isMobileNavOpen}
            setIsMobileNavOpen={setIsMobileNavOpen}
          />
          {/* mobile search */}
          <MobileSearch
            isMobileSearchOpen={isMobileSearchOpen}
            setIsMobileSearchOpen={setIsMobileSearchOpen}
          />
          {/* cart */}
          <CartBox isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

          {/* logo */}
          <div className="hidden md:block ">
            <Logo />
          </div>

          <div className=" flex items-center     ">
            <div className="relative hidden md:inline-block ">
              <input
                type="text"
                placeholder="What are you looking for?"
                className=" p-2 rounded-full focus:outline-none focus:ring-1 focus:border-black/10
                pr-11 min-w-71.5
                "
              />
              <IoSearchOutline
                className=" absolute top-1/2 -translate-y-1/2 right-4    "
                size={22}
              />
            </div>

            <button
              onClick={() => setIsMobileSearchOpen(true)}
              className="md:hidden h-15 border-l border-r border-black/10 px-4  "
            >
              <IoSearchOutline className="     " size={22} />
            </button>
            <AiOutlineUser className="ml-2 hidden md:inline-block " size={22} />

            <IoCartOutline
              onClick={() => setIsCartOpen(true)}
              className="ml-4 "
              size={22}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}
