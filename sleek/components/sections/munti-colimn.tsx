import { TColumn } from "@/types/multicolumn.type"
import Container from "../common/container"
import { Leaf, Rabbit, Sprout, FlaskConicalOff } from "lucide-react"

export default function MultiColumn({}: {}) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#F5F5F5]">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-medium">{feature.title}</h3>

              <p className="mt-3 max-w-65 text-[14px] line-clamp-2 leading-7 text-black/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export const features: TColumn[] = [
  {
    id: 1,
    icon: <Leaf className="h-7 w-7" />,
    title: "Earth Lover",
    description:
      "Discover sustainable beauty essentials at Earth Lover beauty store.",
  },
  {
    id: 2,
    icon: <Rabbit className="h-7 w-7" />,
    title: "Cruelty Free",
    description:
      "Find guilt-free beauty essentials at Cruelty Free beauty store.",
  },
  {
    id: 3,
    icon: <Sprout className="h-7 w-7" />,
    title: "100% Organic",
    description:
      "Discover natural skincare treasures at our 100% Organic beauty haven.",
  },
  {
    id: 4,
    icon: <FlaskConicalOff className="h-7 w-7" />,
    title: "Paraben Free",
    description:
      "Unveil clean beauty secrets at our Paraben-Free skincare sanctuary.",
  },
]
