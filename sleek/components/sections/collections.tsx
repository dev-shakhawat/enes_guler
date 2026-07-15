"use client"


import CollectionCard from "../common/collection-card";
import Container from "../common/container";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react";
import styles from "../css/collection.module.css";
import CmnButton from "../common/cmn-button";
import { GoChevronRight } from "react-icons/go";






export function Collection() {

    const [opacities, setOpacities] = useState<number[]>([])

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: collections.length,
        loop: true,
        detailsChanged(s) {
            const new_opacities = s.track.details.slides.map((slide) => slide.portion)
            setOpacities(new_opacities)
        },
    })



    return (
        <section className="h-150 relative ">

            <h2 className=" hidden md:block font-poppins text-4xl font-medium text-center mb-10   ">
                All collections here
            </h2>

            <Container>
                <div ref={sliderRef} className={styles.fader}>
                    {collections.map((c, idx) => (
                        <div
                            key={idx}
                            className={styles.fader__slide}
                            style={{ opacity: opacities[idx] }}
                        >
                            <CollectionCard
                                title={c.title}
                                description={c.description}
                                price={c.price}
                                image={c.image}
                                prev={() => instanceRef.current?.prev()}
                                next={() => instanceRef.current?.next()}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export const collections = [
    {
        title: "Apple\nWatch Ultra",
        price: "799",
        image:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200&q=80&auto=format&fit=crop",
        description:
            "Adventure-ready smartwatch with titanium body, precision GPS and exceptional battery life.",
    },
    {
        title: "Sony\nWH-1000XM5",
        price: "399",
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&auto=format&fit=crop",
        description:
            "Industry-leading noise cancelling headphones designed for immersive sound and all-day comfort.",
    },
    {
        title: "Nike\nAir Max",
        price: "189",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop",
        description:
            "Premium lifestyle sneakers combining lightweight cushioning with iconic streetwear style.",
    },
    {
        title: "Canon\nEOS R6",
        price: "2499",
        image:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80&auto=format&fit=crop",
        description:
            "Professional mirrorless camera with outstanding autofocus and low-light performance.",
    },
    {
        title: "MacBook\nPro M3",
        price: "1999",
        image:
            "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1200&q=80&auto=format&fit=crop",
        description:
            "Powerful laptop engineered for creators with an incredible Liquid Retina display.",
    },
    {
        title: "PlayStation\n5",
        price: "499",
        image:
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1200&q=80&auto=format&fit=crop",
        description:
            "Next-generation gaming console delivering ultra-fast loading and stunning 4K gameplay.",
    },
    {
        title: "DJI\nMini 4 Pro",
        price: "759",
        image:
            "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80&auto=format&fit=crop",
        description:
            "Compact intelligent drone capable of capturing breathtaking aerial photography and video.",
    },
    {
        title: "iPhone\n16 Pro",
        price: "1099",
        image:
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200&q=80&auto=format&fit=crop",
        description:
            "Flagship smartphone featuring a premium titanium design and professional camera system.",
    },
];