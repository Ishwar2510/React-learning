import React from 'react'
import { sdata } from '../Constants/StudentData'
import {Link,Outlet} from "react-router-dom"
function Students() {
  console.log("Students called 1")
  return (
    <>
     <h1>Students</h1>
     {
      sdata.map((ele)=>{
        return <Link key ={ele.id} to={`${ele.id}`}><li >{ele.title}</li></Link>
        
      })
     }
     <Outlet/>
    </>
   
  )
}

export default Students