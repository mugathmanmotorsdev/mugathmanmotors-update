import { Suspense } from "react";
import InventoryCatalog from "./InventoryCatalog";
import { category } from "@/lib/types/category";
import { client } from "@/lib/sanity"
import { allProductsQuery, categoriesQueries } from "@/lib/queries"
import { product } from "@/lib/types/product";

export default async function Inventory({
    pageNumber,
    category,
    query
}: {
    pageNumber: number,
    category: string | string[],
    query: string
}) {

    //Fetch products from sanity
    const allProducts = await client.fetch(allProductsQuery) as product[]
    const categories = await client.fetch(categoriesQueries) as category[]
    
    return (
        <InventoryCatalog
        allProducts={allProducts}
        pageNumber={pageNumber}
        query={query}
        category={category}
        categories={categories.map((c: category) => c.title)}
        />
    )
}