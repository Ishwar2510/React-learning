import React, { useContext } from 'react'
import { datacontext } from '../App'
import P from './P'


function Gp() {
    const consumer=useContext(datacontext)
  return (
    <div>Gp
    {consumer.gp}
    <P/>
    </div>
    
  )
}

export default Gp