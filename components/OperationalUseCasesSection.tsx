"use client";

import { JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";
import OperationalUseCaseCard from "./OperationalUseCaseCard";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionLabel from "./SectionLabel";
import {
  Truck,
  Factory,
  Fuel,
  Warehouse,
  Construction,
  Pickaxe,
  TowerControl,
  Container,
  Barrel,
  Building2,
  Leaf,
  Sprout,
  Fence,
  Handshake,
  UserLock,
  Landmark,
  Gem,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface UseCase {
  number: string;
  icon: string;
  title: string;
  description: string;
}

function getIconCompment(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    Truck: Truck,
    Factory: Factory,
    Fuel: Fuel,
    Warehouse: Warehouse,
    Construction: Construction,
    Pickaxe: Pickaxe,
    TowerControl: TowerControl,
    Container: Container,
    Barrel: Barrel,
    Building2: Building2,
    Leaf: Leaf,
    Sprout: Sprout,
    Fence: Fence,
    Handshake: Handshake,
    UserLock: UserLock,
    LandMark: Landmark,
    Gem: Gem,
  };
  return map[name] as LucideIcon;
}

interface OperationalUseCasesSectionProps {
  /** Section badge/label */
  badge?: string;
  /** Main section heading */
  heading?: string;
  /** Optional subheading */
  subheading?: string;
  /** Additional CSS classes */
  className?: string;
  //usecases
  useCases: UseCase[],
}

export default function OperationalUseCasesSection({
  badge = "Operational Use Cases",
  heading = "Built for Demanding Commercial Operations",
  subheading = "Four core capabilities that power logistics, energy, construction, and enterprise transport across West Africa.",
  useCases,
  className = "",
}: OperationalUseCasesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) {
      gsap.set(".use-case-card", { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // Staggered card reveal
      gsap.fromTo(
        ".use-case-card",
        { opacity: 0, y: 40, scale: 0.95 },
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
    }, section);

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

      // Defensive programming: Check if required elements exist
      if (!overlay) {
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
    };

    // Select all industry cards for animation setup
    const cards = document.querySelectorAll(".use-case-card");

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

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn("py-20 md:py-32 bg-white", className)}
      aria-label="Operational use cases"
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Section Header - Centered */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <SectionLabel text={badge} />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            {heading}
          </h2>
          {subheading && (
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {subheading}
            </p>
          )}
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <OperationalUseCaseCard
              key={index}
              number={useCase.number}
              icon={getIconCompment(useCase.icon)}
              title={useCase.title}
              description={useCase.description}
              className="use-case-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}