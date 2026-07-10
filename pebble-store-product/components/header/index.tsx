"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import DesktopNav from "./desktop-nav";
import HeaderActions from "./actions";
import MobileNav from "./mobile-nav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="lg:hidden flex items-center">
            <MobileNav />
          </div>

          <div className="flex justify-center flex-grow lg:flex-grow-0 lg:justify-start">
            <Logo />
          </div>

          <div className="hidden lg:flex flex-grow justify-center">
            <DesktopNav />
          </div>

          <div className="flex items-center justify-end">
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  );
}
