import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import AboutHero from "@/components/AboutHero";
import Team from "@/components/Team";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Mugathman Motors | Heavy-Duty Vehicle & Equipment Dealer in Nigeria",
  description:
    "Learn about Mugathman Motors — a trusted Nigerian dealer in trucks, tractors, trailers, and quality spare parts. We deliver reliable vehicles, machinery, and logistics solutions for construction, farming, and transport industries across Kano and Nigeria.",
};



const teamHeads = [
    {
        name: "Alh. Muhammad Ghali Usman",
        position: "CEO/Chairman",
        image: "/ceo.jpg",
    },
    {
        name: "Sule Abdullahi Abdul",
        position: "Director I",
        image: "/director.jpg",
    },
    {
        name: "Usman Muhammad Gali",
        position: "Director II",
        image: "/director-2.jpg",
    },
]

const teamMembers = [
    {
        name: "Surajo Sani",
        position: "General Manager",
        image: "/g-manager.jpg",
    },
    {
        name: "Faruk Abubakar",
        position: "Spare part store keeper I",
        image: "/spare-part-store-keeper.jpg",
    },
    {
        name: "Kamilu Jafar",
        position: "Spare part store keeper II",
        image: "/spare-part-store-keeper-2.jpg",
    },
    {
        name: "Aliyu Umar",
        position: "Maintance Manager",
        image: "/maintenance-manager.jpg",
    },
    {
        name: "Ahmad Abubakar",
        position: "Gardener & store",
        image: "/gardener.jpg",
    },
    {
        name: "Saminu Umar",
        position: "Head cattle rearing",
        image: "/head-cattle-rearing.jpg",
    },
    {
        name: "Abba Yahaya Warawa",
        position: "Advicer, Special duties",
        image: "/advicer.jpg",
    },
        {
        name: "Muhammad Hani",
        position: "Security Officer",
        image: "/security.jpg",
    },
]

export default function Page() {
    return (
        <div className="bg-white text-black">
            {/* About Hero Section */}
            <AboutHero
              title="About Mugathman Motors"
              description={[
                "Mugathman Motors and Logistics Ltd (RC: 1643911) is a leading Nigerian dealer in heavy-duty trucks, tractors, trailers, tippers, and genuine spare parts. Established in 2019 by Alhaji Gali Muhammad Usman, we serve the transportation, construction, and agriculture sectors across Nigeria.",
                "At Mugathman Motors, we’re driving Nigeria’s mobility and logistics industry through quality, innovation, and customer satisfaction."
              ]}
              image="/hero-top-2-v2.jpg"
              imageAlt="Mugathman Motors facility and fleet"
              sectionLabel="About Us"
            />

            {/* Teams section */}
            <Team />
            
            {/* CTA section */}
            <CTASection />
            
            {/* Footer */}
            <Footer />
        </div>
    )
}