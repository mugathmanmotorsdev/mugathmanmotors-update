import Footer from "@/components/Footer"
import Inventory from "@/components/Inventory"
import InventoryCatalogSkeleton from "@/components/IventoryCatalogSkeleton"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"

export const metadata = {
  title: "Inventory | Mugathman Motors - Trucks, Tractors & Spare Parts in Nigeria",
  description:
    "Explore Mugathman Motors’ inventory of heavy-duty trucks, tractors, trailers, and farm equipment. Trusted dealer for quality vehicles, spare parts, and logistics solutions across Kano and Nigeria.",
};

export default async function Page(
  {searchParams}:
  {searchParams: Promise<{q: string, category: string, page: string}>}
) {

  const { category, page, q } = (await searchParams)
  const pageNumber = parseInt(page || "1")

  return (
      <div className="bg-white text-black">
          {/* Hero section */}
          <section className="h-[80vh] mx-5 rounded-2xl flex flex-col justify-center items-center bg-[url('/inventory-hero.jpg')] bg-cover bg-left text-white">
              <div className="text-center p-8 w-full" >
                  <h1 className="text-5xl md:text-6xl font-bold">Explore Our Inventory</h1>
                  <p className="md:w-3/5 mx-auto mt-4 text-lg">
                    Discover a wide selection of trucks, tractors, cars, and genuine spare parts built for performance and reliability. Whether for business or personal logistics, Mugathman Motors provides trusted vehicles and equipment to keep you moving efficiently across Nigeria.
                  </p>
                  <div className="flex gap-5 justify-center mt-5">
                    <Button 
                    className="text-[#150150] bg-white rounded-full hover:bg-transparent hover:text-white hover:border-2 hover:border-white" 
                    >View Inventory</Button>
                  </div>
              </div>
          </section>

          <Suspense fallback={<InventoryCatalogSkeleton />}>
            <Inventory 
            pageNumber={pageNumber}
            query={q}
            category={category}
            />
          </Suspense>

          {/* Footer */}
          <Footer />
      </div>
  )
}