import { createContext, useState } from 'react'

import './App.css'
import Task1 from './components/Task1'
import Task2 from './components/Task2'
import Task3 from './components/Task3'
import Task4 from './components/Task4'
import WindowWidth from './components/Task5'
import Task6 from './components/Task6'
import Cart from './components/Cart'

type ThemeType={theme:string,setTheme:(React.Dispatch<React.SetStateAction<themeToggleType>>)}
type themeToggleType="light"|"dark"
const ThemeContext=createContext<ThemeType|null>(null);


function App() {
  const [show,setShow]=useState<boolean>(true);
  const [theme,setTheme]=useState<themeToggleType>("dark")

  return (
    <>
    <div className='flex flex-col items-center gap-3'>

      {/* task1 */}
      <Task1/>
      <hr className='bg-black h-1 w-full' />


      {/* Task2 */}
      {show && (<Task2/>)}
      <div>
      <button 
        className='border-2 p-2 rounded-2xl'
        onClick={()=>setShow(!show)}
        >toggle</button>
      </div>

      <hr className='bg-black h-1 w-full' />

      {/* task3 */}
      <Task3/>
      <hr className='bg-black h-1 w-full' />



      {/* task4 */}
      <ThemeContext.Provider value={{theme,setTheme}}>
        <Task4/>
      </ThemeContext.Provider>

      <hr className='bg-black h-1 w-full' />

      {/* task5 */}
      <WindowWidth/>

      <hr className='bg-black h-1 w-full' />

      {/* task6 */}
      <Task6/>

      <hr className='bg-black h-1 w-full' />

      <Cart/>
    </div>
    </>
  )
}

export default App
export {ThemeContext}