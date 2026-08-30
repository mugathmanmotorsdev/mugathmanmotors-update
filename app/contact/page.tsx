import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/seo/schemas";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact Mugathman Motors | Get a Quote for Trucks, Tractors & Trailers",
  description:
    "Contact Mugathman Motors today for quotes on heavy-duty trucks, tractor heads, LPG tank trailers, tractors, and passenger cars. Our team serves logistics, construction, agriculture, and energy sectors across Nigeria with reliable vehicle sales and support.",
  alternates: {
    canonical: "https://mugathmanmotors.com/contact",
  },
};

const contactFAQs = [
  {
    question: "Where is Mugathman Motors located?",
    answer:
      "We are located at Danladi Nasidi Housing Estate, Marri Kumbotso LGA, Kano, Nigeria. You can visit our showroom Monday through Saturday, 8:00 AM to 6:00 PM.",
  },
  {
    question: "What brands of trucks do you sell?",
    answer:
      "We are authorized dealers for Sinotruk (HOWO), Shacman, and FAW trucks. We also supply Massey Ferguson, New Holland, and Ford tractors, plus Toyota, Honda, and Lexus passenger vehicles.",
  },
  {
    question: "Do you offer nationwide delivery in Nigeria?",
    answer:
      "Yes, we provide delivery across all 36 states in Nigeria. Our logistics team coordinates safe transport to your site or depot.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, and POS payments. For corporate and government clients, we offer flexible payment terms upon agreement.",
  },
  {
    question: "Do you provide after-sales support and spare parts?",
    answer:
      "Yes, we maintain a comprehensive spare parts inventory and offer maintenance services through our workshop. Genuine parts are available for all brands we sell.",
  },
  {
    question: "Can I request a quote online?",
    answer:
      "Absolutely. Use the contact form on this page or call +234-814-889-6797. Our sales team typically responds within 24 hours with detailed pricing and specifications.",
  },
];

const faqStructuredData = faqSchema(contactFAQs);

export default function Page() {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* Structured Data - FAQ Schema */}
      <JsonLd data={faqStructuredData} />

      {/* Header Banner Spacer & Page Layout */}
      <div className="pt-32 md:pt-40 max-w-8xl mx-auto px-6 md:px-12">
                
                {/* Page Title & Intro */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 pt-20">
                    <h1 className="max-w-4xl text-4xl md:text-7xl font-bold tracking-tight text-black">
                        Contact Mugathman Motors — Get a Quote
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