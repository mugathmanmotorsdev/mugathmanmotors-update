import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Map from "@/components/Map";

export const metadata = {
  title: "Contact Mugathman Motors | Truck & Equipment Dealer in Nigeria",
  description:
    "Contact Mugathman Motors today for inquiries about trucks, tractors, trailers, spare parts, and logistics solutions. Our team is ready to assist clients across Kano and Nigeria with reliable vehicle sales and support.",
};

export default function Page() { 
    return (
        <div className="bg-white text-black">
            <section className="flex flex-col gap-5 items-center justify-center container mx-auto bg-gray-200 rounded-2xl py-12 px-5 my-10 bg-linear-to-br from-[#F8F4FF] via-indigo-200 to-[#eff4fd]">
                <h2 className="font-bold text-7xl">Contact US</h2>
                <p className="text-2xl text-center md:w-1/3 mx-auto">
                    Get in touch with us and let us know how we can help you. 
                    We are here to assist you with any questions or concerns you may have.
                </p>
            </section>

            {/* Contact Section */}
            <ContactSection />

            {/* map */}
            <Map />

            {/* Footer */}
            <Footer />
        </div>
    )
}