"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    number: 1,
    title: "Logistics & Haulage",
    description: "Reliable transport solutions for cargo movement and fleet operations.",
  },
  {
    number: 2,
    title: "Oil & Gas / LPG",
    description: "Specialized tankers and trailers for petroleum and LPG transportation.",
  },
  {
    number: 3,
    title: "Construction & Infrastructure",
    description: "Heavy-duty trucks and equipment for construction and infrastructure projects.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const progressLine = progressLineRef.current;
    if (!section || !container || !progressLine) return;

    if (prefersReducedMotion()) {
      gsap.set(".benefit-item", { opacity: 1, x: 0 });
      gsap.set(progressLine, { background: "#587FFF" });
      return;
    }

    // Create a GSAP context
    const ctx = gsap.context(() => {
      // Use matchMedia for responsive animations
      ScrollTrigger.matchMedia({
        // Desktop and tablet: pin with progressive line
        "(min-width: 768px)": function () {
          // Pin the section during scroll
          ScrollTrigger.create({
            trigger: section as gsap.DOMTarget,
            start: "top top",
            end: "bottom bottom",
            pin: container,
            pinSpacing: true,
          });

          // Animate each benefit item
          const benefitItems = container.querySelectorAll(".benefit-item");
          benefitItems.forEach((item) => {
            gsap.fromTo(
              item,
              { opacity: 0, x: -30 },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 80%",
                  end: "top 30%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });

          // Progressive line coloring
          gsap.to(progressLine, {
            background: "#587FFF",
            scrollTrigger: {
              trigger: section as gsap.DOMTarget,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });
        },
        // Mobile: simple scroll-triggered animations
        "(max-width: 767px)": function () {
          // No pinning on mobile, just fade in items
          const benefitItems = container.querySelectorAll(".benefit-item");
          benefitItems.forEach((item, i) => {
            gsap.fromTo(
              item,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });

          // Show progress line immediately on mobile
          gsap.set(progressLine, { background: "#587FFF" });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white" aria-label="Why choose us">
      <div
        ref={containerRef}
        className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="inline-block text-sm font-semibold text-[#587FFF] mb-3">
              Why Choose US
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Why Businesses Work With Mugathman Motors
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Solutions tailored to the requirements of logistics, oil & gas,
              construction, government, and corporate transport operations.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left Side - Benefits List */}
          <div className="flex-1 relative">
            {/* Progress Line */}
            <div
              ref={progressLineRef}
              className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200"
              style={{ zIndex: 0 }}
            />

            {/* Benefit Items */}
            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="benefit-item relative flex gap-6"
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-[#587FFF] font-bold text-lg shadow-sm">
                      {benefit.number}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-black mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
              <Image
                src="/why-choose-us.jpg"
                alt="Why businesses work with Mugathman Motors"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
