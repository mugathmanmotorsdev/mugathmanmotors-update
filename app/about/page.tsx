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
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/seo/schemas";

export const metadata = {
  title: "About Mugathman Motors | Heavy-Duty Truck & Equipment Dealer Since 2019",
  description:
    "Learn about Mugathman Motors — a trusted Nigerian dealer in heavy-duty trucks, tractors, trailers, and genuine spare parts since 2019. We deliver reliable vehicles, machinery, and logistics solutions for construction, farming, and transport industries across Nigeria.",
  alternates: {
    canonical: "https://mugathmanmotors.com/about",
  },
};

const aboutFAQs = [
  {
    question: "What does Mugathman Motors do?",
    answer:
      "Mugathman Motors is a leading Nigerian dealer in heavy-duty trucks, tractors, trailers, tippers, and genuine spare parts. We serve the transportation, construction, agriculture, and energy sectors across Nigeria.",
  },
  {
    question: "Where is Mugathman Motors located?",
    answer:
      "We are based in Kano, Nigeria, at Danladi Nasidi Housing Estate, Marri Kumbotso LGA. We serve clients across all 36 states in Nigeria.",
  },
  {
    question: "How long has Mugathman Motors been in business?",
    answer:
      "Mugathman Motors was established in 2019 by Alhaji Gali Muhammad Usman. We have over 7 years of experience in commercial vehicle supply and logistics.",
  },
  {
    question: "Do you sell to businesses outside Kano?",
    answer:
      "Yes, we sell and deliver nationwide. Our fleet and logistics partners ensure safe transport of vehicles to any location in Nigeria.",
  },
  {
    question: "What brands do you carry?",
    answer:
      "For trucks: Sinotruk (HOWO), Shacman, and FAW. For tractors: Massey Ferguson, New Holland, and Ford. For cars: Toyota, Honda, and Lexus.",
  },
  {
    question: "Do you offer spare parts?",
    answer:
      "Yes, we stock and supply genuine spare parts for all the brands we carry, ensuring your fleet stays operational with minimal downtime.",
  },
];

const aboutFaqStructuredData = faqSchema(aboutFAQs);



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
            {/* Structured Data - FAQ Schema */}
            <JsonLd data={aboutFaqStructuredData} />

            {/* About Hero Section */}
            <AboutHero
              title="About Mugathman Motors — Heavy-Duty Vehicle & Equipment Dealer"
              description={[
                "Mugathman Motors and Logistics Ltd (RC: 1643911) is a leading Nigerian dealer in heavy-duty trucks, tractors, trailers, tippers, and genuine spare parts. Established in 2019 by Alhaji Gali Muhammad Usman, we serve the transportation, construction, and agriculture sectors across Nigeria.",
                "At Mugathman Motors, we’re driving Nigeria’s mobility and logistics industry through quality, innovation, and customer satisfaction."
              ]}
              image="/dump-truck-hero.png"
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