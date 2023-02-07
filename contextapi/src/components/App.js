import React from 'react';
import '../App.css';
import Provider from './provider_consumer_learn/provider';
import Child1 from './provider_consumer_learn/Child1';

function App() {
  return (
    <>
      <Provider>
      <Child1/>
      </Provider>

    </>
    
  
       
    
  );
}

export default App;
