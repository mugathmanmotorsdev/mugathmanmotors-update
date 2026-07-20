import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimationInit from "@/components/AnimationInit";

export const metadata = {
  title: "Mugathman Motors – Truck Dealer & Spare Parts in Kano, Nigeria",
  description:
    "Mugathman Motors is a trusted truck dealer and spare parts supplier in Kano, Nigeria. We sell quality trucks, trailers, cars, farm tractors, and genuine parts to power your logistics and transport business.",
  openGraph: {
    title: "Mugathman Motors – Truck Dealer & Spare Parts in Kano, Nigeria",
    description:
      "Mugathman Motors is a trusted truck dealer and spare parts supplier in Kano, Nigeria. We sell quality trucks, trailers, cars, farm tractors, and genuine parts to power your logistics and transport business.",
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
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mugathman Motors",
  url: "https://mugathmanmotors.com",
  logo: "https://mugathmanmotors.com/logo.png",
  description: "Trusted truck dealer and spare parts supplier in Kano, Nigeria",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Danladi Nasidi Housing Estate, Marri Kumbotso LGA",
    addressLocality: "Kano",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-814-889-6797",
    contactType: "customer service",
    email: "info@mugathmanmotors.com",
  },
  sameAs: [
    "https://www.tiktok.com/@mugathman_motors",
    "https://youtube.com/@mugathmanmotors",
    "https://web.facebook.com/profile.php?id=61583124653834",
  ],
};

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
