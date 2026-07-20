"use client";
import { useEffect } from "react";
import { initAnimations } from "@/lib/gsap";

export default function AnimationInit() {
  useEffect(() => {
    // Initialize all animations
    initAnimations();
  }, []);

  return null;
}
