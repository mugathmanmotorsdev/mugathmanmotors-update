import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "LPG Tank Trailers for Sale in Nigeria | Mugathman Motors",
  description:
    "Browse our selection of LPG tank trailers for sale in Kano and across Nigeria. Safe and efficient LPG transportation for energy and industrial operations.",
};

export default function LpgTankTrailersPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center">
        <Image
          src="/lpg-tank.png"
          alt="LPG tank trailers for energy operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LPG Tank Trailers</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Safe and efficient LPG transportation for energy and industrial operations
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Our LPG tank trailer collection is coming soon. Check back for detailed specifications, pricing, and availability.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
