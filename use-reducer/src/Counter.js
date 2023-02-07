import React,{useReducer} from 'react'

const Counter = () => {
    const [state,dispatcher]=useReducer(reducer,0);

    function reducer(state,action){
        if(action.type==='inc'){
            return state+1;
        }else if(action.type=='dec'){
            return state-1;
        }
        }
    
  return (
    <>
        <button onClick={()=>{
            dispatcher({type:'inc'})
        }}>Increment</button><p>{state}</p><button onClick={()=>{
            dispatcher({type:'dec'})
        }}>Decrement</button>
    </>
   
  )
}

export default Counter