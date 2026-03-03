import React, { useContext } from 'react'

import { ThemeContext } from '../App';

const ChildA = () => {

    const context=useContext(ThemeContext);
    if(!context) return null;
    const {theme, setTheme} = context;

    function changeTheme(){
        if(theme==="dark"){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }
  return (
    <div className='border-2 h-70 w-70 flex flex-col justify-center items-center' style={{backgroundColor:theme==="light"?"black":"beige",color:theme==="light"?"white":"black"}}>
      <p>hello from child</p>
      <button
      className='border-2 rounded-2xl p-2 bg-amber-500'
      onClick={changeTheme}
      >toggle</button>
    </div>
  )
}

export default ChildA
