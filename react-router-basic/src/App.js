import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contactus from './Contactus';
import Root from './Root';
function App() {
  return (
    <>
   <h1>Router example</h1>
   <nav style={{listStyle:"none" ,display:'flex' , justifyContent:'space-around'}}>
    <Link to="/2"><li>Root</li></Link>
    <Link  to="/Home"><li>Home</li></Link>
    <Link to="About"><li>About</li></Link>
    <Link to="contact"><li>contact</li></Link>
    
  </nav>
   
   <Routes>

      <Route path='/:id' element={ <Root/>}/>
      <Route path='/Home' element={ <Home/>}/>
      <Route path='/About' element={ <About/>}/>
      <Route path='/Contact/' element={ <Contactus/>}/>   
      <Route path='*' element={<h1>Error Syntax</h1>}/>
   </Routes>
    </>
  
  )
}

export default App;
