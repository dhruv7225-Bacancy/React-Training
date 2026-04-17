import { createSlice } from "@reduxjs/toolkit";

// const type

const counterSlice=createSlice({
    name:"counter",
    initialState:{ counter: 0 },
    reducers:{
        "add":(state,action)=>{
            state.counter+=action.payload
            return state
        }
    }
})

export const {add} =counterSlice.actions

export const counterReducer=counterSlice.reducer