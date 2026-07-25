import SectionLabel from "./SectionLabel";

export default function ContactSection() {
    return (
        <section id="enquiry-form" className="grid grid-cols-1 md:grid-cols-12 gap-12 my-12">
            {/* Left Column (Details) */}
            <div className="md:col-span-5 flex flex-col items-start">
                <SectionLabel text="Our Products" />

                <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight mt-6">
                    Let&apos;s Get In Touch
                </h2>

                <div className="space-y-4 text-black text-sm md:text-base pt-6 md:pt-10 leading-relaxed">
                    <p className="font-semibold">{process.env.NEXT_PUBLIC_PHONE_NUMBER || "2348065259121"}</p>
                    <p className="font-semibold">
                        <a href="mailto:info@mugathmanmotors.com" className="hover:underline">
                            info@mugathmanmotors.com
                        </a>
                    </p>
                    <p className="font-semibold max-w-xs">
                        Danladi Nasidi Housing Estate, Mariri Kumbotso LGA Kano state, Nigeria.
                    </p>
                </div>
            </div>

            {/* Right Column (Contact Form) */}
            <div className="md:col-span-7">
                <form className="space-y-6 bg-gray-50 p-8 md:p-12 rounded-xl" action="/api/contact" method="POST">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="+234 801 234 5678"
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                Company / Organization
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="Mugathman Motors"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                            Product of Interest
                        </label>
                        <select
                            id="product"
                            name="product"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                            <option value="">Select a product</option>
                            <option value="dump-trucks">Dump Trucks</option>
                            <option value="tractor-heads">Tractor Heads</option>
                            <option value="lpg-tank-trailers">LPG Tank Trailers</option>
                            <option value="tractors">Tractors</option>
                            <option value="cars">Cars</option>
                            <option value="spare-parts">Spare Parts</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                            placeholder="Tell us about your requirements, timeline, and any specific questions..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                        Send Inquiry
                    </button>
                </form>
            </div>
        </section>
    );
}