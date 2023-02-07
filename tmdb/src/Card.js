import React from 'react'

function Card({title,poster,overview}) {
    const baseurl="https://image.tmdb.org/t/p/original/"
   
  return (
    <div className="Card" style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:"center",backgroundColor:"blue",height:"300px", width:"20%",margin:"15px",padding:"none"}} >
   
    <img src={`${baseurl}${poster}`} width="100%" height="150px"/>
    
   
    <h5>{title}</h5>
    
    </div>
  )
}

export default Card