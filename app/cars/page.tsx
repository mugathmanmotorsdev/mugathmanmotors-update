import ProductsHero from "@/components/ProductsHero";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import OperationalUseCasesSection, { UseCase } from "@/components/OperationalUseCasesSection";
import ProductBrands from "@/components/ProductBrands";

export const metadata = {
  title: "Cars for Sale in Nigeria | Mugathman Motors",
  description:
    "Browse our selection of passenger cars for sale in Kano and across Nigeria. Quality vehicles for personal, corporate, and government use.",
};

const useCases: UseCase[] = [
  {
    number: "01",
    icon: "UserLock",
    title: "Personal Vehicles",
    description:
      "Comfortable and reliable vehicles for everyday driving.",
  },
  {
    number: "02",
    icon: "Handshake",
    title: "Corporate Fleets",
    description:
      "Professional transportation solutions for businesses and organizations.",
  },
  {
    number: "03",
    icon: "LandMark",
    title: "Institutional Use",
    description:
      "Dependable vehicles for public sector operations and official assignments.",
  },
  {
    number: "04",
    icon: "Gem",
    title: "Executive Transport",
    description:
      "Premium vehicle options for executives, management teams, and business travel.",
  },
];

const brands = [
  "/logo-toyota.jpeg",
  "/logo-honda.jpeg",
  "/logo-lexus.jpeg",
];

export default function CarsPage() {
  return (
    <div className="bg-white text-black">
      <ProductsHero
        category="Passenger Vehicles"
        title="Quality Passenger Cars for Every Need"
        description="Curated selection of sedans, SUVs, and light commercial vehicles. Ideal for corporate fleets, government agencies, and discerning individual buyers seeking reliability and value."
        backgroundImage="/car.jpg"
        backgroundImageAlt="Passenger cars for sale in Nigeria"
        ctaText="View Inventory"
        ctaHref="/contact?product=cars"
        minHeight="min-h-[85vh]"
        parallaxSpeed={0.25}
      />

      {/* Available Brands */}
      <ProductBrands brandsImg={brands} />
      

      {/* Use Cases */}
      <OperationalUseCasesSection useCases={useCases} />

      {/* CTA Section */}
      <CTASection />

      {/* Footer section */}
      <Footer />
    </div>
  );
}