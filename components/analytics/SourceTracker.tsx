"use client";

import { useEffect } from "react";
import { captureSource } from "@/lib/analytics/source";

export default function SourceTracker() {
    useEffect(() => {
        captureSource();
    }, []);

    return null;
}