import { useEffect, useRef } from "react";

export function useTimeout(fn:()=>void,delay:number){
    const callback=useRef<()=>void>(fn)
    const timerRef=useRef<null|number>(null);

    useEffect(()=>{
        callback.current=fn
    },[fn])
    function start(){
        timerRef.current=setTimeout(()=>{
            callback.current()
        },delay)
    }

    function clear(){
        if(timerRef.current){
            clearTimeout(timerRef.current)
        }
    }

    function restart(){
        clear()
        start()
    }

    useEffect(()=>{
        return ()=>{
            clear()
        }
    },[])


    return {
        start,
        clear,
        restart
    }
}