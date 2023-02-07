import React from 'react'
import {useParams} from 'react-router-dom'


function Info({data}) {
  
    
    const para=useParams();
    console.log(para.id);
    console.log(data[para.id-1])
   
    
  return (
    <>
        <h1>HEllo</h1>
    </>
    
  )
}

export default Info