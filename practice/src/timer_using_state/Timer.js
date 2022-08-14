import React,{useState} from 'react';

let id=0;
function Timer(){
  const [clock,setclock]=useState(new Date().toLocaleTimeString())
  const [flag,setflag]=useState(true)
  function stop(){
    setflag(false);
  }
  if(flag){
    id = setInterval(()=>{
      if(flag){
        setclock(new Date().toLocaleTimeString())
      }else{
        setflag(false);
        clearInterval(id);
        setclock("Nothing")
      }
    },1000)

  }
  
  return (
    <>
    <h1>Timerrrr</h1>
    <h3>{clock}</h3>
    <button onClick={stop}>On CLick</button>
    </>
  )
}

export default Timer;