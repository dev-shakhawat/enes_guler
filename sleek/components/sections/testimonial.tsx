"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Container from "../common/container"
import { GoChevronRight } from "react-icons/go"
import CmnButton from "../common/cmn-button"
import { TTestimonial } from "@/types"
import TestimonialCard from "../common/testimonial-card"

export default function Testimonial({}: {}) {
  const [ref , instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 3.5, spacing: 10 },
    breakpoints: {
      "(min-width: 300px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 450px)": {
        slides: { perView: 1.5, spacing: 5 },
      }, 
      "(min-width: 750px)": {
        slides: { perView: 2.5, spacing: 5 },
      }, 
      "(min-width: 1000px)": {
        slides: { perView: 3.5, spacing: 10 },
      }, 
    },
    range: {
      min: -5,
      max: 5,
    },
  })

  return (
    <section className="bg-[#F3EEEA] py-5 md:py-10 lg:py-15 xl:py-20 mt-10 ">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="lg:text-2xl text-xl font-medium ">Over 2,000 Happy reviews</h2>

          <div className="hidden md:flex gap-4 ">
            {/* left btn */}
            <CmnButton
            onClick={() => instanceRef.current?.prev()}
            btnClassName="rotate-180 border border-muted-foreground text-primary rounded-full w-10 h-10 hover:text-white " icon={<GoChevronRight />} />

            {/* right btn */}
            <CmnButton 
            onClick={() => instanceRef.current?.next()}
            btnClassName="border border-muted-foreground text-primary rounded-full w-10 h-10 hover:text-white " icon={<GoChevronRight   />} />
          </div>
        </div>

        <div ref={ref} className="keen-slider lg:mt-10 mt-5   ">
          {testimonials.map((t, i) => (
            <TestimonialCard className={`keen-slider__slide`} key={i} {...t} />
          ))}
        </div>
      </Container>
    </section>
  )
}
 


export const testimonials: TTestimonial[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
    name: "Victoria H.",
    verified: true,
    review:
      "This eye cream is a game-changer. Reduced puffiness and dark circles significantly. Gentle on sensitive skin.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80",
    name: "Jaroslava K.",
    verified: true,
    review:
      "This clay mask deeply cleanses my pores and leaves my skin feeling smooth and refreshed. Perfect for weekly use.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
    name: "Alexandra M.",
    verified: true,
    review:
      "This moisturizer left my skin feeling incredibly soft and hydrated. No greasy residue. Perfect for daily use!",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
    name: "Danielle S.",
    verified: true,
    review:
      "The serum noticeably improved my skin's texture and fine lines after a few weeks. It absorbs quickly and feels lightweight.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80",
    name: "Emily R.",
    verified: true,
    review:
      "I've tried many skincare products, but this one stands out. My skin feels healthier, brighter, and smoother than ever.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&auto=format&fit=crop&q=80",
    name: "Sophia L.",
    verified: true,
    review:
      "Absolutely love this product! It keeps my skin hydrated all day without feeling heavy. Highly recommended.",
  },
]