"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

export interface ProductsHeroProps {
  /** Main hero title */
  title: string;
  /** Subtitle/description text */
  description?: string;
  /** Background image URL (relative to public folder or full URL) */
  backgroundImage: string;
  /** Alt text for background image */
  backgroundImageAlt?: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Category/badge text displayed above title */
  category?: string;
  /** Minimum height of hero section */
  minHeight?: string;
  /** Whether to show scroll-triggered parallax effect on background */
  parallax?: boolean;
  /** Parallax speed (0-1) */
  parallaxSpeed?: number;
  /** Additional CSS classes for the section */
  className?: string;
}

export default function ProductsHero({
  title,
  description,
  backgroundImage,
  backgroundImageAlt = "Product hero background",
  ctaText = "Get a Quote",
  ctaHref = "/contact",
  category,
  minHeight = "min-h-[90vh]",
  parallax = true,
  parallaxSpeed = 0.3,
  className = "",
}: ProductsHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bgImage = bgImageRef.current;
    if (!section || !content) return;

    const prefersReduced = prefersReducedMotion();

    // Set initial state for reduced motion
    if (prefersReduced) {
      gsap.set(content.querySelectorAll("h1, p, a"), { opacity: 1, y: 0 });
      if (bgImage) {
        gsap.set(bgImage, { y: 0 });
      }
      return;
    }

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo(
        content.querySelectorAll("h1, p, a"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.2,
        }
      );

    //   // Parallax effect on background image
    //   if (parallax && bgImage) {
    //     gsap.to(bgImage, {
    //       y: () => -window.innerHeight * parallaxSpeed,
    //       ease: "none",
    //       scrollTrigger: {
    //         trigger: section,
    //         start: "top top",
    //         end: "bottom top",
    //         scrub: true,
    //       },
    //     });
    //   }

    //   // Scroll-triggered fade out of content
    //   gsap.to(content.querySelectorAll("h1, p, a"), {
    //     opacity: 0,
    //     y: -30,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: section,
    //       start: "bottom 80%",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   });
    }, section);

    // Cleanup
    return () => ctx.revert();
  }, [parallax, parallaxSpeed]);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-[100vh] flex items-center overflow-hidden bg-black ${minHeight} ${className}`}
      aria-label={`${category ? `${category} ` : ""}Hero section`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          ref={bgImageRef}
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          className="object-cover transition-transform duration-1000"
          priority
          sizes="100vw"
        />
        {/* Bottom-to-top gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"
        />
      </div>

      {/* Content - Text block at bottom, side-by-side on desktop */}
      <div
        ref={contentRef}
        className="relative flex items-end z-10 w-full h-full max-w-8xl mx-auto px-6 md:px-12 pb-20"
      >
        <div className="flex flex-col md:flex-row md:justify-between gap-12 items-center border-t-2 border-white">
          {/* Left: Category + Heading */}
          <div className="md:basis-1/2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {title}
            </h1>
          </div>

          {/* Right: Description + CTA */}
          {description || ctaText ? (
            <div className="md:basis-1/2 text-right lg:text-left max-w-xl mx-auto lg:mx-0">
              {description && (
                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                  {description}
                </p>
              )}
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 bg-[#587FFF] hover:bg-[#4a6fe6] text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                {ctaText}
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
          ) : null}
        </div>
      </div>
    </section>
  );
}