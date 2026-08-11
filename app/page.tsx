import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimationInit from "@/components/AnimationInit";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, MUGATHMAN_ORG_DATA } from "@/lib/seo/schemas";

export const metadata = {
  title: "Mugathman Motors – Commercial Vehicle Supplier & Fleet Solutions Nigeria",
  description:
    "Mugathman Motors is a trusted commercial vehicle supplier in kano Nigeria. We offer heavy-duty trucks, tractor heads, LPG tank trailers, farm tractors, and passenger cars for logistics, construction, agriculture, and energy sectors. Nationwide delivery and genuine parts support.",
  openGraph: {
    title: "Mugathman Motors – Commercial Vehicle Supplier & Fleet Solutions Nigeria",
    description:
      "Mugathman Motors is a trusted commercial vehicle supplier in Nigeria. We offer heavy-duty trucks, tractor heads, LPG tank trailers, farm tractors, and passenger cars for logistics, construction, agriculture, and energy sectors. Nationwide delivery and genuine parts support.",
    url: "https://mugathmanmotors.com/",
    siteName: "Mugathman Motors",
    images: [
      {
        url: "/hero.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://mugathmanmotors.com/",
  },
};

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Structured Data - Enhanced Organization Schema */}
      <JsonLd data={organizationSchema(MUGATHMAN_ORG_DATA)} />

      {/* GSAP Animation Init */}
      <AnimationInit />

      {/* Hero Section */}
      <Hero />

      {/* Our Products Section */}
      <ProductsSection />

      {/* Industries We Serve Section */}
      <IndustriesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
