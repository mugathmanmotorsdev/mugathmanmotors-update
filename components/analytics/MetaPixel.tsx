"use client";

import { useEffect } from "react";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function MetaPixel() {
  useEffect(() => {
    if (!PIXEL_ID) return;

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      return;
    }

    const script = document.createElement("script");
    script.src = `https://connect.facebook.net/en_US/fbevents.js`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (typeof window.fbq === "function") {
        window.fbq("init", PIXEL_ID);
        window.fbq("track", "PageView");
      }
    };

    return () => {
      // Keep fbq alive for the lifetime of the app
    };
  }, []);

  return null;
}