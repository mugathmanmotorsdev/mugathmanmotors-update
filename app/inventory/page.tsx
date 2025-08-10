import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"

export const metadata = {
  title: "Inventory",
  description: "Browse our inventory of heavy-duty trucks, tractors, and farm equipment."
}

const trucks = [
  {
    image: "/hero.png",
    heading: "Howo 6 X 4 Dump Truck",
    description: "Howo are so durable and powerful, ideal for heavy-duty transport."
  },
  {
    image: "/volvo.jpeg",
    heading: "Volvo FM - Truck",
    description: "Volvo delivers reliable performance with advanced safety and exceptional comfort."
  },
  {
    image: "/daf-2.jpg",
    heading: "Daf XF 95",
    description: "DAF trucks combine strength and reliability, making them perfect for tough transport tasks."
  }
]

const tractors = [
  {
    image: "/product-2.jpg",
    heading: "CAT 336 GC",
    description: "CAT bulldozers are built for power, durability, and rugged performance on tough terrains."
  },
  {
    image: "/tractor.jpg",
    heading: "New Holland Tractor",
    description: "New Holland tractors combine innovation and reliability for efficient farming and land work."
  },
  {
    image: "/bulldozer.jpg",
    heading: "WALO Excavator",
    description: "WALO bulldozers deliver strength and precision for large-scale construction and earthmoving."
  }
]

const cars = [
  {
    image: "/car-1.jpg",
    heading: "Honda Civic",
    description: "Honda offers fuel efficiency, comfort, and everyday reliability."
  },
  {
    image: "/car-2.jpg",
    heading: "Mercedes Benz",
    description: "Mercedes Benz blends luxury, performance, and timeless elegance."
  },
  {
    image: "/car-3.jpg",
    heading: "BMW M4",
    description: "BMW delivers sporty power with premium design and handling."
  }
]

const spareParts = [
  {
    image: "/sparepart-1.jpg",
    heading: "Trucks Rim",
    description: "Trucks Rim provides sturdy support and stability for heavy-duty truck tires."
  },
  {
    image: "/product-4.jpg",
    heading: "Automobile Wheel",
    description: "Automobile Wheel offers durable and reliable performance for everyday driving."
  },
  {
    image: "/sparepart-2.jpg",
    heading: "  Tires & Rims",
    description: "Tires & Rims provide durable and reliable performance for everyday driving."
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