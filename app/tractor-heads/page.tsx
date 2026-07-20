import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Tractor Heads for Sale in Nigeria | Mugathman Motors",
  description:
    "Browse our selection of tractor heads for sale in Kano and across Nigeria. Reliable hauling solutions for freight, logistics, and commercial transport.",
};

export default function TractorHeadsPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center">
        <Image
          src="/tractor-head.png"
          alt="Tractor heads for heavy logistics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tractor Heads</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Reliable hauling solutions for freight, logistics, and commercial transport
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Our tractor head collection is coming soon. Check back for detailed specifications, pricing, and availability.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
