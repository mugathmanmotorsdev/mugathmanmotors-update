"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";
import SectionLabel from "./SectionLabel";
import { Construction, Fuel, Landmark, Truck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    number: "01",
    title: "Logistics & Haulage",
    description: "Efficient transport solutions for cargo movement and fleet operations.",
    image: "/dump-truck.jpeg",
    icon: Truck,
  },
  {
    number: "02",
    title: "Oil & Gas / LPG",
    description: "Specialized tankers and trailers for petroleum and LPG transportation.",
    image: "/lpg-tank.png",
    icon: Fuel,
  },
  {
    number: "03",
    title: "Construction & Infrastructure",
    description: "Heavy-duty trucks and equipment for construction and infrastructure projects.",
    image: "/product-6.jpeg",
    icon: Construction,
  },
  {
    number: "04",
    title: "Corporate & Government Procurement",
    description: "Reliable vehicles for corporate and government fleet operations.",
    image: "/car.jpg",
    icon: Landmark,
  },
];

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle reduced motion preference - ensure elements are visible without animation
    if (prefersReducedMotion()) {
      gsap.set(".industry-card", { opacity: 1, y: 0, scale: 1 });
      return;
    }

    // Initial scroll animation for cards entering the viewport
    gsap.fromTo(
      ".industry-card",
      { opacity: 0, y: 50, scale: 0.95 },  // Start state: invisible, offset down, slightly scaled
      {
        opacity: 1,     // End state: fully visible
        y: 0,          // End state: original vertical position
        scale: 1,      // End state: original scale
        duration: 0.8, // Animation duration
        stagger: 0.15, // Delay between each card's animation
        ease: "power2.out", // Easing function for smooth deceleration
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",   // Animation starts when top reaches 80% of viewport
          end: "top 20%",     // Animation ends when top reaches 20% of viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      }
    );

    // Create a type-safe interface to store card animation state
    interface CardAnimationState {
      timeline: GSAPTimeline;        // GSAP timeline for this specific card
      enterHandler: () => void;     // Event handler for mouseenter
      leaveHandler: () => void;     // Event handler for mouseleave
    }

    // Map to store card element → animation state relationships
    // Using Map instead of polluting the HTMLElement with event handlers
    const cardStates = new Map<HTMLElement, CardAnimationState>();

    // Function to setup hover animations for a single card with proper validation
    const setupCardAnimations = (card: HTMLElement): GSAPTimeline | null => {
      // Safely query animation elements with validation
      const overlay = card.querySelector(".anim-overlay");
      const icon = card.querySelector(".icon");

      // Defensive programming: Check if required elements exist
      if (!overlay || !icon) {
        console.warn("Missing animation elements in IndustriesSection card");
        return null;
      }

      // Return a new timeline for card hover animations
      // Timeline starts paused, animations play on mouseenter, reverse on mouseleave
      return gsap.timeline({paused: true})
        .to(overlay, {
          top: 0,     // Animate overlay to cover entire container (from top-full state)
          left: 0,    // Animate overlay to cover entire container (from left-full state)
        })
        .to(icon, {
          autoAlpha: 1  // Fade in the icon (from invisible state)
        }, 0.2); // Stagger icon animation by 0.2 seconds after overlay animation starts
    };

    // Select all industry cards for animation setup
    const cards = document.querySelectorAll(".industry-card");

    // Setup hover animations for each card with error handling
    cards.forEach(card => {
      try {
        const timeline = setupCardAnimations(card as HTMLElement);
        if (timeline) {
          // Create event handlers that reference the specific timeline
          const enterHandler = () => timeline.restart();
          const leaveHandler = () => timeline.reverse();

          // Store animation state in type-safe Map (prevents memory leaks)
          cardStates.set(card as HTMLElement, {
            timeline,
            enterHandler,
            leaveHandler
          });

          // Attach event listeners for hover effects
          card.addEventListener("mouseenter", enterHandler);
          card.addEventListener("mouseleave", leaveHandler);
        }
      } catch (error) {
        console.error("Failed to setup IndustriesSection animation:", error);
      }
    });

    // Cleanup function: Essential to prevent memory leaks and remove event listeners
    // This runs when component unmounts or re-renders
    return () => {
      // Kill all active timelines and remove event listeners for each card
      cardStates.forEach(({ timeline, enterHandler, leaveHandler }, card) => {
        timeline.kill();  // Stop and cleanup GSAP timeline
        card.removeEventListener("mouseenter", enterHandler); // Remove mouseenter listener
        card.removeEventListener("mouseleave", leaveHandler); // Remove mouseleave listener
      });
      cardStates.clear(); // Clear the Map to release references
    };
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
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return(
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Ovalay animation */}
                <div className="anim-overlay absolute top-full left-full inset-0 bg-[#587FFF] to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 h-full flex flex-col justify-between items-center">
                  <span className="w-full font-bold text-lg mb-2 block">
                    {industry.number}
                  </span>

                  <div className="icon invisible relative mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={200} strokeWidth={.5} aria-hidden="true" />
                  </div>

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
            )
          })}
        </div>
      </div>
    </section>
  );
}
