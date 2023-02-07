import React, { useContext } from 'react'
import context from './context'

const Child3 = () => {
  const consumer=useContext(context);
  return (
    // <context.Consumer>
    // {
    //     (context)=>{
    //         return <>
    //         <p>counter: {context.counter}</p>
    //         <button onClick={()=>{context.updatecounter()}}> click to incremnet</button>

    //              </>

    //     }
    // }
    // </context.Consumer>
    <>
       <p>counter: {consumer.counter}</p>
      <button onClick={()=>{consumer.updatecounter()}}> click to incremnet</button>

    </>
    
       
  )
}

export default Child3