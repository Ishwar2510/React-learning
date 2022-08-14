
import React, { useState } from "react";

// yes
function App() {
  const [user,setUser]=useState([
    {name :"ishwar",age :25,id:1},{name:"navin",age:20,id:2}
  ])

  const [selected,setSelected]=useState();
  

  function incrementAge(id){
      setUser(()=>{
        return user.map((ele)=>{
          if(ele.id===id){
            return {...ele, age: ele.age+1}
          }else{
            return ele;
          }
        })
      })
  }

  function select(id){
    setSelected(id);
  }
  return (
    <>
        <div id ="selected">
          <h1> selected : {(selected)?`${selected.name} is ${selected.age}years old`:"none"}</h1>
        </div>
        {
          user.map((user)=>{
              return (
                <div>
                <h1> {user.name} is {user.age}years old</h1>
                <button onClick={()=>{
                  incrementAge(user.id);
                }}>Increase age</button>
                <button onClick={()=>{select(user.id)}}>Select this user</button>
              </div>
              )
          })
        }
    </>
  );
}

export default App;
