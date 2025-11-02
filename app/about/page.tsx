import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import { Button } from "@/components/ui/button";
import VideoCard from "@/components/VideoCard";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Mugathman Motors | Heavy-Duty Vehicle & Equipment Dealer in Nigeria",
  description:
    "Learn about Mugathman Motors — a trusted Nigerian dealer in trucks, tractors, trailers, and quality spare parts. We deliver reliable vehicles, machinery, and logistics solutions for construction, farming, and transport industries across Kano and Nigeria.",
};

const YoutubeEmbed = dynamic(() => import("@/components/YoutubeEmbed"))

const videos = [
    {
        videoId: "wLvfHQU1XfI",
        title: "Mugathman Motors journey",
        url: "https://www.youtube.com/watch?v=wLvfHQU1XfI",
    },
];

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
            {/* About Section */}
            <section>
                <div className="text-center my-10 w-[95vw] mx-auto rounded-2xl bg-[url('/hero-top-2-v2.jpg')] bg-cover bg-center min-h-[80vh] text-white flex flex-col justify-center">
                    <h2 className="text-5xl md:text-7xl font-bold my-5">About Us</h2>
                    <p className="md:text-2xl">Driven by Excellence in Heavy Machinery, <br /> Energy and Logistics Built on Trust</p>
                    <div className="flex gap-2 justify-center w-24 h-1 mx-auto my-5 rounded-full">
                        <Button className={"bg-[#150150] hover:bg-[#0f0150f6] text-white rounded-full md:px-10 md:py-5"} asChild>
                            <Link href="/contact#enquiry-form">Make an Enquiry</Link>
                        </Button>
                        <Button className={"bg-green-600 hover:bg-green-700 text-white rounded-full md:px-10 md:py-5 ml-5"} asChild>
                            <Link href="https://wa.me/2348033395299" target="_blank">Chat on WhatsApp</Link>
                        </Button>
                    </div>
                </div>
                

                <div className="container mx-auto md:text-center px-5 my-10">
                    <h2 className="text-3xl font-bold my-5">Mugathman Motors Journey</h2>
                    <p className="text-lg">
                         Mugathman Motors and Logistics Ltd, founded by Alhaji Gali Muhammad Usman and officially registered in 2019 (RC: 1643911), is a proudly Nigerian company leading the market in heavy-duty vehicle and equipment sales. We specialize in truck heads, trailers, tippers, tractors, and genuine spare parts, offering durable solutions for transportation, agriculture, and construction sectors across Nigeria.

                        With over 1,000 units sold nationwide, Mugathman Motors has earned a reputation for reliability, integrity, and exceptional after-sales service. Our dedicated logistics support ensures clients receive timely and efficient delivery for every order — from individual buyers to large-scale organizations.

                        Driven by quality, innovation, and customer satisfaction, Mugathman Motors continues to power Nigeria’s mobility and logistics industry with trusted vehicles and energy solutions built for lasting performance.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-[#eff4fd] py-12">
                {/* Mission (odd, normal order) */}
                <section className="container flex flex-col md:flex-row items-center gap-5 md:gap-10 mx-auto px-5">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/hero.png"
                            height={2000}
                            width={2000}
                            alt="Howo 4x6 dump truck"
                            className="rounded-4xl w-full"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold my-5">Our Mission</h2>
                        <p className="text-lg">
                             Mugathman Motors and Logistics Limited aims in offering the best logistics solutions that suits the needs of each vertical market or industry, develop mutually rewarding relationships with employees, partners, suppliers and customers.
                        </p>
                    </div>
                </section>

                {/* Vision (even, reverse order on md+) */}
                <section className="container flex flex-col md:flex-row-reverse items-center gap-5 md:gap-10 mx-auto px-5 mt-10">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/vision.jpg"
                            height={2000}
                            width={2000}
                            alt="Howo 4x6 dump truck"
                            className="rounded-4xl w-full"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-lg">
                        <h2 className="text-3xl font-bold my-5">Our Vision</h2>
                        <p className="text-lg">
                            We aspire to be a strong partner of the companies, helping them to obtain sustainable competitive advantages, through logistics solutions able to position their products in the market quickly, efficiently and safely.
                        </p>
                    </div>
                </section>

                {/* Value section */}
                <section className="container flex flex-col md:flex-row items-center gap-5 md:gap-10 mx-auto px-5 mt-10">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/product-2.jpg"
                            height={2000}
                            width={2000}
                            alt="Howo 4x6 dump truck"
                            className="rounded-4xl w-full"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-lg">
                        <h2 className="text-3xl font-bold my-5">Our Values</h2>
                        <p className="text-lg">
                            We value strong relationships with our team, customers, and partners. We grow through active learning, invest in personal development, and deliver on promises to earn trust. With passion and determination, we lead by example and turn every challenge into an opportunity.
                        </p>
                    </div>
                </section>
            </section>
            
            {/* Team profile section */}
            <section className="py-12">
                <h2 className="text-3xl font-bold my-5 text-center">Meet Our Team</h2>
                <p className="text-lg text-center">
                    Our team of experienced professionals is dedicated to providing top-quality transportation solutions to meet your needs.
                </p>

                {/* Directors section */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold my-5">Board Directors</h2>
                    <section className="flex flex-col md:flex-row justify-center gap-5 md:gap-16 mx-auto px-5 mt-10">
                        {teamHeads.map((head, index) => (
                            <Profile key={index} {...head} />
                        ))}
                    </section>
                </section>
                
                {/* managements team section */}
                <section className="text-center max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold my-5">Management Team</h2>
                    <section className="flex flex-col md:flex-row flex-wrap justify-center gap-5 md:gap-16 mx-auto px-10 mt-10">
                        {teamMembers.map((member, index) => (
                            <Profile key={index} {...member} />
                        ))}
                    </section>
                </section>
            </section>

            {/* Highlight section */}
            <section className="bg-[#F8F4FF] py-12">
                {/* why choose us */}
                <section className="container flex flex-col md:flex-row items-center gap-5 md:gap-10 mx-auto px-5">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/why-choose-us.jpg"
                            height={2000}
                            width={2000}
                            alt="Howo 4x6 dump truck"
                            className="rounded-4xl w-full"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold my-5">Why Choose Mugathman Motors</h2>
                        <ul className="text-lg">
                            <li>Trusted by hundred satisfied customers</li>
                            <li>Fast, secure nationwide delivery</li>
                            <li>Wide inventory across vehicles categories</li>
                            <li>Reliable sourcing on-demand</li>
                            <li>Excellent customer support</li>
                        </ul>
                    </div>
                </section>

                {/* license and registration */}
                <section className="container flex flex-col md:flex-row-reverse items-center gap-5 md:gap-10 mx-auto px-5 mt-10">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/product-3.jpg"
                            height={2000}
                            width={2000}
                            alt="Howo 4x6 dump truck"
                            className="rounded-4xl w-full"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-lg">
                        <h2 className="text-3xl font-bold my-5">License and Registration</h2>
                        <p className="text-lg">
                            <b>Business Name: </b> Mugathman Motors and Logistics Limited<br />
                            <b>Registration Number: </b> RC: 1643911 <br />
                            <b>Authorize By: </b> Corporate Affairs Commission (CAC), Nigeria
                        </p>
                    </div>
                </section>
            </section>

            {/* Video portfolio section */}
            <section className="bg-[#eff4fd] py-12 flex flex-col gap-10">
                {
                    videos.map((video, index) => (
                        <VideoCard key={index} {...video} />
                    ))
                }
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}