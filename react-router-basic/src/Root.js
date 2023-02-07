import React from 'react'
import { useParams } from 'react-router-dom'

function Root() {
  
  const params=useParams();
  return (
    <h1>Root  {params.id}</h1>
  )
}

export default Root