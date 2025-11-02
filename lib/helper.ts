import { product } from "./types/product"

export const search = (items: product[], query: string) => {
    const searchedItems = items.filter(item => item.name.toLowerCase().includes(query?.toLowerCase()))

    return searchedItems
}