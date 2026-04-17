import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './Slice/counterSlice'

const App = () => {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <div>
      count:{count}
      <button onClick={()=>dispatch(inc())}>inc</button>
      <button onClick={()=>dispatch(dec())}>dec</button>
    </div>
  )
}

export default App
