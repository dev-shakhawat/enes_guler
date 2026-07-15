import { Button } from "../ui/button"

export default function CmnButton({
  btnClassName,
  txtClassName,
  icon,
  text,
  onClick,
}: {
  btnClassName?: string
  txtClassName?: string
  icon?: React.ReactNode
  text?: string
  onClick?: () => void
}) {
  return (
    <Button
      onClick={onClick}
      className={`overflow-hidden cursor-pointer relative flex items-center gap-2 bg-transparent transition-all duration-300 after:absolute after:top-0 after:-left-70 after:h-full after:w-1/2 after:bg-white/20 after:transition-all after:delay-100 after:duration-1500 hover:bg-primary hover:after:left-[110%] ${btnClassName}`}
    >
      {icon}
      {text}
    </Button>
  )
}
