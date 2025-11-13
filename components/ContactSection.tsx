import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import InquiryForm from "./InquryForm";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
    
    return (
        <section id="contact-section" className="container mx-auto md:px-12 px-5 py-12">
          <div className="conainer mx-auto flex flex-col md:flex-row gap-16 items-center justify-center">
            {/* Contact us section details */}
            <div className="flex flex-col gap-5 md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact us</h2>
              <div className="flex gap-3 items-center text-xl">
                <MapPin size={25} className="text-[#150150]" />
                <p>Danladi Nasidi Housing Estate, Mariri Kumbotso LGA Kano state, Nigeria</p>
              </div>
              <div className="flex gap-3 items-center text-xl">
                <Phone size={25} className="text-[#150150]" />
                <p>+2348067957545, +2348033395299</p>
              </div>
              <div className="flex gap-3 items-center text-xl">
                <Mail size={25} className="text-[#150150]" />
                <p>info@mugathmanmotors.com</p>
              </div>
              <Button 
              className="w-52 md:w-64 bg-green-600 hover:bg-green-700 text-white rounded-full" 
              variant="default" 
              size="lg" 
              asChild>
                <Link 
                href="https://wa.me/2348033395299" 
                target="_blank"
                className="flex gap-2 items-center">
                  <FaWhatsapp size={16} className="text-white" />
                  <span>Let&lsquo;s Chat on WhatsApp</span>
                </Link>
              </Button>
            </div>

            {/* Inquiry form section */}
            <InquiryForm />
          </div>
        </section>
    )
}