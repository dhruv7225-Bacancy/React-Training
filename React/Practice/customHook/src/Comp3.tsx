import React, { useState } from 'react'
import { useThrottle } from './useThrottle.ts';
const Comp3 = () => {
    const [name,setName]=useState("");
    const throttledValue=useThrottle(name,2000)
  return (
    <div>
        <input
        placeholder="Type some text"
        style={{ background: "var(--charcoal)" }}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
        name:{name}
        <br />
        throttledName: {throttledValue}
    </div>
  )
}

export default Comp3
