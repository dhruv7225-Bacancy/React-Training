import React, { useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {login}=useAuth()
    const [name,setName]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    const [err,setErr]=useState<boolean>(false)
    const navigate=useNavigate()
    const {state}=useLocation()
    const from=state?.from?.pathname
    function handleSubmit(){
        if(name==="dhruv" && password==="1234"){
            login("admin")
            setErr(false)
            navigate(from || "/dashboard",{replace:true})
        }
        else{
            setErr(true);
        }
    }
  return (
    <div>

        <label htmlFor="name">Name:</label>
      <input 
      id='name'
      type="text" 
      value={name} 
      onChange={(e)=>{setName(e.target.value)}}
      />
      <label htmlFor="password">Password:</label>
      <input 
      id='password'
      type="password" 
      value={password} 
      onChange={(e)=>{setPassword(e.target.value)}}
      />

      {
        err && (<p>Wrong name or password</p>)
      }
    
    <button onClick={handleSubmit}>submit</button>
      
    </div>
  )
}

export default Login
