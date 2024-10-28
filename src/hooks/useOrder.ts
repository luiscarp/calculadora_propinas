import { useState } from "react"
import type { OrderItem, MenuItem } from "../types"


export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist){
            console.log("ya existe")
        } else {
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
        console.log(order)
    }

     

  return {
    addItem
    
  }
}
