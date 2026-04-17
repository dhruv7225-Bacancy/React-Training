import React, { useReducer, useState } from 'react'
import Todo from './Todo'

export type TodoType={
  id:number,
  data:string,
  status:"pending"|"completed"
}
export type Action=
| {type:"add", payload:{data:string}}
| {type:"remove", payload:{id:number}}
| {type:"update", payload:{id:number,data:string}}
| {type:"toggleCompleted", payload:{id:number}}

const App = () => {

  const initialState:TodoType[]=[]

  function reducer(todos:TodoType[],action:Action):TodoType[]{
    
    switch(action.type){
      case "add":
        return [...todos,{id:Date.now(),data:action.payload.data,status:"pending"}]
      case "remove":
        return todos.filter(t=>t.id!==action.payload.id)
      case "update":
        return todos.map((todo)=>{
          if(todo.id===action.payload.id){
            return {...todo,data:action.payload.data}
          }
          return todo
        })
      case "toggleCompleted":{
        return todos.map((todo)=>{
          if(todo.id===action.payload.id){
            return {...todo,status:todo.status==="pending"?"completed":"pending"}
          }
          return todo
        })
      }
      default:
        return todos

    }

  }
  const [todos,dispatch]=useReducer(reducer,initialState)
  const [msg,setMsg]=useState<string>("");
  return (
    <>
    <div>
      <input 
        type="text" 
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}
        />

        <button onClick={()=>{
          dispatch({type: "add", payload:{data:msg}})
          setMsg("")
        }}>add</button>
    </div>

    <div>
      {
        todos && todos.map(todo=>(<Todo key={todo.id} todo={todo} dispatch={dispatch}/>))
      }
    </div>
    </>
  )
}

export default App
