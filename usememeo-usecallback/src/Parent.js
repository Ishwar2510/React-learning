import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    const [num1,setnum1]=useState(0);
    const [num2,setnum2]=useState(0);
    console.log('parent rendered');

    // function stateChange(){
    //   console.log("parent called this time")
    // }
    function stateChanged(){
      console.log("parent called this time")
    }
    const stateChange=useCallback(()=>{stateChanged()},[])
  return (
  <>
    <div>Parent</div>
    <h1>{num1}</h1>
    <button onClick ={()=>{
        setnum1(prev=>prev+1)
    }
        
    }>Incremenet</button>
    <Child num2={num2} setnum2={setnum2} stateChange={stateChange}/>
  </>
  )
}

export default Parent