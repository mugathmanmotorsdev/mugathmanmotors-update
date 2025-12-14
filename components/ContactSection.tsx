import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
    
    return (
      <section id="enquiry-form" className="my-12  bg-[#F5F5F7] py-10">
        <h2 className="w-2/3 mx-auto text-4xl md:text-9xl font-semibold text-center mb-8">
          Let us know if we <span className="text-[#47AFCB]">can help</span> you
        </h2>
        <p className="md:w-2/3 mx-5 md:mx-auto text-center text-xl mb-10">
          Reach out to us anytime — our dedicated team is ready to guide you, answer your questions, provide expert support, and ensure you make the right purchase with confidence and peace of mind
        </p>
        <div id="contact-section" 
        className="md:container mx-5 md:mx-auto my-10 overflow-hidden bg-white h-[800px] md:h-[600px] rounded-lg flex flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col md:flex-row gap-16 items-center py-10">
            {/* Contact us section details */}
            <div className="w-full flex flex-col gap-5 px-10 text-xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact us</h2>
              <div className="flex gap-3 items-center text-xl">
                <MapPin size={25} className="text-[#150150] flex-shrink-0" />
                <p>Danladi Nasidi Housing Estate, Mariri Kumbotso LGA Kano state, Nigeria.</p>
              </div>
              <div className="flex gap-3 items-center text-xl">
                <Phone size={25} className="text-[#150150] flex-shrink-0" />
                <p>+2348067957545, +2348033395299</p>
              </div>
              <div className="flex gap-3 items-center text-xl">
                <Mail size={25} className="text-[#150150] flex-shrink-0" />
                <p>info@mugathmanmotors.com</p>
              </div>
              <Button 
              className="w-52 md:w-64 bg-green-600 hover:bg-green-700 text-white rounded-full my-5 py-0" 
              variant="default" 
              size="lg" 
              asChild>
                <Link 
                href="/contact/whatsapp" 
                target="_blank"
                className="flex gap-2 items-center text-xl">
                  <FaWhatsapp className="size-8 text-white" />
                  <span>WhatsApp chat</span>
                </Link>
              </Button>
            </div>
            
           
            {/* Inquiry form section */}
            {/* this component is freezed */}
            {/* <InquiryForm /> */}
          </div> 
    
          <div className="md:w-1/2 h-[400px] md:h-[100%] bg-[url('/contact-image.jpg')] bg-cover bg-center md:block"></div>
        </div>
      </section>
    )
}