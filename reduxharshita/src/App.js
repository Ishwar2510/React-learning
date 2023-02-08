import logo from './logo.svg';
import './App.css';
import { useSelector ,useDispatch} from 'react-redux';
import {increment,decrement} from './redux/action/actions'


function App() {

  
  const counter=useSelector((state)=>{return state.counterReducer.counter})
  console.log(counter);
  const dispatch=useDispatch();

  // direct writing action into dispatch as can be done in reducer
  // function incrementf(){
  //   dispatch({type:'incr'})
  // }
  // function decrementf(){
  //   dispatch({type:'decr'})
  // }

  // defining disptach object in action
  function incrementf(){
    dispatch(increment());
  }
  function decrementf(){
    dispatch(decrement());
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={incrementf}>+</button>
      <button onClick={decrementf}>-</button>
    </div>
  );
}

export default App;
