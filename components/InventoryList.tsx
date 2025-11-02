import { urlFor } from "@/lib/sanity";
import ProductCard from "./ProductCard";
import { product } from "@/lib/types/product";
import ProductsPagination from "./ProductPagination";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "./ui/empty";
import { SearchX } from "lucide-react";

export default function InventoryList(
    {
        products, 
        filteredProducts, 
        category, 
        pageNumber, 
        totalPages,
        paginate
    }:
    {
        products: product[],
        filteredProducts: product[],
        category: string | string[],
        pageNumber: number,
        totalPages: number,
        paginate: (items: product[], currentPage: number, productsPerPage: number) => product[],
    }
) {
    

    const TOTAL_PRODUCT_PER_PAGE = 12

    

    //if there is no product from filter display message
    if (!filteredProducts.length && category) return (
        <Empty className="mx-auto">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <SearchX />
                </EmptyMedia>
                <EmptyTitle>No proud found</EmptyTitle>
                <EmptyDescription>Try filter another category</EmptyDescription>
            </EmptyHeader>
        </Empty>
    
    )
    if (filteredProducts.length) return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    paginate(filteredProducts, pageNumber, TOTAL_PRODUCT_PER_PAGE).map((item, index) => (
                        <ProductCard
                        alt={item.name}
                        key={index}
                        image={urlFor(item.image).url() || ""}
                        heading={item.name}
                        description={item.description} />
                    ))
                }
            </div>
            <div className="mt-16">
                <ProductsPagination currentPage={pageNumber} totalPages={totalPages} />
            </div>
        </>
    ) 
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    paginate(products, pageNumber, TOTAL_PRODUCT_PER_PAGE).map((item, index) => (
                        <ProductCard
                        alt={item.name}
                        key={index}
                        image={urlFor(item.image).url() || ""}
                        heading={item.name}
                        description={item.description} />
                    ))
                }
            </div>
            <div className="mt-16">
                <ProductsPagination currentPage={pageNumber} totalPages={totalPages} />
            </div>
        </>   
    )
}