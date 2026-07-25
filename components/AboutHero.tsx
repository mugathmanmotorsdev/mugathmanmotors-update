"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";
import SectionLabel from "./SectionLabel";

gsap.registerPlugin(ScrollTrigger);

export interface AboutHeroProps {
  /** Main heading */
  title: string;
  /** Description paragraphs */
  description: string[];
  /** Background image URL */
  image: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Section label text */
  sectionLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

export default function AboutHero({
  title,
  description,
  image,
  imageAlt = "About Mugathman Motors",
  sectionLabel = "About Us",
  className = "",
}: AboutHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const prefersReduced = prefersReducedMotion();

    // Set initial state for reduced motion
    if (prefersReduced) {
      gsap.set(content.querySelectorAll("h1, h2, p"), { opacity: 1, y: 0 });
      return;
    }

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Entrance animation for content
      gsap.fromTo(
        content.querySelectorAll("h1, h2, p"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-white mt-32 max-w-8xl mx-auto px-6 md:px-12 space-y-8 mb-20 ${className}`}
      aria-label={`${sectionLabel} section`}
    >
      {/* Top Image - Half Screen Height */}
      <div>
        <h1 className="text-7xl font-bold">About Us</h1>
      </div>
      <div className="relative h-[50vh] min-h-[300px] max-h-[500px] max-w-8xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority  
          sizes="100vw"
        />
      </div>

      {/* Content Block Below Image */}
      <div
        ref={contentRef}
        className="max-w-8xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left: Section Label */}
          <div className="md:w-1/3 flex-shrink-0 pt-4 md:pt-0">
            <SectionLabel text={sectionLabel} />
          </div>

          {/* Right: About Text Content */}
          <div className="md:w-2/3">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {description.map((paragraph, index) => (
                <p key={index} className="text-lg md:text-xl">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}