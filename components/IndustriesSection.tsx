"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";
import SectionLabel from "./SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    number: "01",
    title: "Logistics & Haulage",
    description: "Efficient transport solutions for cargo movement and fleet operations.",
    image: "/dump-truck.jpeg",
  },
  {
    number: "02",
    title: "Oil & Gas / LPG",
    description: "Specialized tankers and trailers for petroleum and LPG transportation.",
    image: "/lpg-tank.png",
  },
  {
    number: "03",
    title: "Construction & Infrastructure",
    description: "Heavy-duty trucks and equipment for construction and infrastructure projects.",
    image: "/product-6.jpeg",
  },
  {
    number: "04",
    title: "Corporate & Government Procurement",
    description: "Reliable vehicles for corporate and government fleet operations.",
    image: "/car.jpg",
  },
];

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(".industry-card", { opacity: 1, y: 0, scale: 1 });
      return;
    }

    gsap.fromTo(
      ".industry-card",
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-black text-white"
      aria-label="Industries we serve"
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel text="Industries We Serve" />
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto">
            Supporting High-Demand Industries
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card group relative overflow-hidden h-[300px] md:h-[550px] cursor-pointer"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Image */}
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 h-full flex flex-col justify-between">
                <span className="font-bold text-lg mb-2 block">
                  {industry.number}
                </span>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
