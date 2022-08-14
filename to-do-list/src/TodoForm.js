import React, { useState } from 'react'

function Todoform(props) {
    const[todostring,setTodostring]=useState('');
    const [idg,sidg]=useState(0);

    function submitHandler(event){
        event.preventDefault();
        if(!todostring){
            alert("Empty pls add to do")
            return;
        }
        
        sidg((prevState)=>{return prevState+1});

        const todo={
            id:idg,
            todostring,
        }
        props.addTodo(todo);
        setTodostring('')

    }
  return (
    <>
        <form onSubmit={submitHandler}>
            <input
                id="input"
                name="input"
                value={todostring}
                onChange={(event)=>{
                    setTodostring(event.target.value)

                }}
            />
            <button>Add toDo</button>
        </form>
    </>
  )
    
  
}

export default Todoform