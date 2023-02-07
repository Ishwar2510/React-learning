import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function Navbar() {
    console.log("Navbar called 1")
  return (
    <>
    <Link to='/'>Home</Link>||
    <Link to='/About'>About</Link>||
    <Link to='/Students'>Students</Link>||
    <Outlet/>
    
    </>
  )
}

export default Navbar