"use client"

import { TNavLink } from "@/types"
import Container from "./container"
import Logo from "./logo"
import Link from "next/link"
import { CardBox } from "./cart"
import { SearchBox } from "./search-box"
import { AuthModal } from "../auth/auth"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { LuMenu } from "react-icons/lu";

export default function Nav({}: {}) {
  const navLinks: TNavLink[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Catalog",
      href: "/catalog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ]

  const { scrollY } = useScroll()
  const [isSticky, setIsSticky] = useState(false)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsSticky(latest > 10)
  })

  return (
    <nav
      className={`border-b border-secondary py-7 ${isSticky ? "sticky top-0 z-10 bg-white shadow" : ""} `}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="hidden sm:block">
            <Logo />
          </div>
          <div className="sm:hidden">
            <LuMenu size={24} />
          </div>

          {/* nav Links */}
          <ul className=" hidden ml-10 sm:flex space-x-8">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="sm:hidden ">
            <Logo/>
          </div>

          {/* search/user/cart */}
          <div className="flex gap-5">
            <SearchBox />
            <AuthModal />
            <CardBox />
          </div>
        </div>
      </Container>
    </nav>
  )
}
