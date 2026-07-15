"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { useMediaQuery } from "@/hooks/use-media-query"
import { AiOutlineUser } from "react-icons/ai"
import AnimatedInput from "../common/animated-input"
import CheckBox from "../common/check-box"
import CmnButton from "../common/cmn-button"
import { IoBagRemoveOutline } from "react-icons/io5"
import { HiOutlineUserCircle } from "react-icons/hi2";

export function AuthModal() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <AiOutlineUser size={24}  />
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Sign in or create account </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <AiOutlineUser />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="p-4" />
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-3 ", className)}>
      <Button className="rounded-full bg-[#5433EB] py-6.5 hover:bg-[#5433EB]/90">
        Sign in with shop
      </Button>

      {/* or divider */}

      <div className="flex items-center justify-between gap-5">
        <div className="flex-1 border-b p-px" />
        <span className="">Or</span>
        <div className="flex-1 border-b p-px" />
      </div>

      <AnimatedInput title="Email" />

      <CheckBox
        txt="Email me with news and offers"
        onChange={(checked) => console.log(checked)}
      />
      <div className="flex items-center gap-3 ">
        <CmnButton 
        text="Orders" 
        icon={<IoBagRemoveOutline />}
        btnClassName="border-primary/10 text-primary hover:bg-primary/10 py-5 rounded-full flex-1     "
        />
        <CmnButton 
        text="Profile" 
        icon={<HiOutlineUserCircle />}
        btnClassName="border-primary/10 text-primary hover:bg-primary/10 py-5 rounded-full flex-1     "
        />
      </div>
    </form>
  )
}
