import Image from "next/image";

export default function Ceo() {
    return(
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-16">
            <div className="h-[750px]">
                <Image
                  src="/ceo.jpg"
                  alt="Chief Executive Officer"
                  width={600}
                  height={520}
                  className="object-cover w-full h-full shadow-xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="space-y-6 flex flex-col">
                <p className="text-gray-600 leading-relaxed">
                  &quot; With over 25 years of industry experience, our CEO leads the company with a passion for innovation and excellence.
                  Committed to delivering outstanding results, they ensure every project meets the highest standards of quality and safety. &quot;
                </p>

                <div className="">
                    <h2 className="text-xl md:text-2xl font-bold">Muhammad Ghali Uthman</h2>
                    <p className="font-medium">Founder & CEO</p>
                </div>
            </div>
        </section>
    )
}