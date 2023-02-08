import { createSlice } from "@reduxjs/toolkit";

const counter=createSlice({
    name:"counter",
    initialState:{counter:0,payload:10},
    reducers:{
        increment:(state,actions)=>{return state.counter+=state.payload},
        decrement:(state)=>{return state.counter-=state.payload;},
        reset:(state,action)=>{return state.counter=action.payload}
    }
})
export {increment,decrement,reset};
export default counter.reducer