import { useReducer } from "react";

function Counter(){
    const[counter,dispatcher]=useReducer(reducerf,0)
    function reducerf(counter,action){
        if (action.type==="incr"){
            return counter+1

        }else if(action.type==="decr"){
            return counter-1
        }else{
            return counter
        }
    }
    return(
        <>
            <button onClick={()=>{dispatcher({type:"incr"})}}>+</button>
            <h1>{counter}</h1>
            <button onClick={()=>{dispatcher({type:"decr"})}}>-</button>
        </>
    )
    
}
export default Counter