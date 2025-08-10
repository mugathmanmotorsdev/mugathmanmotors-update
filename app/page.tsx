import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import SubscribeToEmailList from "../components/SubscribeToEmailList";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    image: "/product-1.png",
    heading: "Trucks",
    description: "Powerful, reliable trucks build to handle every job with ease."
  },
  {
    image: "/product-2.jpg",
    heading: "Tractors & Dozers",
    description: "Heavy duty tractors and dozers tough farm and construction work."
  },
  {
    image: "/product-3.jpg",
    heading: "Cars",
    description: "Efficient and eco-friendly cars for everyday use and off-road adventures."
  },
  {
    image: "/product-4.jpg",
    heading: "Spare parts",
    description: "Genuine spare parts to keep your vehicles running smoothly at peak performance."
  }
]

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
    name: "Alhaji Musa Usman",
    position: "Logistics Business Owner, Kaduna",
    testimonil: "I’ve been buying trucks and parts from Mugathman for years. They are honest, reliable, and always have what I need in stock. Their team is trustworthy and well-organized — a rare quality in this market.",
    star: 5
  },
  {
    image: "/product-2.jpg",
    name: "Ibrahim Sani",
    position: "Construction Fleet Manager, Kano",
    testimonil: "Mugathman Motors has been a dependable partner in our equipment sourcing. The trucks and bulldozers we purchased were top-quality, and their support service is unmatched. We’ll continue to buy from them with confidence.",
    star: 5
  },
]

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center bg-[url('/hero.png')] bg-cover bg-center text-white">
        <div className="p-8" >
          <h1 className="text-5xl md:text-6xl font-bold">Trust Vehicles <br /> Nationwide Logistics</h1>
          <p className="mt-4 text-lg">
            Explore our top-quality vehicles and nationwide logistics services.
          </p>
          <div className="flex gap-5">
            <Button 
            variant="default" 
            size="default" 
            className="mt-4 px-4 py-2 bg-[#150150] hover:bg-[#0f0150f6] text-white rounded-full"
            asChild>
              <Link href="/contact#enquiry-form">Make an enquiry</Link>
            </Button>
            <Button
            variant="default" 
            size="default"
            className="mt-4 px-4 py-2 bg-white hover:bg-white text-[#150150] rounded-full"
            asChild>
              <Link href="/contact#contact-section">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-[#f8f4ff] text-center py-12">
        <div className=" w-full md:w-1/2 mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">About Mugathman Motors</h2>
          <p className="text-lg">
            Mugathman motors offered a wide range of vehicles including
            <b> trucks , cars, farm tractors and quality spare parts </b>
            to meet all your logistics and transportation needs.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-[#f8f4ff] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#eff4fd] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">What our customers are saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {testimonials.map((item, index) => (
                <TestimonialCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact us section */}
        <ContactSection />

        {/* Email list section */}
        <SubscribeToEmailList />

        {/* Footer */}
        <Footer />
    </div>
  );
}