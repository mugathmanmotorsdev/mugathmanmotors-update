import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"

const trucks = [
  {
    image: "/hero.png",
    heading: "Howo 6 X 4 Dump Truck",
    description: "Powerful, reliable trucks build to handle every job with ease."
  },
  {
    image: "/volvo.jpeg",
    heading: "Volvo FM - Truck",
    description: "Heavy duty tractors and dozers tough farm and construction work."
  },
  {
    image: "/daf-2.jpg",
    heading: "Daf XF 95",
    description: "Genuine spare parts to keep your vehicles running smoothly at peak performance."
  }
]

const tractors = [
  {
    image: "/product-2.jpg",
    heading: "Howo 6 X 4 Dump Truck",
    description: "Powerful, reliable trucks build to handle every job with ease."
  },
  {
    image: "/tractor.jpg",
    heading: "Volvo FM - Truck",
    description: "Heavy duty tractors and dozers tough farm and construction work."
  },
  {
    image: "/bulldozer.jpg",
    heading: "Daf XF 95",
    description: "Genuine spare parts to keep your vehicles running smoothly at peak performance."
  }
]

const cars = [
  {
    image: "/car-1.jpg",
    heading: "Howo 6 X 4 Dump Truck",
    description: "Powerful, reliable trucks build to handle every job with ease."
  },
  {
    image: "/car-2.jpg",
    heading: "Volvo FM - Truck",
    description: "Heavy duty tractors and dozers tough farm and construction work."
  },
  {
    image: "/car-3.jpg",
    heading: "Daf XF 95",
    description: "Genuine spare parts to keep your vehicles running smoothly at peak performance."
  }
]

const spareParts = [
  {
    image: "/sparepart-1.jpg",
    heading: "Howo 6 X 4 Dump Truck",
    description: "Powerful, reliable trucks build to handle every job with ease."
  },
  {
    image: "/product-4.jpg",
    heading: "Volvo FM - Truck",
    description: "Heavy duty tractors and dozers tough farm and construction work."
  },
  {
    image: "/sparepart-2.jpg",
    heading: "Daf XF 95",
    description: "Genuine spare parts to keep your vehicles running smoothly at peak performance."
  }
]

export default function Page() {
    
    return (
        <div className="bg-white text-black">
            {/* Hero section */}
            <section className="h-[80vh] flex flex-col justify-center bg-[url('/hero-2.png')] bg-cover bg-center text-white">
                <div className="p-8" >
                    <h1 className="text-5xl md:text-6xl font-bold">Explore Our Inventory</h1>
                    <p className="mt-4 text-lg">
                        Browse quality vehicles, equipment, and spare parts for your logistics need
                    </p>

                </div>
            </section>

            {/* Trucks section */}
            <section className="bg-[#f8f4ff] py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-4">Trucks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {trucks.map((item, index) => (
                    <ProductCard key={index} {...item} />
                  ))}
                </div>
              </div>
            </section>

            {/* Tractors Section */}
            <section className="bg-[#f8f4ff] py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-4">Tructors and Bulldozers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tractors.map((item, index) => (
                    <ProductCard key={index} {...item} />
                  ))}
                </div>
              </div>
            </section>

            {/* Cars Section */}
            <section className="bg-[#f8f4ff] py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-4">Cars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cars.map((item, index) => (
                    <ProductCard key={index} {...item} />
                  ))}
                </div>
              </div>
            </section>

            {/* Spare parts Section */}
            <section className="bg-[#f8f4ff] py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-4">Spare Parts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {spareParts.map((item, index) => (
                    <ProductCard key={index} {...item} />
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}