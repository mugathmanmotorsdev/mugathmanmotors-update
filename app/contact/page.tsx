import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Contact Mugathman Motors | Truck & Equipment Dealer in Nigeria",
  description:
    "Contact Mugathman Motors today for inquiries about trucks, tractors, trailers, spare parts, and logistics solutions. Our team is ready to assist clients across Kano and Nigeria with reliable vehicle sales and support.",
};

export default function Page() { 
    return (
        <div className="bg-white min-h-screen text-black">
            {/* Header Banner Spacer & Page Layout */}
            <div className="pt-32 md:pt-40 max-w-8xl mx-auto px-6 md:px-12">
                
                {/* Page Title & Intro */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 pt-20">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-black">
                        CONTACT US
                    </h1>
                    <p className="max-w-md text-gray-700 text-sm md:text-base leading-relaxed md:text-right font-medium">
                        We work with businesses and organizations operating across logistics, energy, construction, industrial transport, and commercial fleet operations.
                    </p>
                </div>
                
                <hr className="border-t border-neutral-200 w-full mb-12" />

                {/* Contact details & Form Section */}
                <ContactSection />

                {/* Map Section */}
                <div className="my-16">
                    <Map />
                </div>
            </div>

            {/* CTA Section */}
            <CTASection />

            {/* Footer Section */}
            <Footer />
        </div>
    )
}