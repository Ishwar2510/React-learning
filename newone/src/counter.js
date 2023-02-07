import {useState} from 'react'

function Counter(){
    const [counter,setCounter]=useState(0)
    function increment(){
        setCounter(prev=>prev+1)
    }
    function decrement(){
        setCounter((prev)=>{
            let ans =(prev===0)?prev:prev-1
            return ans 
        })
    }
        
    return (
        <>
            <div className="counter">
                <button onClick={increment}>+</button><span>
                <h1>{counter}</h1></span>
                <button onClick = {decrement}>-</button>

            </div>
        </>
    )
}
export default Counter