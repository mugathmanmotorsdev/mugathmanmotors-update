import { sendGTMEvent } from "@next/third-parties/google"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const gtmevent = () => {
  sendGTMEvent({
    event: "whatsapp_click"
  })
}