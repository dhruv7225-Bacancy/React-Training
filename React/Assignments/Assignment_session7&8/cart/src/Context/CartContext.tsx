import { createContext, useCallback, useState } from "react";
import type { CartContextType, CartItemType } from "../types";

const CartContext = createContext<CartContextType|null>(null)


export function CartProvider({ children }:{children:React.ReactNode}) {

    const [cart, setCart] = useState<CartItemType[]>([]);
    
    const addToCart=useCallback(function addToCart(id:number,title:string,price:number) {
        setCart((prev)=>{
            return [...prev,{id,title,price,quantity:1}]
        })
    },[])

    const dec = useCallback(function dec(id: number) {
        setCart(prev =>
            prev
                .map(item => {
                    if (item.id === id) {
                        item.quantity--;
                        return {...item}
                    }
                    return item
                })
                .filter(item => item.quantity !== 0)
        )
    }, [])

    const inc = useCallback(function inc(id: number) {
        setCart((prev) => prev.map((item) => {
            if (item.id === id) {
                item.quantity++;
                return {...item}
            }
            return item
        }))
    }, [])


    return (
        <>
            <CartContext.Provider value={{ cart, setCart, inc, dec,addToCart }}>
                {children}
            </CartContext.Provider>
        </>
    )

}

export {CartContext}