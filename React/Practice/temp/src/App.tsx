// import React ,{ forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
// import { useRefCustom } from './useRefCustom'
import Child from './Child'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'



function App() {
  // const [count, setCount] = useState(0);
  // const ref = useRef(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log("Count:", count, "Ref:", ref.current);
  //     ref.current++;
  //   }, 1000);

  //   return () => clearInterval(id);
  // }, []);

  // console.log(count);

  // forwardRef((_,ref)=><Child ref={ref}/>)
  // return <button onClick={() => setCount(count + 1)}>+</button>;


  return (
    // <Link to={"/dashboard"}>go to dashboard</Link>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/child"} element={<Child/>}/>
    </Routes>
  )
}


export default App
