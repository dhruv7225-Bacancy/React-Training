import React, { useEffect, useRef, useState } from 'react'
import './App.css'
const App = () => {
  const [list,setList]=useState([])
  const [input,setInput]=useState("")
  const [show,setShow]=useState<boolean>(false)
  const [activeIndex,setActiveIndex]=useState<number>(-1);
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

  useEffect(()=>{
    setActiveIndex(-1)

  },[list])
  

  function handleKeyPress(e){
    if(list.length===0)return
    if(e.key==="ArrowDown"){
      setActiveIndex(prev=>prev===list.length-1?0:prev+1)
    }
    else if(e.key==="ArrowUp"){
      setActiveIndex(prev=>prev===0?list.length-1:prev-1)
    }
    else if(e.key==="Enter"){
      if(activeIndex>=0){
        setInput(list[activeIndex].name)
        setShow(false)
      }
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
              className={'list-item'+ (activeIndex===index?" active":"")}
              key={item.id}
              tabIndex={index}
              onClick={()=>setInput(item.name)}
              onFocus={()=>{
                // setInput(item.name)
                setShow(true)
              }}
            >{item.name}</span>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
