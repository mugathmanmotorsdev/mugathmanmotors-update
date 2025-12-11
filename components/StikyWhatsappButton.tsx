"use client";

import { gtmevent } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";


export default function StikyWhatsAppButton() {

  return (
    <a
      href="https://wa.me/2348033395299?text=Hello%20Mugathman%20Motors%2C%20I%27m%20interested%20in%20your%20trucks."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 md:w-25 md:h-25 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg transition-colors hover:scale-110 duration-300"
    >
     <FaWhatsapp 
     className="size-10 md:size-16"
     onClick={gtmevent} />
    </a>
  );
}
