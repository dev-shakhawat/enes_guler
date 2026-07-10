"use client"
import { Container } from "@/components/common/container";
import { AnimatedTestimonials } from "./card";
import { motion } from "motion/react";




export default function Testimonial() {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return <div className="bg-white relative z-10 ">

        <Container  >
            <div className=" text-center ">

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
                    Our
                    <span className="ml-2 font-bold text-transparent [-webkit-text-stroke:1px_#000000]">
                        Testimonials
                    </span>
                </motion.h2>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: -40,
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
                        delay: 0.15,
                    }}
                    className="mt-4 max-w-125 text-base mx-auto "
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum atque nemo enim ad excepturi corrupti natus autem at dignissimos?
                </motion.p>
            </div>

        </Container>



        <AnimatedTestimonials testimonials={testimonials} />

    </div>;
}

