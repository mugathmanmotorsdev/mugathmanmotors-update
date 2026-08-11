"use client";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";
import gsap from "gsap";

export default function ProductBrands({brandsImg}: {brandsImg: string[]}) {
    const brandsecRef = useRef<HTMLDivElement>(null);
    useEffect(() => {

        if (prefersReducedMotion()) {
            gsap.set(".brand-card", {
                opacity: 1,
                y: 0
            })

            return
        }

        gsap.fromTo(".brand-card", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: brandsecRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        return () => {
            gsap.killTweensOf(".brand-card");
        };
    }, [])
    return (
        <div 
        ref={brandsecRef}
        className="p-6 px-6 md:px-12 py-20 md:py-32">
            <div className="flex flex-col w-full items-center gap-4">
                <SectionLabel text="Available Brands" />
                <h2 className="text-3xl md:text-5xl font-semibold mb-4">Commercial Brands You Can Trust</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-4 mt-20">
                {brandsImg.map((img, index) => (
                    <div key={index} className="brand-card border p-4 text-center hover:border-blue-600 transition-colors">
                        <Image src={img} alt={`Brand logo ${index + 1}`} className="max-h-16 object-contain mx-auto" width={150} height={80} sizes="(max-width: 768px) 50vw, 200px" loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}