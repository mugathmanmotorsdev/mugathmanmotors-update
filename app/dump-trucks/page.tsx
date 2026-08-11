import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import OperationalUseCasesSection from "@/components/OperationalUseCasesSection";
import ProductsHero from "@/components/ProductsHero";
import RelatedProducts from "@/components/RelatedProducts";
import type { UseCase } from "@/components/OperationalUseCasesSection"
import ProductBrands from "@/components/ProductBrands";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, itemListSchema, PRODUCT_SERVICES } from "@/lib/seo/schemas";

export const metadata = {
  title: "Dump Trucks for Sale in Nigeria | Heavy-Duty Construction & Mining Trucks",
  description:
    "Browse our selection of heavy-duty dump trucks for construction, mining, and aggregate transport in Nigeria. Sinotruk (HOWO), Shacman, and FAW trucks with nationwide delivery. Built for maximum payload and durability.",
  alternates: {
    canonical: "https://mugathmanmotors.com/dump-trucks",
  },
};

const dumpTruckService = PRODUCT_SERVICES["dump-trucks"];
const dumpTruckBrands = [
  { position: 1, name: "Sinotruk (HOWO)", description: "Heavy-duty dump trucks and tractor heads" },
  { position: 2, name: "Shacman", description: "Construction and mining dump trucks" },
  { position: 3, name: "FAW", description: "Reliable commercial vehicles for African markets" },
];

const serviceStructuredData = serviceSchema({
  ...dumpTruckService,
  provider: { name: "Mugathman Motors", url: "https://mugathmanmotors.com" },
  areaServed: "NG",
  offers: { availability: "https://schema.org/InStock", priceRange: "₦50,000,000 - ₦150,000,000", currency: "NGN" },
});

const brandListStructuredData = itemListSchema({ itemListElement: dumpTruckBrands });

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
      {/* Structured Data */}
      <JsonLd data={serviceStructuredData} />
      <JsonLd data={brandListStructuredData} />

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

      {/* Related Products */}
      <RelatedProducts currentSlug="dump-trucks" />

      {/* CTA Section */}
      <CTASection />

      {/* Footer section */}
      <Footer />
    </>
  );
}