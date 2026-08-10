"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface OperationalUseCaseCardProps {
  /** Number badge (e.g., "01", "02") */
  number: string;
  /** Lucide React icon component */
  icon: LucideIcon;
  /** Card title/heading */
  title: string;
  /** Supporting description text */
  description: string;
  /** Additional CSS classes */
  className?: string;
}

export default function OperationalUseCaseCard({
  number,
  icon: Icon,
  title,
  description,
  className = "",
}: OperationalUseCaseCardProps) {
  return (
    <article
      className={cn(
        "relative group flex flex-col items-center justify-between p-6 md:p-8 bg-white border-2 border-gray-300 h-[520px]",
        "transition-all duration-300 hover:-translate-y-1",
        className
      )}
      // style={{ willChange: "transform, opacity, box-shadow, border-color" }}
    >
      {/* Ovalay animation */}
      <div className="anim-overlay absolute top-full left-full inset-0 bg-[#587FFF] to-transparent z-[-1]" />

      {/* Number Badge - Top */}
      <div className="w-full">
        <span className="inline-flex items-center justify-center transform duration-300 group-hover:text-white w-8 h-8 text-2xl font-bold">
          {number}
        </span>
      </div>

      <div className="relative mb-6 group-hover:scale-110 transition-all transform duration-300 group-hover:text-white">
        <Icon size={200} strokeWidth={.5} aria-hidden="true" />
      </div>

      {/* Icon - Center */}
      <div className="w-full">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold transition duration-300 text-black group-hover:text-white mb-3 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 transform duration-300 group-hover:text-white text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}