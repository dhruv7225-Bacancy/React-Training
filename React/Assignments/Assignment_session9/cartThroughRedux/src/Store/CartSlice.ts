import { combineReducers, createStore } from "redux";
import type { CartItemType, CartType } from "../types";

const initState:CartType={
    cartItems:[],
    totalPrice:0
}

const CartReducer=(state=initState,action)=>{
    switch(action.type){
        case "addToCart":{
            return {
                ...state,
                cartItems:[...state.cartItems,action.payload],
                totalPrice:state.totalPrice+(action.payload.price*action.payload.quantity)
            }
        }
        case "inc":{

            let price=0
            
            return {
                ...state,
                cartItems:(state.cartItems.map((item:CartItemType)=>{
                    if(item.id===action.payload.id){
                        item.quantity++;
                        price=item.price
                    }
                    return item
                }))
                
                ,totalPrice:state.totalPrice+price
            }
        }
        case "dec":{
            let price=0
            
            return {
                ...state,
                cartItems:(state.cartItems.map((item:CartItemType)=>{
                    if(item.id===action.payload.id){
                        console.log(item.id);
                        
                        item.quantity--;
                        price=item.price
                    }
                    return item
                }))
                .filter((item:CartItemType)=>item.quantity!==0)
                ,
                totalPrice:state.totalPrice-price
            }
        }
        default:
            return state
    }
}
const Reducers=combineReducers({
    cart:CartReducer
})
export const CartStore=createStore(Reducers)