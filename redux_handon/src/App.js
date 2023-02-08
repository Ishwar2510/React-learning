import logo from "./logo.svg";
import "./App.css";
import {useSelector,useDispatch} from 'react-redux'
import {incrCounter, decrCounter} from './redux/action/action'

function App() {
  const counter = useSelector((store)=>{
    return store.countReducer.counter
  })
  const dispatcher = useDispatch()
  return (
    <div>
      <h1>hello</h1>
      <h1>{counter}</h1>
      <button onClick={()=>{dispatcher(incrCounter())}}>+</button>
      <button  onClick={()=>{dispatcher(decrCounter())}}>-</button>
    </div>
  );
}

export default App;
