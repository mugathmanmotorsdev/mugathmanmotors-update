import ProductsHero from "@/components/ProductsHero";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import OperationalUseCasesSection, { UseCase } from "@/components/OperationalUseCasesSection";
import RelatedProducts from "@/components/RelatedProducts";
import ProductBrands from "@/components/ProductBrands";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, itemListSchema, PRODUCT_SERVICES } from "@/lib/seo/schemas";

export const metadata = {
  title: "Cars for Sale in Nigeria | Passenger Vehicles for Corporate & Personal Use",
  description:
    "Browse our selection of passenger cars for sale in Kano and across Nigeria. Toyota, Honda, and Lexus sedans and SUVs for corporate fleets, government agencies, and personal use. Quality assured with nationwide delivery.",
  alternates: {
    canonical: "https://mugathmanmotors.com/cars",
  },
};

const carService = PRODUCT_SERVICES["cars"];
const carBrands = [
  { position: 1, name: "Toyota", description: "Reliable sedans, SUVs, and commercial vehicles" },
  { position: 2, name: "Honda", description: "Quality passenger cars and SUVs" },
  { position: 3, name: "Lexus", description: "Premium luxury vehicles for executive transport" },
];

const serviceStructuredData = serviceSchema({
  ...carService,
  provider: { name: "Mugathman Motors", url: "https://mugathmanmotors.com" },
  areaServed: "NG",
  offers: { availability: "https://schema.org/InStock", priceRange: "₦5,000,000 - ₦80,000,000", currency: "NGN" },
});

const brandListStructuredData = itemListSchema({ itemListElement: carBrands });

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
      {/* Structured Data */}
      <JsonLd data={serviceStructuredData} />
      <JsonLd data={brandListStructuredData} />

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

      {/* Related Products */}
      <RelatedProducts currentSlug="cars" />

      {/* CTA Section */}
      <CTASection />

      {/* Footer section */}
      <Footer />
    </div>
  );
}