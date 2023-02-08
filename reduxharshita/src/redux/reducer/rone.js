const initialState={
    counter:0,
    name:"ishwar",
    age:30,
}
// we write a reducer function heree
 const counterReducer=((state=initialState,action)=>{
    console.log("at reducer",state);
    switch(action.type){
        case 'incr':return {...state,counter:state.counter+1}
        case 'decr':return {...state,counter:state.counter-1};
        default: return state;
    }
})
export {counterReducer}
// just like use reducer for every state we will be having a new reducer