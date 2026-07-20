import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Cars for Sale in Nigeria | Mugathman Motors",
  description:
    "Browse our selection of passenger cars for sale in Kano and across Nigeria. Quality vehicles for personal, corporate, and government use.",
};

export default function CarsPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center">
        <Image
          src="/car.jpg"
          alt="Passenger cars for sale in Nigeria"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cars</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Quality vehicles for personal, corporate, and government use
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Our car collection is coming soon. Check back for detailed specifications, pricing, and availability.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
