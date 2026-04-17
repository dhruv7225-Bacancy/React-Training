import type { CartItemType } from "../types"

export function addToCart(item:CartItemType){
    return {
        type:"addToCart",
        payload:item
    }
}

export function inc(id:number){
    return {
        type:"inc",
        payload:{id}
    }
}
export function dec(id:number){
    return {
        type:"dec",
        payload:{id}
    }
}