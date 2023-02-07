import React, { memo } from 'react'

function Child({num2,setnum2,stateChange}) {
    console.log('child rendered')
  return (
    <>
    <div>Child</div>
    <h1>{num2}</h1>
    <button onClick={()=>{
        setnum2(prev=>prev+1)
    }}>Incremet</button><span><button onClick={stateChange}>Change</button></span>
    </>
  )
}

export default memo( Child)