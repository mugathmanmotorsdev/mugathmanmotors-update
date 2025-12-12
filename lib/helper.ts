import { product } from "./types/product"
import { sendGTMEvent } from "@next/third-parties/google"

export const search = (items: product[], query: string) => {
    const searchedItems = items.filter(item => item.name.toLowerCase().includes(query?.toLowerCase()))

    return searchedItems
}


export const sendWhatssappEvent = () => {
  sendGTMEvent({
    event: "whatsapp_click"
  })
}