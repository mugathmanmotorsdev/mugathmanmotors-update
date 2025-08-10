import InquiryForm from "@/components/InquryForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with us and let us know how we can help you. We are here to assist you with any questions or concerns you may have.",
}

export default function Page() {
    
    return (
        <div className="bg-white text-black">
            <section className="flex flex-col gap-5 items-center justify-center w-[95vw] mx-auto bg-gray-200 rounded-2xl py-12 px-5 my-10 bg-linear-to-br from-[#F8F4FF] via-indigo-200 to-[#eff4fd]">
                <h2 className="font-bold text-2xl">Contact US</h2>
                <p className="text-lg text-center md:w-3/5 mx-auto">
                    Get in touch with us and let us know how we can help you. 
                    We are here to assist you with any questions or concerns you may have.
                </p>
            </section>

            {/* Inquiry Form section */}
            <InquiryForm />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer />
        </div>
    )
}