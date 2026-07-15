"use client"

import { useState } from "react"
import { HiMiniCheck } from "react-icons/hi2"

type CheckBoxProps = {
  boxClassName?: string
  onChange?: (checked: boolean) => void
  txt?: string
}

export default function CheckBox({ 
  txt = "",
  onChange,
}: CheckBoxProps) {
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onChange?.(newChecked)
  }

  return (
    <div 
      onClick={handleClick}
      className={`flex items-center gap-2 select-none  `}
    >
      <div 
        className={`relative grid h-5 w-5 place-items-center overflow-hidden rounded-[6px] border border-primary/10 bg-primary  `}
      >
        <div
          className={`absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ${
            checked ? "scale-0" : "scale-120"
          }`}
        />

        {checked && <HiMiniCheck className="text-white" />}
      </div>
      <p className="">
        {txt}
      </p>
    </div>
  )
}
