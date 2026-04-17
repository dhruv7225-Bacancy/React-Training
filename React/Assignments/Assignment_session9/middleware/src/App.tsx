import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './Slice/CounterSlice'

const App = () => {
  const count=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  return (
    <>
      <div>
      {count.counter}
    </div>
    <button onClick={()=>dispatch(add(5))}> click</button>
    </>
  )
}

export default App
