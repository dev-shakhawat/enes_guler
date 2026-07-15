"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { VscChromeClose } from "react-icons/vsc"
import CmnButton from "./cmn-button"
import { IoSearchOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu"
import Logo from "./logo"
import { TNavLink } from "@/types"
import Link from "next/link"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)
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

    return (
        <Drawer open={open} onOpenChange={setOpen} swipeDirection={"left"}>
            <DrawerTrigger className={`h-fit!`} >
                <LuMenu size={24} />
            </DrawerTrigger>
            <DrawerContent
                className={`w-full rounded-none! sm:w-3/5 md:rounded-lg lg:w-2/6  z-999! `}
            >
                <DrawerHeader className="flex-row items-center justify-between">
                    <DrawerTitle className="text-xl text-foreground md:text-2xl">
                        <Logo />
                    </DrawerTitle>
                    <DrawerClose className="cursor-pointer transition-all duration-300 hover:rotate-180">
                        <VscChromeClose size={22} className="text-foreground" />
                    </DrawerClose>
                </DrawerHeader>
                <div className="flex-1 overflow-y-auto p-4">

                    {/* nav Links */}
                    <ul className="    space-y-4 mt-5">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <Link
                                    href={link.href}
                                    className="text-lg font-medium text-primary "
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>



                </div>
                {/* <DrawerFooter>
 
          
        </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    )
}
