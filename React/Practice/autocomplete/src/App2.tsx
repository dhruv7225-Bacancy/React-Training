import React, { useEffect, useRef, useState } from 'react'
import './App.css'
const App = () => {
  const [list,setList]=useState([])
  const [input,setInput]=useState("")
  const [show,setShow]=useState<boolean>(false)
  // const [cache,setCache]=useState({})
  const cache=useRef<object[]>({})

  const fetchData=async ()=>{
    if(cache.current[input]){
      setList(cache.current[input])
      return 
    }
    const res=await fetch("https://dummyjson.com/recipes/search?q="+input)
    const data=await res.json()
    setList(data?.recipes)
    // setCache(prev=>{
    //   return {...prev,[input]:[...data?.recipes]}
    // });
    cache.current={...cache.current,[input]:data.recipes}
    console.log(cache);
  }

  useEffect(()=>{
    const timer=setTimeout(fetchData,1000)
    return ()=>clearTimeout(timer)
  },[input])

  function handleKeyPress(e){
    if(e.key==="ArrowDown"){
      if(list.length){
        console.log("first child");
        
        document.querySelectorAll('.list-item')[0].focus()
      }
    }
    else if(e.key==="ArrowUp"){
      if(list.length){
        document.querySelectorAll('.list-item')[list.length-1].focus()
      }
    }
  }
  function handleKeyOnList(e){
    if(e.key==="ArrowDown"){
      const next=e.target.nextSibling
      if(next){
        next.focus()
      }
      else{
        document.querySelector('#search')?.focus()
      }
    }
    else if(e.key==="ArrowUp"){
      const prev=e.target.previousElementSibling
      if(prev){
        prev.focus()
      }
      else{
        document.querySelector('#search')?.focus()
      }
    }
    else if(e.key==="Enter"){
      // console.log(e.target.innerText);
      
      setInput(e.target.innerText)
      setShow(false)
      document.querySelector('#search')?.focus()
    }
  }
  return (
    <div>
      <div>
        <div>
          <input 
            type="text"
            id="search"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onBlur={()=>setShow(false)}
            onFocus={()=>setShow(true)}
            onKeyDown={handleKeyPress}
            />
        </div>
        <div className='list'>
          {
            show &&
            list.map((item,index)=>
            <span 
              className='list-item' 
              key={item.id}
              tabIndex={index}
              onClick={()=>setInput(item.name)}
              onFocus={()=>{
                // setInput(item.name)
                setShow(true)
              }}
              onKeyDown={handleKeyOnList}
            >{item.name}</span>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
