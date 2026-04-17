import { useEffect, useRef } from "react";

function useUnmount(fn){
    const fnRef=useRef(fn);


    useEffect(()=>{
        fnRef.current=fn
    },[fn])

    useEffect(()=>{
        return ()=>fnRef.current()
    },[])

}