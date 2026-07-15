import { TTestimonial } from "@/types"
import Image from "next/image"

 

export default function TestimonialCard({
  image,
  name,
  verified = true, 
  review,
  className = "",
}: TTestimonial & { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[20px] bg-white ${className}`}
    >
      <div className="relative aspect-4/4 w-full overflow-hidden bg-[#f4f4f4]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-5 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-xl font-medium text-black">
            {name}
          </h3>

          {verified && (
            <span className="text-base text-black/60">
              Verified Buyer
            </span>
          )}
        </div>

        <p className="text-lg leading-8 text-black/85">
          {review}
        </p>
      </div>
    </div>
  )
}