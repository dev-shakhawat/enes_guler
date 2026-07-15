import Image from "next/image"
import Container from "../common/container"
import papain from "@/public/images/papain.webp"

export default function VideoWithText({}: {}) {
  return (
    <section className="mt-20">
      <Container>
        <div className="grid max-h-100 grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2">
          {/* image */}
          <div className="overflow-hidden">
            <iframe
              className="h-100 w-full "
              src="https://www.youtube.com/embed/y-zQovGOmVI?si=xJFPi8LmiORQ6EZl&autoplay=1&mute=1&playsinline=1&rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* text */}
          <div className="flex h-full flex-col justify-center bg-[#F0EEEF] px-23 text-center">
            <p className="font-brico">Safety Ingredients</p>
            <h3 className="my-4 font-poppins text-2xl font-semibold">
              Why we stand behind it
            </h3>
            <p className="font-poppins text-[12px]">
              We stand behind our products because we believe in their efficacy
              and quality. Our formulations are meticulously crafted using
              clinically proven ingredients to deliver visible results. From
              research to production, every step is guided by our commitment to
              excellence. We prioritize transparency, integrity, and customer
              satisfaction, ensuring you can trust and love the products you
              use.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
