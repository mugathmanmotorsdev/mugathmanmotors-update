import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ContactSection() {
    
    return (
        <section id="contact-section" className="bg-[#F8F4FF] p-12">
          <div className="conainer mx-auto flex flex-col md:flex-row gap-5 items-center justify-center">
            {/* Contact us section details */}
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-semibold mb-4">Contact us</h2>
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
                  <MessageCircle size={25} className="text-white" />
                  <span>Let&lsquo;s Chat on WhatsApp</span>
                </Link>
              </Button>
            </div>

            <div className="rounded-xl overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.8922100676373!2d8.627189582887716!3d11.935065091222532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ac2910f876772b%3A0x756b9460aa515bb!2sMugathman%20Motors!5e0!3m2!1sen!2sng!4v1756637295823!5m2!1sen!2sng" 
              width="600" 
              height="450" 
              className="w-[95vw] md:w-[40vw] border-0"
              loading="lazy"></iframe>
            </div>
          </div>
        </section>
    )
}