"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
    if (typeof window !== "undefined") {
        window.location.href = `https://wa.me/2348033395299?text=Hello%20Mugathman%20Motors%2C%20I%27m%20interested%20in%20your%20trucks.`; // Replace with your WhatsApp number
    }

    return(
        <div className="h-[90vh] flex flex-col justify-center items-center px-10 text-center">
            <FaWhatsapp className="size-40 text-green-500 m-10" />
            <h1 className="text-3xl font-bold">Redirecting to WhatsApp...</h1>
            <p className="mt-4 text-lg">You will be redirected to WhatsApp shortly.</p> 
        </div>
    )
}