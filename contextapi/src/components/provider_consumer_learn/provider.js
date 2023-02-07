import context from "./context";

import React,{useState} from 'react'

function Provider(props) {
    const [counter,setcounter]=useState(10);
    function updatecounter(){
        setcounter(prev => prev+1)
    }
  return (
    <>
    <context.Provider
    value={{counter:counter,updatecounter:updatecounter}}
    >


        {props.children}
    </context.Provider>
    </>
    
  )
}

export default Provider