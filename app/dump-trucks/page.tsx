import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import OperationalUseCasesSection from "@/components/OperationalUseCasesSection";
import ProductsHero from "@/components/ProductsHero";
import type { UseCase } from "@/components/OperationalUseCasesSection"
import ProductBrands from "@/components/ProductBrands";

const useCases: UseCase[] = [
  {
    number: "01",
    icon: "Construction",
    title: "Construction",
    description:
      "Move sand, gravel, concrete, and building materials efficiently.",
  },
  {
    number: "02",
    icon: "Pickaxe",
    title: "Mining & Quarrying",
    description:
      "Transport aggregates, minerals, and excavation materials across demanding worksites.",
  },
  {
    number: "03",
    icon: "TowerControl",
    title: "Infrastructure Projects",
    description:
      "Support road construction, earthmoving, and large-scale development projects.",
  },
  {
    number: "04",
    icon: "Factory",
    title: "Industrial Operations",
    description:
      "Reliable material transportation for manufacturing plants and industrial facilities.",
  },
];

const brands = ["/logo-sinotruk.jpeg", "/logo-shacman.jpeg", "/logo-faw.jpeg"]
export default function DumpTruckPage() {
  return (
    <>
      <ProductsHero
        category="Heavy Duty Trucks"
        title="Dump Trucks Built for Heavy Duty Operations"
        description="Engineered for construction, mining, and aggregate transport. Our dump trucks deliver maximum payload capacity, durability, and reliability for your toughest jobs."
        backgroundImage="/dump-truck.jpeg"
        backgroundImageAlt="Heavy duty dump truck for construction and mining operations"
        ctaText="Request a Quote"
        ctaHref="/contact?product=dump-truck"
        minHeight="min-h-[85vh]"
        parallaxSpeed={0.25}
      />

      {/* Available Brands */}
      <ProductBrands brandsImg={brands} />

      {/* Dump Truck operational usecases */}
      <OperationalUseCasesSection useCases={useCases}/>

      {/* CTA Section */}
      <CTASection />

      {/* Footer section */}
      <Footer />
    </>
  );
}