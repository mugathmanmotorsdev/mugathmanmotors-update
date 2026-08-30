import ProductsHero from "@/components/ProductsHero";
import Footer from "@/components/Footer";
import OperationalUseCasesSection, { UseCase } from "@/components/OperationalUseCasesSection";
import CTASection from "@/components/CTASection";
import RelatedProducts from "@/components/RelatedProducts";
import { Factory, Fuel, Truck, Warehouse } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ViewContentTracker from "@/components/analytics/ViewContentTracker";
import { serviceSchema, itemListSchema, PRODUCT_SERVICES } from "@/lib/seo/schemas";

export const metadata = {
  title: "Farm Tractors for Sale in Nigeria | Agricultural Machinery & Equipment",
  description:
    "Browse our selection of farm tractors for sale in Kano and across Nigeria. Reliable farming equipment for cultivation, planting, harvesting, and material handling. Built for African conditions with genuine parts support from Massey Ferguson, New Holland, and Ford.",
  alternates: {
    canonical: "https://mugathmanmotors.com/tractors",
  },
};

const tractorService = PRODUCT_SERVICES["tractors"];
const tractorBrands = [
  { position: 1, name: "Massey Ferguson", description: "World-renowned agricultural tractors" },
  { position: 2, name: "New Holland", description: "Innovative farming equipment and tractors" },
  { position: 3, name: "Ford", description: "Durable tractors for African farming conditions" },
];

const serviceStructuredData = serviceSchema({
  ...tractorService,
  provider: { name: "Mugathman Motors", url: "https://mugathmanmotors.com" },
  areaServed: "NG",
  offers: { availability: "https://schema.org/InStock", priceRange: "₦8,000,000 - ₦35,000,000", currency: "NGN" },
});

const brandListStructuredData = itemListSchema({ itemListElement: tractorBrands });

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
      <ViewContentTracker slug="tractors" name={tractorService.name} />
      {/* Structured Data */}
      <JsonLd data={serviceStructuredData} />
      <JsonLd data={brandListStructuredData} />

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

      {/* Related Products */}
      <RelatedProducts currentSlug="tractors" />

      {/* CTA Section */}
      <CTASection />

      {/* Footer section */}
      <Footer />
    </div>
  );
}