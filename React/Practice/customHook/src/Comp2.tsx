import React, { useRef } from 'react'
import { useDebounce } from './useDebounce.ts'
import { useThrottle } from './useThrottle.js'

const Comp2 = () => {
    function search(val){
        console.log("searching"+val)
    }
    // const [name,setName]=useDebounce(search,5000)
    const [name,setName]=useThrottle(search,5000)
    const inputRef=useRef()

  return (
    <div>
      {/* <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/> */}
      <input type="text" name="" id="" ref={inputRef}/>
      <button onClick={()=>setName(inputRef.current?.value)}>search</button>
    </div>
  )
}

export default Comp2
