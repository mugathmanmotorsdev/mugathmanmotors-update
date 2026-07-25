import ProductsHero from "@/components/ProductsHero";
import Footer from "@/components/Footer";
import OperationalUseCasesSection, { UseCase } from "@/components/OperationalUseCasesSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "LPG Tank Trailers for Sale in Nigeria | Mugathman Motors",
  description:
    "Browse our selection of LPG tank trailers for sale in Kano and across Nigeria. Safe and efficient LPG transportation for energy and industrial operations.",
};

const useCases: UseCase[] = [
  {
    number: "01",
    icon: "Truck",
    title: "LPG Distribution",
    description:
      "Support safe and efficient transportation between depots, plants, and filling stations.",
  },
  {
    number: "02",
    icon: "Fuel",
    title: "Oil & Gas Industry",
    description:
      "Reliable transport equipment for petroleum and energy operations.",
  },
  {
    number: "03",
    icon: "Barrel",
    title: "Industrial Gas Supply",
    description:
      "Move LPG safely to industrial facilities and commercial customers.",
  },
  {
    number: "04",
    icon: "Building2",
    title: "Bulk Energy Logistics",
    description:
      "Designed for businesses managing high-volume LPG transportation.",
  },
];

export default function LpgTankTrailersPage() {
  return (
    <div className="bg-white text-black">
      <ProductsHero
        category="Energy & Industrial Transport"
        title="LPG Tank Trailers for Safe Energy Transport"
        description="Specialized tank trailers engineered for safe, efficient LPG transportation. Built to international safety standards for energy and industrial operations."
        backgroundImage="/lpg-tank.png"
        backgroundImageAlt="LPG tank trailers for energy operations"
        ctaText="Request a Quote"
        ctaHref="/contact?product=lpg-tank-trailers"
        minHeight="min-h-[85vh]"
        parallaxSpeed={0.25}
      />

      {/* LPG Tank Trailer Operational Use Cases */}
      <OperationalUseCasesSection useCases={useCases} />

      {/* CTA Section */}
      <CTASection />

      {/* Footer section */}
      <Footer />
    </div>
  );
}