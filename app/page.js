import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

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
    image: "/testimonial.jpg",
    name: "John Doe",
    position: "CEO",
    testimonil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    star: 5
  },
  {
    image: "/testimonial.jpg",
    name: "John Doe",
    position: "CEO",
    testimonil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    star: 5
  },
  {
    image: "/testimonial.jpg",
    name: "John Doe",
    position: "CEO",
    testimonil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    star: 5
  },
]

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center bg-[url('/hero.png')] bg-cover bg-center text-white">
        <div className="p-8" >
          <h1 className="text-6xl font-bold">Trust Vehicles <br /> Nationwide Logistics</h1>
          <p className="mt-4 text-lg">
            Explore our top-quality vehicles and nationwide logistics services.
          </p>
          <div className="flex gap-10">
            <button className="mt-4 px-4 py-2 bg-[#150150] text-white rounded-full">Make an enquiry</button>
            <button className="mt-4 px-4 py-2 bg-white text-[#150150]  rounded-full">Contact Us</button>
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
        <section className="bg-[#F8F4FF] p-12">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            {/* Contact us section details */}
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-semibold mb-4">Contact us</h2>
              <div className="flex gap-3 items-center text-xl">
                <MapPin size={25} />
                <p>Danladi Nasidi Housing Estate, Mariri Kumbotso LGA Kano state, Nigeria</p>
              </div>
              <div className="flex gap-3 items-center text-xl">
                <Phone size={25} />
                <p>+2348067957554, +2348033395299</p>
              </div>
              <div className="flex gap-3 items-center text-xl">
                <Mail size={25} />
                <p>mgaliusman1994@gmail.com</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7807.099187644836!2d8.613000777709972!3d11.936401500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ac282990978031%3A0x7b47f8479c4844ab!2sDanladi%20Nasidi%20Housing%20Estate%20Mariri%20Kano!5e0!3m2!1sen!2sng!4v1753815409121!5m2!1sen!2sng" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              loading="lazy"
              eferrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>

        {/* Email list section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-10">Stay Updated on New Arrivals and Special Offers</h1> 
            <form action="#" className="flex gap-10 items-center">
              <Input 
              className="rounded-full w-full lg:w-1/2 border-2 border-[#150150]"
              placeholder="Enter your email" />
              <Button className="bg-[#150150] rounded-full">Subscribe</Button>
            </form>
          </div>
        </section>
    </div>
  );
}