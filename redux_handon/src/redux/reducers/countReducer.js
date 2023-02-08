
const intialState={
    counter:0,
    data:1

}
export function countReducer(state=intialState,action){
    if(action.type==='incr'){
        return {...state,counter:state.counter+1}
    }
    else if(action.type==='decr'){
        return {...state,counter:state.counter-1}
    }else{
        return {...state}
    }
}