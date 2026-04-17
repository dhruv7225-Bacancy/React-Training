import React, { useEffect, useRef, useState } from 'react'
import './App.css'
const App = () => {
  const [data,setData]=useState<number[]>([...new Array(70)])
  const [loading,setLoading]=useState<boolean>(false)
  
  function loadMore(){
    setLoading(true)
    setTimeout(()=>{
      setData((prev)=>[...prev,...new Array(10)])
      setLoading(false)
    },1000)
  }

  const refList=useRef([])
  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting){
        observer.unobserve(entries[0].target)
        loadMore()
      }
    },
    {
      threshold:0.7,
      rootMargin:"100px",
      root:document.querySelector('.scroll-observer')
    }
  )
    const lastElement=refList.current.at(-1)
    observer.observe(lastElement)

    return()=>{
      // observer.unobserve(lastElement)
      observer.disconnect()
    }
  },[data])
  return (
    <div className='scroll-observer' >
      {
        data.map((_,index)=>{
          return (
            <div key={index} ref={(ele)=>{refList.current[index]=ele}}>
              {index}
            </div>
          )
        })
      }
      {
        loading && <p>Loading.....</p>
      }
    </div>
  )
}

export default App
