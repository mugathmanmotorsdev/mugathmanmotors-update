"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics/meta";

export default function PageViewTracker() {
  const pathname = usePathname();
  const trackedPathRef = useRef<string | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (trackedPathRef.current === pathname) return;
    trackedPathRef.current = pathname;
    trackPageView();
  }, [pathname]);

  return null;
}