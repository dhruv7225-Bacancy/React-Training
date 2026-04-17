import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../SliceWithTLK/CartSlice";

export const store =configureStore({
    reducer:{
        cart:cartReducer
    }
})