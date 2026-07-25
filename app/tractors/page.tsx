import ProductsHero from "@/components/ProductsHero";
import Footer from "@/components/Footer";
import OperationalUseCasesSection, { UseCase } from "@/components/OperationalUseCasesSection";
import CTASection from "@/components/CTASection";
import { Factory, Fuel, Truck, Warehouse } from "lucide-react";

export const metadata = {
  title: "Tractors for Sale in Nigeria | Mugathman Motors",
  description:
    "Browse our selection of farm tractors for sale in Kano and across Nigeria. Reliable farming equipment for cultivation, planting, and harvesting.",
};

const useCases: UseCase[] = [
  {
    number: "01",
    icon: "Leaf",
    title: "Crop Farming",
    description:
      "Support land preparation, planting, cultivation, and harvesting activities.",
  },
  {
    number: "02",
    icon: "Sprout",
    title: "Commercial Agriculture",
    description:
      "Reliable equipment for large-scale farming and agribusiness operations.",
  },
  {
    number: "03",
    icon: "Fence",
    title: "Livestock Farms",
    description:
      "Power a variety of farm implements and daily agricultural tasks.",
  },
  {
    number: "04",
    icon: "Handshake",
    title: "Agricultural Cooperatives",
    description:
      "Supporting mechanization and agricultural development projects.",
  },
];

export default function TractorsPage() {
  return (
    <div className="bg-white text-black">
      <ProductsHero
        category="Agricultural Machinery"
        title="Farm Tractors for Modern Agriculture"
        description="Versatile tractors designed for cultivation, planting, harvesting, and material handling. Built for African farming conditions with simple maintenance and genuine parts support."
        backgroundImage="/tractor-2.png"
        backgroundImageAlt="Farm tractors for agriculture"
        ctaText="Request a Quote"
        ctaHref="/contact?product=tractors"
        minHeight="min-h-[85vh]"
        parallaxSpeed={0.25}
      />

      {/* Tractors operational use cases */}
      <OperationalUseCasesSection useCases={useCases} />

      {/* CTA Section */}
      <CTASection />

      {/* Footer section */}
      <Footer />
    </div>
  );
}