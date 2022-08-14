import React from 'react'

function TodoList({todos,deleteTodo}) {
   
  return (
    <>
        {
            todos.map((todo)=>{
                return (
                    <li key={todo.id}>
                        {todo.todostring}
                        <button onClick={()=>{
                            deleteTodo(todo.id);
                        }}> Delete</button>
                    </li>
                )

            })
        }
    </>
  )
}

export default TodoList