import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{       
        inc:(state)=>{ state.value+=1},
        dec:(state)=>{state.value--}
    }
})
console.log("counterslice",counterSlice)
export const {inc,dec}=counterSlice.actions

const counterReducer=counterSlice.reducer 
export {counterReducer} 
