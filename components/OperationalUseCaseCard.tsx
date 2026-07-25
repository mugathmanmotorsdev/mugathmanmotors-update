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
        "transition-all duration-300 hover:shadow-lg hover:border-[#587FFF] hover:-translate-y-1",
        className
      )}
      style={{ willChange: "transform, opacity, box-shadow, border-color" }}
    >
      {/* Number Badge - Top */}
      <div className="w-full">
        <span className="inline-flex items-center justify-center w-8 h-8 text-2xl font-bold">
          {number}
        </span>
      </div>

      <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={200} strokeWidth={.5} aria-hidden="true" />
      </div>

      {/* Icon - Center */}
      <div className="w-full">  
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-black mb-3 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}