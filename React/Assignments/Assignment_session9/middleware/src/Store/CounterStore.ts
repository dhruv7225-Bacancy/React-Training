import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../Slice/CounterSlice";
const logger=store=>next=>action=>{
    console.log("action bfr cng",action);
    console.log("store befaure change",store.getState());
    next(action)
    console.log("store after change",store.getState());
}

export const counterStore=configureStore({
    reducer:{
        counter:counterReducer
    },
    middleware:(getDefaultMiddleWare)=>{
        console.log(getDefaultMiddleWare());
        return getDefaultMiddleWare().concat(logger)
    }
})
