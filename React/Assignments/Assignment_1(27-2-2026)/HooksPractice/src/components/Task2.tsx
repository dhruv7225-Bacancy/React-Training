// 2. **useEffect + cleanup**

import { useEffect, useState } from "react";

        // eslint-disable-next-line no-irregular-whitespace
//     Create a component that starts a `setInterval` when it mounts, updates a counter every second, and clears the interval in a `useEffect` cleanup. Unmount the component (e.g. toggle with a button) and confirm the interval stops (no console errors or extra ticks).

function Timer(){
    const [time,setTime]=useState<Date>(new Date());
    let count=0;
    useEffect(()=>{
        console.log("timer started on mount")
        const interval=setInterval(()=>{
            setTime(new Date())
            console.log(count++)
        },1000)


        return ()=>{
            console.log("component unmounted");
            clearInterval(interval)
        }
    },[])

    return (
        <>
            <h2 className="text-center text-bold text-4xl mt-4">Task: 2</h2>
            <p className="text-bold text-2xl text-center mt-3">{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</p>
        </>
    )
}

export default Timer