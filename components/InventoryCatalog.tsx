"use client"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import BrandFilter from "@/components/BrandFilter"
import { Search, X } from "lucide-react"
import { product } from "@/lib/types/product"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { search } from "@/lib/helper"
import InventoryList from "./InventoryList"
import { Separator } from "./ui/separator"

export default function InventoryCatalog(
  {
    pageNumber, 
    allProducts, 
    category, 
    query, 
    categories
  }:
  {
    pageNumber: number,
    allProducts: product[],
    category: string | string[],
    query: string,
    categories: string[]
  }
) {
  const [totalPages, setTotalPages] = useState<number>()
  const [queryVal, setQueryVal] = useState<string>()
  const searchParams = useSearchParams()
  const router = useRouter()

  //search result
  const searchResuslt = search(allProducts, query)

  //this always provide the products that we will use 
  //if there is a search query we will use search result, if not we will use all product by default
  const products = query ? searchResuslt : allProducts

 //filter product by brand query parameter or search query (q)
  const filteredProducts = products.filter((product) => {
    return product.category.title === category || category?.includes(product.category.title)
  })

  //submit event handler
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set("q", queryVal)

    router.replace(`?${params}`, {scroll: false})
  }

  //pagination control
  const paginate = (items: product[], currentPage: number, productsPerPage: number) => {
      const skip = (currentPage - 1) * productsPerPage
      const take = skip + productsPerPage
      const totalPages = Math.ceil(items.length / productsPerPage)

      const products = items.slice(skip, take)
      
      setTotalPages(totalPages)
      return products
  }

  //clear search
  const clearSearch = () => {
      router.replace("?", {scroll: false})
  }

  
  return (
      <>           
        {/* products section */}
        <section className="py-12 container mx-auto flex flex-col md:flex-row gap-8">
          <section className="py-12 md:w-1/3 md:block px-5 flex flex-col gap-6">
            <form action="#" onSubmit={onSubmit}>
              <InputGroup className="w-full my-5">
                <InputGroupInput 
                className=""
                placeholder="Search products..."
                value={queryVal}
                defaultValue={query}
                onChange={(e) => {setQueryVal(e.target.value)}} />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <InputGroupButton 
                  variant="secondary"
                  onClick={clearSearch}>
                    <X />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </form>
            <BrandFilter categories={categories} />
          </section>

          <div className="hidden md:block">
            <Separator orientation="vertical" />
          </div>
          
          <section className="py-12 container mx-auto px-4">
              <InventoryList 
              products={products}
              filteredProducts={filteredProducts}
              category={category}
              pageNumber={pageNumber}
              totalPages={totalPages}
              paginate={paginate}
              /> 
          </section>
        </section>    
      </>
  )
}