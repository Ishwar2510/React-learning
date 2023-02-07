import React, { useContext } from 'react'
import { datacontext } from '../App'


function C() {
    const consumer=useContext(datacontext)
  return (
    <div>C  <span>   </span>
    {consumer.fname}{consumer.lname}
    </div>
  )
}

export default C