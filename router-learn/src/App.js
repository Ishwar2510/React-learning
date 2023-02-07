
import './App.css';
import CRoutes from './Routes/Routes';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    
    <CRoutes/>
    </BrowserRouter>
    
    
  );
}

export default App;
