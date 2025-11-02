import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import SubscribeToEmailList from "../components/SubscribeToEmailList";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Map from "@/components/Map";

export const metadata = {
  title: "Mugathman Motors – Truck Dealer & Spare Parts in Kano, Nigeria",
  description: "Mugathman Motors is a trusted truck dealer and spare parts supplier in Kano, Nigeria. We sell quality trucks, trailers, cars, farm tractors, and genuine parts to power your logistics and transport business.",
  openGraph: {
    title: "Mugathman Motors – Truck Dealer & Spare Parts in Kano, Nigeria",
    description: "Mugathman Motors is a trusted truck dealer and spare parts supplier in Kano, Nigeria. We sell quality trucks, trailers, cars, farm tractors, and genuine parts to power your logistics and transport business.",
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
  }
}

const products = [
  {
    image: "/product-6.jpeg",
    alt: "Heavy-duty truck for sale in Kano Nigeria",
    heading: "Trucks",
    description:
      "Explore powerful, durable trucks for sale at Mugathman Motors — your trusted truck dealer in Kano. Built to handle logistics, construction, and long-distance hauling with ease."
  },
  {
    image: "/product-2.jpg",
    alt: "Tractors and bulldozers for sale in Nigeria",
    heading: "Tractors & Dozers",
    description:
      "Get heavy-duty tractors and dozers engineered for strength and long performance. Ideal for farms and construction projects across Kano and throughout Nigeria."
  },
  {
    image: "/product-3.jpg",
    alt: "Affordable cars for sale in Kano",
    heading: "Cars",
    description:
      "Discover efficient and affordable cars for personal and business use. From compact models to off-road vehicles, Mugathman Motors offers reliable options trusted nationwide."
  },
  {
    image: "/product-7.jpeg",
    alt: "Genuine vehicle spare parts supplier in Nigeria",
    heading: "Spare Parts",
    description:
      "Keep your vehicles performing at their best with genuine spare parts from Mugathman Motors. Available locally in Kano with delivery options across Nigeria."
  },
  {
    image: "/product-5.jpeg",
    alt: "Engine Oil Image",
    heading: "Engine Oil",
    description: "Premium-grade engine oils that protect engines from wear and enhance performance for cars, trucks, and tractors in any condition."
  },
  {
    image: "/product-6.jpeg",
    alt: "Solar System Image",
    heading: "Solar Systems",
    description: "Reliable solar power systems for homes and businesses, helping you enjoy sustainable, cost-efficient energy solutions anywhere in Nigeria."
  }
];


const testimonials = [
  {
    image: "/ismailmb.jpg",
    name: "Ismail MB",
    position: "Web Consultant & Developer",
    testimonil: "Working with Mugathman Motors on their digital presence has given me deep insight into their professionalism. Beyond their physical inventory, they genuinely care about customer satisfaction, transparency, and long-term business growth.",
    star: 5
  },
  {
    image: "/advicer.jpg",
    name: "Abba Yahaya Warawa",
    position: "Advicer, Special duties",
    testimonil: "As an advisor to Mugathman Motors, I have witnessed firsthand their commitment to integrity, customer satisfaction, and community development. Their leadership is visionary, and their staff is dedicated to delivering exceptional service. I am proud to be associated with this organization.",
    star: 5
  },
  {
    image: "/product-2.jpg",
    name: "Surajo Sani",
    position: "General Manager",
    testimonil: "I have been working with Mugathman Motors for over a decade, and I can attest to their commitment to excellence in every aspect of their business. From their quality products to their exceptional customer service, they are a true partner in success. I highly recommend Mugathman Motors to anyone looking for reliable and trustworthy logistics solutions.",
    star: 5
  },
]

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center bg-[url('/hero-top-v2.jpg')] bg-cover bg-center text-white">
        <div className="h-full md:w-2/5 p-5 flex flex-col justify-center my-20 md:mx-10">
          <h1 className="text-5xl md:text-6xl font-bold">Powering Construction, Farming, and Logistics Across Nigeria</h1>
          <p className="mt-4 text-lg md:text-xl">
            From reliable <b>trucks and tractors to trailers, dozers,<br /> and spare parts</b>, Mugathman Motors delivers <b>trusted vehicles<br /> and logistics solutions</b> nationwide.
          </p>
          <div className="flex gap-5">
            <Button 
            variant="default" 
            size="default" 
            className="mt-4 px-10 py-5 bg-[#150150] hover:bg-indigo-800 text-white rounded-full"
            asChild>
              <Link href="/contact#enquiry-form">Make an enquiry</Link>
            </Button>
            <Button
            variant="default" 
            size="default"
            className="hover:text-[#150150] mt-4 px-10 py-5 hover:bg-white rounded-full bg-transparent text-white border-2 border-white"
            asChild>
              <Link href="/contact#contact-section">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container flex flex-col md:flex-row justify-center items-center gap-10 py-12 mx-auto">
        <div className="w-full md:w-1/2 mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Mugathman Motors</h2>
          <p className="text-lg">
            Mugathman Motors is a trusted truck and spare parts dealer based in Kano, Nigeria, offering a wide range of vehicles including <b>trucks, cars, farm tractors, and quality spare parts</b> to meet all logistics, transportation, and agricultural needs.
          </p>
        </div>
        <div className=" w-full md:w-1/3 mx-auto px-4">
          <Image
            src="/hero-top-2.jpg"
            alt="About Mugathman Motors - Truck Dealer & Spare Parts in Kano, Nigeria"
            className="rounded-lg"
            width={500}
            height={300}
          />
        </div>
      </section>

      {/* Products Category */}
      <section className="container py-12 mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Products Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container bg-[#eff4fd] py-12 mx-auto">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">What our customers are saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {testimonials.map((item, index) => (
                <TestimonialCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact us section */}
        <ContactSection />

        {/* Map Section */}
        <Map />

        {/* Email list section */}
        <SubscribeToEmailList />

        {/* Footer */}
        <Footer />
    </div>
  );
}