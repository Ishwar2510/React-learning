import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from "../reducer/rone";
console.log(counterReducer);

const store =configureStore({
    reducer:{
        counterReducer:counterReducer,
    }
})
export default store;