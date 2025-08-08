import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import VideoCard from "@/components/VideoCard";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const YoutubeEmbed = dynamic(() => import("@/components/YoutubeEmbed"))

const videos = [
    {
        videoId: "y3Ww26BLSKU",
        title: "Mugathman Motors journey",
        url: "https://www.youtube.com/watch?v=y3Ww26BLSKU",
    },
    {
        videoId: "D-f0yVjYBRQ",
        title: "About Us - Mugathman Motors",
        url: "https://www.youtube.com/watch?v=D-f0yVjYBRQ",
    },
    {
        videoId: "5z0QVa6HNAY",
        title: "Our best products - derived from our commitment to excellence",
        url: "https://www.youtube.com/watch?v=5z0QVa6HNAY",
    },
]

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
            <section className="text-center">
                <h2 className="text-3xl font-bold">About Us</h2>
                <p className="text-lg">Driven by Excellence, Buil on Trust</p>
                <div className="container mx-auto px-5 my-10">
                    <Image
                        src="/about.jpg"
                        className="rounded-4xl mx-auto"
                        alt="bulldozer"
                        width={1000}
                        height={1000}
                    />
                </div>

                <div className="container mx-auto px-5 my-10">
                    <h2 className="text-3xl font-bold my-5">Mugathman Motors Jounerney</h2>
                    <p className="text-lg">
                        Mugathman motors offered a wide range of vehicles including
                        <b> trucks , cars, farm tractors and quality spare parts </b>
                        to meet all your logistics and transportation needs.
                        mugathman motors has a team of experienced professionals who are dedicated to providing top-quality transportation solutions to meet your needs.
                        Our commitment to quality and customer satisfaction sets us apart from the competition.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-[#eff4fd] py-12">
                {/* Mission (odd, normal order) */}
                <section className="flex flex-col md:flex-row items-center gap-5 md:gap-10 mx-auto px-5">
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
                            Mugathman motors offered a wide range of vehicles including
                            <b> trucks , cars, farm tractors and quality spare parts </b>
                            to meet all your logistics and transportation needs.
                            mugathman motors has a team of experienced professionals who are dedicated to providing top-quality transportation solutions to meet your needs.
                            Our commitment to quality and customer satisfaction sets us apart from the competition.
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
                            Our vision is to become the leading provider of transportation solutions,
                            delivering excellence in every aspect of our operations.
                            We aspire to be a trusted partner for businesses and individuals seeking reliable and efficient transportation services.
                            Our vision is to become the leading provider of transportation solutions,
                            delivering excellence in every aspect of our operations.
                            We aspire to be a trusted partner for businesses and individuals seeking reliable and efficient transportation services.
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
                            Our values are rooted in integrity, excellence, and customer-centricity.
                            We believe in fostering a culture of transparency, innovation, and collaboration,
                            ensuring that our services meet the highest standards of quality and customer satisfaction.
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
                <section className="text-center">
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
                <section className="flex flex-col md:flex-row items-center gap-5 md:gap-10 mx-auto px-5">
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
                        <p className="text-lg">
                            Mugathman motors offered a wide range of vehicles including
                            <b> trucks , cars, farm tractors and quality spare parts </b>
                            to meet all your logistics and transportation needs.
                            Our vision is to become the leading provider of transportation solutions,
                            delivering excellence in every aspect of our operations.
                        </p>
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
                            Our vision is to become the leading provider of transportation solutions,
                            delivering excellence in every aspect of our operations.
                            We aspire to be a trusted partner for businesses and individuals seeking reliable and efficient transportation services.
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