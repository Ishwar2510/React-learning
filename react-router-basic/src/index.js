import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
    <BrowserRouter>
      <App/>
    </BrowserRouter>


  {/* // way one
  <BrowserRouter>
  <nav style={{listStyle:"none" ,display:'flex' , justifyContent:'space-around'}}>
    <Link to="/"><li>App</li></Link>
    <Link  to="/Home"><li>Home</li></Link>
    <Link to="About"><li>About</li></Link>
    <Link to="contact"><li>contact</li></Link>
  </nav>
 
 
  <Routes>
 
    <Route path="/" element={<App/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    
    <Route path="/contact" element={<Contactus/>}/>

  </Routes>
   
  </BrowserRouter> */}

  </>
 
);

