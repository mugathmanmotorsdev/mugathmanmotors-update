import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import { Button } from "@/components/ui/button";
import VideoCard from "@/components/VideoCard";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

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
        desc: "Watch our mission video to learn more about our company and our commitment to excellence."
    },
    {
        videoId: "tULv6D4BS88",
        title: "Our products exploration",
        url: "https://www.youtube.com/watch?v=tULv6D4BS88",
        desc: "Watch our product exploration video to see our range of heavy-duty vehicles and equipment."
    }
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
            <section className="flex flex-col-reverse md:flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-between items-start px-5 md:px-12 my-10">
                    <h2 className="md:w-1/2 text-3xl font-bold">About Mugathman Motors: Leading Heavy-Duty Machinery, Truck and Tractor Dealer in Kano and Across Nigeria</h2>
                    <div className="md:w-1/2 flex flex-col gap-5">
                        <p className="text-lg">
                            Mugathman Motors and Logistics Ltd (RC: 1643911) is a leading Nigerian dealer in heavy-duty trucks, tractors, trailers, tippers, and genuine spare parts. Established in 2019 by Alhaji Gali Muhammad Usman, we serve the transportation, construction, and agriculture sectors across Nigeria.
                            At Mugathman Motors, we’re driving Nigeria’s mobility and logistics industry through quality, innovation, and customer satisfaction.
                        </p>
                        <div className="flex h-1 rounded-full">
                            <Button className={"bg-[#150150] border-2 border-[#150150] hover:bg-transparent hover:text-black text-white rounded-full md:px-10 md:py-5"} asChild>
                                <Link href="/contact#enquiry-form">Contact Us</Link>
                            </Button>
                        </div>
                    </div> 
                </div>
                <div className="text-center w-[95vw] min-h-[50vh] mx-auto rounded-2xl bg-[url('/hero-top-2-v2.jpg')] bg-cover bg-center  text-white flex flex-col justify-center">
                    {/*hero image  */}
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