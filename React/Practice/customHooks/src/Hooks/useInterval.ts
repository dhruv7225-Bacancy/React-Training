import { useEffect, useRef } from "react";

export function useInterval(fn:()=>void,delay:number){
    const ref=useRef(fn)
    useEffect(()=>{
        ref.current=fn
    },[fn])
    useEffect(()=>{
        if(delay===null){
            return
        }
        else{
            const interval=setInterval(()=>{
                ref.current()
            },delay)
            return ()=>clearInterval(interval)
        }
    },[delay])
}