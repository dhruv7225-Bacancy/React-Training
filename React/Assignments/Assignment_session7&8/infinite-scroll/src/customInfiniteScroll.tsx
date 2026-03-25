import React, { useState } from 'react'

const CustomInfiniteScroll = () => {
  const [arr,setArr]=useState<number[]>([...new Array(30)]);
  const [loading,setLoading]=useState<boolean>(false);
  console.log(arr)
  function loadMore(){
    setLoading(true);
    setTimeout(()=>{

      setArr(prev=>[...prev,...new Array(10)])
      setLoading(false);
    },1000)
  }
  function handleScroll(e:React.UIEvent<HTMLDivElement, UIEvent>){
    const scrollTop=e.currentTarget.scrollTop
    const scrollHeight=e.currentTarget.scrollHeight
    const clientHeight=e.currentTarget.clientHeight

    const remainingHeight=scrollHeight-scrollTop-clientHeight

    if(remainingHeight<500 && !loading){
      loadMore()
    }

    console.log(scrollTop);
  }
  return (
    <div onScroll={handleScroll} style={{overflow:'auto', height:'100vh'}}>
      {
        arr.map((_,index)=>{          
          return (
            <p key={index}>{index}</p>
          )
        })
      }
      {
        loading&& <p>Loading......</p>
      }

    </div>
  )
}

export default CustomInfiniteScroll
