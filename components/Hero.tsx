"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(
        contentRef.current?.querySelectorAll("h1, p, .cta-button, .stat-item") || [],
        { opacity: 1, y: 0 }
      );
      return;
    }

    // Hero entrance animation
    gsap.fromTo(
      contentRef.current?.querySelectorAll("h1, p, .cta-button, .stat-item") || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/howo-hero-2.png"
          alt="Heavy-duty truck for sale in Kano Nigeria"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full"
      >
        <div className="max-w-8xl mx-auto py-20 px-6 md:px-12 flex flex-col gap-8">
          <div className="max-w-2xl">
            <h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              Heavy-Duty Transport Solutions Built for Business Operations
            </h1>
            <p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              style={{ willChange: "transform, opacity" }}
            >
              From reliable trucks, trailers, and tractors to trailers, dozers, and tanks,
              Mugathman Motors delivers trusted vehicles and logistics solutions nationwide.
            </p>
            <div className="cta-button" style={{ willChange: "transform, opacity" }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#587FFF] hover:bg-[#4a6fe6] text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                Get a Quote
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats absolute -bottom-24 md:-bottom-36 right-0 md:right-0 flex gap-6 md:gap-10 bg-white">
          <div className="stat-item text-center p-4" style={{ willChange: "transform, opacity" }}>
            <div className="text-3xl md:text-4xl font-bold text-black ">07+</div>
            <div className="text-sm text-black">Years of Expertise</div>
          </div>
          <div className="stat-item text-center p-4" style={{ willChange: "transform, opacity" }}>
            <div className="text-3xl md:text-4xl font-bold text-black ">750+</div>
            <div className="text-sm text-black">Vehicles Delivered</div>
          </div>
          <div className="stat-item text-center p-4" style={{ willChange: "transform, opacity" }}>
            <div className="text-3xl md:text-4xl font-bold text-black ">160+</div>
            <div className="text-sm text-black">Brands Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
