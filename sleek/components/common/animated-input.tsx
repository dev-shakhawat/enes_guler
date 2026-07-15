import { GoArrowRight } from "react-icons/go";





export default function AnimatedInput(
    {
        title
    }
    : 
    {
        title: string

    }) {
  return (
    <div className="relative  ">
      <input
        id="name"
        type="text"
        placeholder=" "
        className="peer h-14 w-full border border-gray-300 rounded-full  bg-transparent px-0 text-base outline-none focus:border-primary pl-3 pr-10    "
      />
      <GoArrowRight className="absolute top-1/2 -translate-y-1/2 right-3 text-muted-foreground   " size={22} />

      <label
        htmlFor="name"
        className="pointer-events-none absolute top-3 origin-left left-4 text-gray-500 transition-all duration-200 peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-placeholder-shown:top-4.25 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs  "
      >
        {title}
      </label>
 
    </div>
  )
}
