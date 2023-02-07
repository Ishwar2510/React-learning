import React from 'react'
import {useParams} from 'react-router-dom'
import { sdata } from '../Constants/StudentData'

function StudentInfo() {
    console.log("StudentInfo called 1")
    const {id}=useParams()
    const data=sdata.filter((ele)=>{
        return ele.id==id;
    })
    
  return (
    <>
        {
            data.map((ele)=>{
                return <p key={ele.id}>{`Details are ${ele.title} ${ele.url}`}</p>
            })
        }
    </>
    
    
  )
}

export default StudentInfo