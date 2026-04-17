import { createSlice } from "@reduxjs/toolkit";

import type { CartItemType, CartType } from "../types";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalPrice: 0
    },
    reducers: {
        addToCart: (state:CartType, action) => {
            state.cartItems.push(action.payload)
            state.totalPrice = state.totalPrice + (action.payload.price * action.payload.quantity)
        },
        inc: (state:CartType, action) => {

            state.cartItems = (state.cartItems.map((item: CartItemType) => {

                
                if (item.id === action.payload) {
                    item.quantity++;
                    state.totalPrice = state.totalPrice + item.price
                }
                return item
            }))

        },
        dec: (state:CartType, action) => {

            state.cartItems = (
                state.cartItems
                    .map((item: CartItemType) => {
                        if (item.id === action.payload) {
                            item.quantity--;
                            state.totalPrice = state.totalPrice - item.price
                        }
                        return item
                    })
                    .filter((item: CartItemType) => item.quantity !== 0)
            )


        }
    },

})


export const cartReducer = cartSlice.reducer

export const { addToCart, inc, dec } = cartSlice.actions