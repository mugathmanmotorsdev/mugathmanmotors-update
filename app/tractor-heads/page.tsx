import ProductsHero from "@/components/ProductsHero";
import Footer from "@/components/Footer";
import OperationalUseCasesSection, { UseCase } from "@/components/OperationalUseCasesSection";
import CTASection from "@/components/CTASection";
import RelatedProducts from "@/components/RelatedProducts";
import ProductBrands from "@/components/ProductBrands";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, itemListSchema, PRODUCT_SERVICES } from "@/lib/seo/schemas";

export const metadata = {
  title: "Tractor Heads for Sale in Nigeria | Prime Movers for Heavy Haulage",
  description:
    "Browse our selection of tractor heads for sale in Kano and across Nigeria. Sinotruk (HOWO), Shacman, and FAW prime movers for freight, logistics, and container transport. Proven performance across Africa's toughest routes.",
  alternates: {
    canonical: "https://mugathmanmotors.com/tractor-heads",
  },
};

const tractorHeadService = PRODUCT_SERVICES["tractor-heads"];
const tractorHeadBrands = [
  { position: 1, name: "Sinotruk (HOWO)", description: "Heavy-duty prime movers for long-haul transport" },
  { position: 2, name: "Shacman", description: "Reliable tractor heads for container logistics" },
  { position: 3, name: "FAW", description: "Cost-effective heavy-duty tractor units" },
];

const serviceStructuredData = serviceSchema({
  ...tractorHeadService,
  provider: { name: "Mugathman Motors", url: "https://mugathmanmotors.com" },
  areaServed: "NG",
  offers: { availability: "https://schema.org/InStock", priceRange: "₦40,000,000 - ₦120,000,000", currency: "NGN" },
});

const brandListStructuredData = itemListSchema({ itemListElement: tractorHeadBrands });

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
      {/* Structured Data */}
      <JsonLd data={serviceStructuredData} />
      <JsonLd data={brandListStructuredData} />

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

      {/* Related Products */}
      <RelatedProducts currentSlug="tractor-heads" />

      {/* CTA Section */}
      <CTASection />

      {/* Footer section */}
      <Footer />
    </div>
  );
}