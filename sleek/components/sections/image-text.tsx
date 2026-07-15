import Image from "next/image"
import Container from "../common/container"
import papain from "@/public/images/papain.webp"

export default function ImageWithText({}: {}) {
  return (
    <section className="mt-20">
      <Container>
        <div className="grid grid-cols-1 rounded-2xl md:grid-cols-2 max-h-100 overflow-hidden  ">
          {/* text */}
          <div className="bg-[#F0EEEF] px-23 text-center flex flex-col justify-center h-full      ">
            <p className="  font-brico">Safety Ingredients</p>
            <h3 className="font-poppins text-2xl font-semibold my-4 ">
              A fruit enzyme that helps exfoliate and soften skin
            </h3>
            <p className="font-poppins text-[12px]">
              A fruit enzyme, such as bromelain from pineapple or papain from
              papaya, helps exfoliate and soften skin by breaking down and
              dissolving dead skin cells. This gentle exfoliation process
              reveals a smoother, brighter complexion and promotes cell
              turnover. Suitable for all skin types, it offers a natural and
              less abrasive alternative to traditional chemical exfoliants.
            </p>
          </div>

          {/* image */}
          <div className="overflow-hidden  ">
            <Image src={papain} alt="papain" width={1000} height={1000}
             className="h-full max-h-100  w-full object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
