import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage.ts';

const Comp1 = () => {
    
    const[count ,setCount]=useLocalStorage("dhruv")
    function update(){
        setCount(prev=>prev+1)
    }
  return (
    <>
        count :{count}
        <button onClick={update}>inc</button>
    </>
  )
}

export default Comp1
