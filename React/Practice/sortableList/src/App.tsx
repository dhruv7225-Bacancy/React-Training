import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [list,setList]=useState<number[]>([]);

  const [startIndex,setStartIndex]=useState<number>(-1);
  const [swapIndex,setSwapIndex]=useState<number>(-1);

  useEffect(()=>{
    setList(Array.from({length:100},(_,i)=>i+1))
  },[])
  return (
    <div className='list'>
      {
        list.map((item,index)=>
          <span  
            key={item}
            draggable={true} 
            className='list-item'
            onDragStart={(e)=>{
              e.target.style.backgroundColor="red"
              setStartIndex(index)
            }}
            onDragOver={(e)=>{
              e.preventDefault()//must needed for drop event override browser default behavier
              const rect=e.currentTarget.getBoundingClientRect()
              const height=rect.height
              const mid=rect.top+height/2

              if(e.clientY<mid){
                e.currentTarget.style.borderTop="5px solid red"
                e.currentTarget.style.borderBottomColor=""
                setSwapIndex(index-1)
              }
              else{
                e.currentTarget.style.borderTopColor=""
                e.currentTarget.style.borderBottomColor="green"
                e.currentTarget.style.borderBottom="5px solid green"
                setSwapIndex(index)
              }
              // console.log("drag over",index);
            }}
            onDragLeave={(e)=>{
              e.currentTarget.style.border="1px solid white"
              
            }}
            onDrop={(e)=>{
              
              e.currentTarget.style.border="1px solid white"
              e.target.style.backgroundColor="green"
              // console.log("drop");
              
              setList(prev=>{
                const newArr=[...prev]
                const ele=newArr.splice(startIndex,1)
                newArr.splice(swapIndex,0,...ele)
                return newArr
              })
            }}
            
          >{item}</span>)
      }
    </div>
  )
}

export default App
