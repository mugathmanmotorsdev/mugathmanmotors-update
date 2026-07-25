"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";
import SectionLabel from "./SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Industry Expertise",
    description: "Decades of experience in commercial transport and heavy-duty vehicles.",
  },
  {
    title: "Trusted Vehicle Brands",
    description: "Authorized partner for DAF, FAW, HOWO, Sinotruk, Shacman, and more.",
  },
  {
    title: "Transparent Pricing",
    description: "Competitive, upfront pricing with no hidden costs.",
  },
  {
    title: "Nationwide Delivery",
    description: "Delivery across Nigeria to your site or depot.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".benefit-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-32" aria-label="Why choose us">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <SectionLabel text="Why Choose Us" />
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Why Businesses Work With Mugathman Motors
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Solutions tailored to the requirements of logistics, oil & gas,
              construction, government, and corporate transport operations.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left Side - Benefits List */}
          <div className="flex-1 w-full lg:pr-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item flex gap-5">
                  {/* Number */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 w-full relative h-[400px] md:h-[500px] lg:h-[550px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/why-choose-us.png"
                alt="Why businesses work with Mugathman Motors"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}