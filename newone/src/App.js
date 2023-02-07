// import { createContext } from 'react';
import { createContext } from 'react';
import './App.css';
// import Counter from './counter';
// import Counter from './counterreducer';
import Gp from './components/Gp';




function App() {
 let datacontext=createContext()
  
 
  return (
    <div className="App">
      <header className="App-header">
      <datacontext.Provider value={{fname:"ishwar",lname:"kumar",gp:"A Lakshman rao",p:"A Narayan Rao"}}>
      <Gp/>
      </datacontext.Provider>
      
        
      </header>
    </div>
  );
}

export default App
export {datacontext}
