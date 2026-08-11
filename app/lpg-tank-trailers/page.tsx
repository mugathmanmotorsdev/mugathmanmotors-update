import ProductsHero from "@/components/ProductsHero";
import Footer from "@/components/Footer";
import OperationalUseCasesSection, { UseCase } from "@/components/OperationalUseCasesSection";
import CTASection from "@/components/CTASection";
import RelatedProducts from "@/components/RelatedProducts";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, itemListSchema, PRODUCT_SERVICES } from "@/lib/seo/schemas";

export const metadata = {
  title: "LPG Tank Trailers for Sale in Nigeria | Safe Energy Transport Solutions",
  description:
    "Browse our selection of LPG tank trailers for sale in Kano and across Nigeria. Safe, efficient LPG transportation for oil & gas, industrial gas, and bulk energy logistics. Built to international safety standards with nationwide delivery.",
  alternates: {
    canonical: "https://mugathmanmotors.com/lpg-tank-trailers",
  },
};

const lpgService = PRODUCT_SERVICES["lpg-tank-trailers"];
const lpgBrands = [
  { position: 1, name: "Custom Built", description: "ASME/ADR certified LPG tank trailers" },
];

const serviceStructuredData = serviceSchema({
  ...lpgService,
  provider: { name: "Mugathman Motors", url: "https://mugathmanmotors.com" },
  areaServed: "NG",
  offers: { availability: "https://schema.org/InStock", priceRange: "₦30,000,000 - ₦80,000,000", currency: "NGN" },
});

const brandListStructuredData = itemListSchema({ itemListElement: lpgBrands });

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
      {/* Structured Data */}
      <JsonLd data={serviceStructuredData} />
      <JsonLd data={brandListStructuredData} />

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

      {/* Related Products */}
      <RelatedProducts currentSlug="lpg-tank-trailers" />

      {/* CTA Section */}
      <CTASection />

      {/* Footer section */}
      <Footer />
    </div>
  );
}