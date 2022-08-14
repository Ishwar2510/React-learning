
import React ,{useState}from 'react';



function App() {
  
  const [count,setCount]=useState(0);
  // y gets called twice 
  function countIncrement(){
    // setCount(count+1);
    // console.log(count) ;
    // setCount(count+1);
    // console.log(count) ;
    // yaha par atchong hoga 
    // react with render set count only once 
    // moreover if u log the vlaue of count . it will e the previous value irself
    // once react is rendered then only the value of count will increase
    // this phenomena is called as batching 
    // to avoid this we can use previous state logic recat has provide a workaround for it
    // use this synatx
    // setCount(callackFunction which serts the count);
    setCount((prevCount)=>{return prevCount+1});
    
   
  }
  function countDecrement(){
    if(count>0){
    setCount(count-1);
    setCount(count-1);
    }
    
  }
  
  return (
   <>
    
    <h1>
    {count}

    </h1>
    <div>
        <button className ="btn" onClick={countIncrement}>Increment</button>
        <button className ="btn" onClick={countDecrement}>Decrement</button>
        <button className ="btn" onClick={()=>{setCount(0)}}>Reset</button>
    </div>
    
   </>
  )
}

export default App;
