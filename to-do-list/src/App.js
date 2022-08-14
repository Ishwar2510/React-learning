import React, { useEffect, useState } from 'react'
import Todoform from './TodoForm'
import TodoList from './TodoList';

function App() {
   
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        if(localStorage.getItem('todos')){
            const data=localStorage.getItem('todos');
            
            setTodos(JSON.parse(data));
        }
    },[])

    useEffect(()=>{
        
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])


     function addTodo(data){
         setTodos((prevstate)=>{
            return [...prevstate,data];

        })
        

      

    }
    function deleteTodo(id){

         setTodos((prevstate)=>{
            
            return prevstate.filter((e)=>{
                return e.id!=id;
            })
        })
      

        
        
    }
   
    
  return (
    <>
        <h1> To Do Application </h1>
        <Todoform addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>

    </>
  )
  
    
  
}

export default App