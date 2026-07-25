import ProductsHero from "@/components/ProductsHero";
import Footer from "@/components/Footer";
import OperationalUseCasesSection, { UseCase } from "@/components/OperationalUseCasesSection";
import CTASection from "@/components/CTASection";
import ProductBrands from "@/components/ProductBrands";

export const metadata = {
  title: "Tractor Heads for Sale in Nigeria | Mugathman Motors",
  description:
    "Browse our selection of tractor heads for sale in Kano and across Nigeria. Reliable hauling solutions for freight, logistics, and commercial transport.",
};

const useCases: UseCase[] = [
  {
    number: "01",
    icon: "Truck",
    title: "Logistics & Haulage",
    description:
      "Efficient transportation of goods across regional and national routes.",
  },
  {
    number: "02",
    icon: "Container",
    title: "Container Transport",
    description:
      "Reliable hauling for ports, freight terminals, and container logistics.",
  },
  {
    number: "03",
    icon: "Fuel",
    title: "Oil & Gas Operations",
    description:
      "Support heavy transport requirements for energy and industrial sectors.",
  },
  {
    number: "04",
    icon: "Warehouse",
    title: "Fleet Expansion",
    description:
      "Ideal for businesses growing or modernizing their commercial transport fleets.",
  },
];

const brands = [
  "/logo-sinotruk.jpeg",
  "/logo-shacman.jpeg",
  "/logo-faw.jpeg"
]

export default function TractorHeadsPage() {
  return (
    <div className="bg-white text-black">
      <ProductsHero
        category="Heavy Duty Transport"
        title="Tractor Heads for Reliable Heavy Hauling"
        description="Powerful prime movers engineered for long-haul freight, container transport, and heavy logistics. Proven performance across Africa's toughest routes."
        backgroundImage="/tractor-head.png"
        backgroundImageAlt="Tractor heads for heavy logistics"
        ctaText="Request a Quote"
        ctaHref="/contact?product=tractor-heads"
        minHeight="min-h-[85vh]"
        parallaxSpeed={0.25}
      />

      {/* Available Brands */}
      <ProductBrands brandsImg={brands} />

      {/* Tractor Heads operational use cases */}
      <OperationalUseCasesSection useCases={useCases} />

      {/* CTA Section */}
      <CTASection />

      {/* Footer section */}
      <Footer />
    </div>
  );
}