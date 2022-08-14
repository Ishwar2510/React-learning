import React from 'react';

// import Timer from './timer_using_state/Timer';
import Welcome from './classBasedComponents/Welcome';
import Timer from './state_and_lifcycle/Timer';
import Toggle from './HandlingEvents/Toggle';
import Form from './ControlledComponents/Form';
function App() {

  let array =[{name:"ishwar", age:30},{name:"navin",age:25},{name:"rakesh",age:32}];
  
  
  return (
    <>
     <h1>Lets Start</h1>

      {/* <Welcome name="ishwar" age="20"/> */}
     {/* <Classcard name ="ishwar"/> */}
     {/* <Timer /> */}
     {/* <Welcome op={array}/>   */}
     {/* <Timer/> */}
     {/* <Toggle/> */}
     <Form/>
     
      
    </>
  );
}

export default App;