"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import CmnButton from "./cmn-button";
import { GoChevronRight } from "react-icons/go";

export type CollectionCardProps = {
    title: string;
    description: string;
    price?: string;
    image: string;
    href?: string;
    buttonText?: string;
    prev: () => void;
    next: () => void;
};

export default function CollectionCard({
    title,
    description,
    price,
    image,
    href = "#",
    buttonText = "SHOP NOW",
    prev,
    next,
}: CollectionCardProps) {
    const imgWrapRef = useRef<HTMLDivElement>(null);
    const [zoom, setZoom] = useState(false);
    const [pos, setPos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = imgWrapRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
    };

    return (
        <div className="group relative overflow-hidden rounded-[24px] bg-[#0b0b0b] pb-24 sm:rounded-[32px] lg:pb-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(to_bottom,#050505,#171717,#242424)]" />
            <div className="absolute -right-16 top-6 h-48 w-48 rounded-full bg-white/5 blur-3xl sm:-right-24 sm:top-10 sm:h-72 sm:w-72" />

            {/* Large zoom preview - desktop only, overlays left text area on hover */}
            {zoom && (
                <div
                    className="pointer-events-none absolute inset-y-10 left-14 right-[52%] z-30 hidden rounded-[24px] lg:block"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "220%",
                        backgroundPosition: `${pos.x}% ${pos.y}%`,
                        backgroundColor: "#0b0b0b",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                    }}
                />
            )}

            <div className="relative z-10 grid h-full grid-cols-1 items-center gap-8 px-6 py-8 sm:gap-10 sm:px-8 sm:py-10 lg:grid-cols-2 lg:px-14">
                <div className="max-w-full text-center lg:max-w-[420px] lg:text-left">
                    <h2 className="whitespace-pre-line font-brico text-3xl font-black leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        {title}
                    </h2>
                    {price && (
                        <p className="mt-4 text-xl font-semibold text-white sm:mt-6 sm:text-2xl md:text-3xl">
                            ${price}
                        </p>
                    )}
                    <p className="mx-auto mt-4 max-w-[320px] text-sm leading-6 text-white/45 sm:mt-7 sm:max-w-none sm:text-[15px] sm:leading-7 lg:mx-0">
                        {description}
                    </p>
                    <Link
                        href={href}
                        className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-[#dfe6ef] px-7 text-xs font-semibold tracking-[0.15em] text-black transition-all duration-300 hover:scale-105 hover:bg-white sm:mt-10 sm:h-14 sm:px-9 sm:text-sm"
                    >
                        {buttonText}
                    </Link>
                </div>

                <div className="relative flex items-center justify-center">
                    <div
                        ref={imgWrapRef}
                        onMouseEnter={() => setZoom(true)}
                        onMouseLeave={() => setZoom(false)}
                        onMouseMove={handleMouseMove}
                        className="relative z-[2] h-52 w-52 overflow-hidden rounded-full bg-cover bg-center bg-no-repeat transition-all duration-500 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 lg:cursor-zoom-in lg:group-hover:-translate-y-3 lg:group-hover:scale-105"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                </div>
            </div>

            <div className="absolute bottom-4 right-1/2 z-[2] flex translate-x-1/2 gap-3 sm:right-6 sm:translate-x-0 lg:right-10 lg:gap-4">
                <CmnButton
                    onClick={prev}
                    btnClassName="rotate-180 border border-muted-foreground text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 hover:text-white"
                    icon={<GoChevronRight />}
                />
                <CmnButton
                    onClick={next}
                    btnClassName="border border-muted-foreground text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 hover:text-white"
                    icon={<GoChevronRight />}
                />
            </div>
        </div>
    );
}