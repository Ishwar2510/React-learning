import React, { useContext } from 'react'
import C from './C'
import { datacontext } from '../App'

function P() {

    const consumer=useContext(datacontext)
  return (
    <div>P {consumer.p}
    <C/>
    
    </div>
  )
}

export default P