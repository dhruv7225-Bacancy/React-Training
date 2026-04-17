import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

type User={
    albumId: number,
    id: number,
    title:string,
    url: string,
    thumbnailUrl: string
}
function App() {
  const [users,setusers]=useState<User[]>([]);

  useEffect(()=>{
    const fetchData=async ()=>{

      const usersArr= await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
      const data:User[]=await usersArr.json()
      setusers(data);
    }
    fetchData()
  },[])
  return (
    <>
    <div className='flex justify-center items-center flex-wrap ml-10 mr-10'>
      {users.map(user => (
        
        <Card username={user.title} txtContent={user.url}/>
      ))}

      {/* <Card username='nitya' txtContent='nitya is pro in devops'/> */}
    </div>
    </>
  )

  // const [date,setDate]=useState<Date>(new Date());
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setDate(new Date())
  //   }, 1000)

  //   return () => clearInterval(timer) // cleanup
  // }, [])
  // return (
  //   <h2 className="text-3xl font-bold text-center mt-10">{date?.toLocaleString()}</h2>
  // )
}

export default App
