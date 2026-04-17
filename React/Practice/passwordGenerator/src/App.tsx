import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length,setLength]=useState<number>(8)
  const [charAllowed,setCharAllowed]=useState<boolean>(false)
  const [numberAllowed,setNumberAllowed]=useState<boolean>(false)
  const [password,setPassword]=useState<string>("");

  useEffect(()=>{
    let str:string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)str+="1234567890"
    if(charAllowed)str+="!@#$%^&*()"

    let pass=""
    for(let i=0;i<length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length+1));
    }
    setPassword(pass);
  },[numberAllowed,charAllowed,length,])
  
  const passwordRef=useRef(null);
  return (
    <>
    
      <div className='w-full min-h-screen bg-black text-white'>
        <div className='max-w-md mx-auto py-10'>

          <h2 className='mx-auto bg-white text-black text-center font-bold'>Password generator</h2>
          <div>
            <input 
              type="text" 
              className='bg-white mt-10 p-2 text-black w-[80%]'
              value={password}
              readOnly
              placeholder='Password'
              ref={passwordRef}
              />
            <button 
              className='bg-blue-500 rounded p-2'
              onClick={()=>{
                window.navigator.clipboard.writeText(password)
                passwordRef.current?.select()
              }}
              >Copy</button>
          </div>
          <div className='flex gap-2 py-5'>

            <input 
              type="range" 
              name="length" 
              id="length"
              max={40}
              min={8}
              value={length}
              onChange={(e)=>{
                // setLength(e.target.value as unknown as number)
                setLength(Number(e.target.value))
                // console.log(length)
              }}
              />
            <label htmlFor="length" >Length</label>
            <input 
              type="checkbox" 
              name="number" 
              id="number" 
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed(prev=>!prev)
              }}
              />
            <label htmlFor="number" >Number</label>
            <input 
              type="checkbox" 
              name='characters' 
              id='characters'
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed(prev=>!prev)
              }}
              />
            <label htmlFor="characters" >Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
