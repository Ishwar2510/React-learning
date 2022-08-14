
import React,{useState} from 'react'
  
  import Fileone from './Fileone';
  import Filetwo from './Filetwo';



function App() {
 
  const [flag,setFlag]=useState(true);
  // let a;
  // if(flag){
  //   a=<Fileone/>;
  // }else{
  //   a=<Filetwo/>;
  // }
 return (
   <>
    
    <button onClick={()=>{
      setFlag(!flag);
    }}> click me to chnage state</button>
    {/* or */}
    {(flag)?<h1>flag is set</h1>:<h1> flag not set</h1>}
   </>
  );
}

export default App;
