"use client";

import { useEffect, useRef } from "react";
import { trackViewContent } from "@/lib/analytics/meta";

interface ViewContentTrackerProps {
  slug: string;
  name: string;
}

export default function ViewContentTracker({ slug, name }: ViewContentTrackerProps) {
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    if (hasTrackedRef.current) return;
    hasTrackedRef.current = true;
    trackViewContent({ slug, name });
  }, [slug, name]);

  return null;
}
