import { TFeature } from "@/types/featurelist.type"
import Container from "../common/container"
import { Button } from "../ui/button"
import { IoCheckmark } from "react-icons/io5"

export default function FeatureList({}: {}) {
  const features: TFeature[] = [
    {
      id: 1,
      label: "Free Shipping",
      href: "#",
    },
    {
      id: 2,
      label: "Money Guarantee",
      href: "#",
    },
    {
      id: 3,
      label: "Flexible Payment",
      href: "#",
    },
    {
      id: 4,
      label: "Online Support",
      href: "#",
    },
    {
      id: 5,
      label: "Return within 7 days",
      href: "#",
    },
  ]

  return (
    <section className="mt-20">
      <Container>
        <div className="flex items-center gap-4 justify-center   ">
          {features.map((f, i) => (
            <Button
              key={i}
              className="group flex items-center gap-2 rounded-full border border-primary/20 bg-transparent px-2 py-5 text-primary transition-all duration-500 hover:bg-primary hover:text-white cursor-pointer  "
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/15 text-primary transition-all duration-500 group-hover:bg-white">
                <IoCheckmark />
              </span>
              {f.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  )
}
