export type DepType={
    limit:number,
    skip:number,
    search?:string,
    category?:string,
    sortBy?:string,
    order?:"asc"|"desc"
}

export type CartItemType={
    id:number,
    title:string,
    price:number,
    quantity:number
}
export type CartType={
    cartItems:CartItemType[],
    totalPrice:number
}

export type ProductType={
    id:number,
    title:string,
    price:number
}