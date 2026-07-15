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

export function SearchBox() {
  const [open, setOpen] = React.useState(false)
 
  return (
    <Drawer open={open} onOpenChange={setOpen} swipeDirection={"right"}>
      <DrawerTrigger >
        <IoSearchOutline size={24} />
      </DrawerTrigger>
      <DrawerContent
        className={`w-full rounded-none! sm:w-3/5 md:rounded-lg lg:w-2/6`}
      >
        <DrawerHeader className="flex-row items-center justify-between">
          <DrawerTitle className="text-xl text-foreground md:text-2xl">
            Your Cart
          </DrawerTitle>
          <DrawerClose className="cursor-pointer transition-all duration-300 hover:rotate-180">
            <VscChromeClose size={22} className="text-foreground" />
          </DrawerClose>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="mt-10 text-center text-xl font-normal text-foreground">
            Your cart is currently empty.
          </h3>

          <div className="">
            <p className="my-5 text-center text-base font-normal">
              Not sure where to start? <br />
              Try these collections:
            </p>

            <CmnButton text="Continue Shopping" btnClassName="bg-muted transition-all duration-300 text-primary hover:text-white py-6 w-8/10 mx-auto rounded-full   " />
          </div>
        </div>
        {/* <DrawerFooter>
 
          
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  )
}
