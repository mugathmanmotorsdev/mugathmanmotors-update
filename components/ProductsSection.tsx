"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";
import SectionLabel from "./SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    image: "/dump-truck.jpeg",
    alt: "Dump truck for sale in Kano Nigeria",
    title: "Dump Truck",
    description: "Built for construction, mining, and heavy-duty material transportation.",
    href: "/dump-trucks",
  },
  {
    image: "/tractor-head.png",
    alt: "Tractor head for heavy logistics",
    title: "Tractor Head",
    description: "Reliable hauling solutions for freight, logistics, and commercial transport.",
    href: "/tractor-heads",
  },
  {
    image: "/lpg-tank.png",
    alt: "LPG tank trailer for energy operations",
    title: "LPG Tank Trailer",
    description: "Safe and efficient LPG transportation for energy and industrial operations.",
    href: "/lpg-tank-trailers",
  },
  {
    image: "/tractor-2.png",
    alt: "Farm tractor for agriculture",
    title: "Tractor",
    description: "Reliable farming equipment for cultivation, planting, and harvesting.",
    href: "/tractors",
  },
  {
    image: "/car.jpg",
    alt: "Passenger car for sale in Nigeria",
    title: "Car",
    description: "Quality passenger vehicles for personal, corporate, and government use.",
    href: "/cars",
  },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(".product-card", { opacity: 1, y: 0, scale: 1 });
      return;
    }

    // Staggered card reveal
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white" aria-label="Our products">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <SectionLabel text="Our Products" />
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Commercial Transport Solutions
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Explore selected transport equipment and vehicle categories designed for
              logistics, industrial operations, and commercial heavy-duty transport requirements.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.href}
              className="product-card group relative overflow-hidden h-[280px] md:h-[620px] block"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Image */}
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
