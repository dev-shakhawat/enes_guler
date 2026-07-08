"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../common/container";
import { TCategoriesSectionProps, TCategoryItem, TCategorySpan } from "@/types";

 




 
const DEFAULT_CATEGORIES: TCategoryItem[] = [
  {
    id: "bags",
    title: "Bags",
    itemCount: 1200,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1400&auto=format&fit=crop",
    href: "/categories/bags",
    span: "large",
  },
  {
    id: "ready-to-wear",
    title: "Ready-to-Wear",
    itemCount: 946,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/ready-to-wear",
    span: "tall",
  },
  {
    id: "shoes",
    title: "Shoes",
    itemCount: 864,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
    href: "/categories/shoes",
  },
  {
    id: "jewelry",
    title: "Jewelry",
    itemCount: 431,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    href: "/categories/jewelry",
  },
  {
    id: "outerwear",
    title: "Outerwear",
    itemCount: 592,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    href: "/categories/outerwear",
  },
  {
    id: "accessories",
    title: "Accessories",
    itemCount: 718,
    image:
      "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?q=80&w=1000&auto=format&fit=crop",
    href: "/categories/accessories",
  },
  {
    id: "sunglasses",
    title: "Sunglasses",
    itemCount: 267,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop",
    href: "/categories/sunglasses",
  },
  {
    id: "watches",
    title: "Watches",
    itemCount: 189,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop",
    href: "/categories/watches",
  },
];

 
const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.06,
    clipPath: "inset(0% 0% 100% 0%)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 1.05, ease: EXPO_OUT },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "110%" },
  visible: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.8, delay: i * 0.06, ease: EXPO_OUT },
  }),
};

function getSpanClasses(span: TCategorySpan = "normal"): string {
  if (span === "large") return "col-span-2 row-span-2";
  if (span === "tall") return "row-span-2";
  return "";
}

 
function CategoryMarquee({ items }: { items: TCategoryItem[] }) {
  const names = items.map((c) => c.title);
  const loop = [...names, ...names];

  return (
    <div className="relative my-12 overflow-hidden border-y border-[#141311]/10 py-3">
      <motion.div
        className="flex w-max shrink-0 items-center gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
      >
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center gap-6 text-xs font-medium uppercase tracking-[0.28em] text-[#141311]/50"
          >
            {name}
            <span className="text-[#B08D57]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 *  Card — magnetic tilt, scroll-linked parallax, duotone hover reveal
 *  and animated viewfinder corners.
 * ------------------------------------------------------------------
 */
function CategoryCard({ category }: { category: TCategoryItem }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Pointer position within the card, normalised -0.5 → 0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const tiltSpring = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), tiltSpring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), tiltSpring);
  const glowX = useSpring(useTransform(px, [-0.5, 0.5], [0, 100]), tiltSpring);
  const glowY = useSpring(useTransform(py, [-0.5, 0.5], [0, 100]), tiltSpring);

  // Scroll-linked parallax on the image itself
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]),
    { stiffness: 80, damping: 22, mass: 0.6 }
  );

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative ${getSpanClasses(category.span)}`}
      style={{ perspective: 1200 }}
    >
      <Link
        href={category.href}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative block h-full w-full overflow-hidden rounded-[2px] bg-[#F3F1EC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-4"
        aria-label={`Browse ${category.title}, ${category.itemCount} items`}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-full w-full overflow-hidden"
        >
          {/* Parallax image layer, oversized so panning never shows edges */}
          <motion.div
            style={{ y: parallaxY }}
            className="absolute inset-[-10%] h-[120%] w-full"
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover grayscale-[45%] contrast-[1.05] saturate-[0.9] transition-[filter,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.09] group-hover:grayscale-0 group-hover:saturate-100"
              priority={category.span === "large"}
            />
          </motion.div>

          {/* Legibility gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/0 transition-opacity duration-700 group-hover:opacity-90" />

          {/* Cursor-follow premium glow */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([gx, gy]) =>
                  `radial-gradient(320px circle at ${gx}% ${gy}%, rgba(255,255,255,0.55), transparent 70%)`
              ),
            }}
          />

          {/* Animated viewfinder corners */}
          {(["tl", "tr", "bl", "br"] as const).map((corner) => (
            <span
              key={corner}
              className={`pointer-events-none absolute h-4 w-4 border-white/80 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 ${
                corner === "tl"
                  ? "left-4 top-4 -translate-x-1 -translate-y-1 border-l border-t group-hover:translate-x-0 group-hover:translate-y-0"
                  : corner === "tr"
                  ? "right-4 top-4 translate-x-1 -translate-y-1 border-r border-t group-hover:translate-x-0 group-hover:translate-y-0"
                  : corner === "bl"
                  ? "bottom-4 left-4 -translate-x-1 translate-y-1 border-b border-l group-hover:translate-x-0 group-hover:translate-y-0"
                  : "bottom-4 right-4 translate-x-1 translate-y-1 border-b border-r group-hover:translate-x-0 group-hover:translate-y-0"
              }`}
            />
          ))}

          {/* Fine border that brightens on hover */}
          <div className="pointer-events-none absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-white/25" />

          {/* Copy */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7"
            style={{ transform: "translateZ(40px)" }}
          >
            <div>
              <h3
                className={`font-serif text-white ${
                  category.span === "large"
                    ? "text-3xl sm:text-4xl"
                    : "text-xl sm:text-2xl"
                }`}
              >
                {category.title}
              </h3>
              <span className="mt-1 block h-px w-0 bg-[#B08D57] transition-[width] duration-500 ease-out group-hover:w-12" />
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/75">
                {category.itemCount.toLocaleString()} items
              </p>
            </div>

            <span className="flex h-9 w-9 shrink-0 -translate-x-2 items-center justify-center rounded-full border border-white/40 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

 
export default function CategoriesSection({
  eyebrow = "Curated Edit",
  heading = "Shop by Category",
  description = "Considered pieces from the houses that define modern luxury — sorted the way you actually shop.",
  viewAllHref = "/categories",
  categories = DEFAULT_CATEGORIES,
}: TCategoriesSectionProps) {
  const headingWords = heading.split(" ");

  return (
    <section className="bg-[#FBFAF8] px-6 py-24 sm:px-10 lg:px-16">
      <Container >
        {/* Heading row */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#B08D57]">
              {eyebrow}
            </span>
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-bold font-oswald text-5xl text-black"
        >
          Shop by ,
          <span className=" font-dancing-script font-medium ml-1    ">
            Category
          </span>
        </motion.h2>
            <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              {description}
            </p>
          </div>

          <Link
            href={viewAllHref}
            className="group inline-flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#141311]"
          >
            <span className="relative">
              View all
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#B08D57] transition-[width] duration-500 ease-out group-hover:w-full" />
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-500 ease-out group-hover:translate-x-1"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        </motion.div>

        <CategoryMarquee items={categories} />

        {/* Dense bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{ gridAutoFlow: "dense" }}
          className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:auto-rows-[210px] lg:grid-cols-4"
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}