"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(contentRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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
      className="relative bg-black text-white overflow-hidden min-h-[100vh]"
      aria-label="Call to action"
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dump-truck-hero.png"
          alt="Heavy-duty dump truck for commercial vehicle solutions"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black  to-black/20" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-8xl mx-auto px-6 md:px-12 min-h-[100vh]"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="flex flex-col justify-end md:flex-row md:items-end md:justify-between gap-8 min-h-[90vh]">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Looking for Reliable Commercial Vehicle Solutions?
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              Speak with our team about vehicle procurement, fleet sourcing,
              transport equipment, or industrial vehicle needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#587FFF] hover:bg-[#4a6fe6] text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
