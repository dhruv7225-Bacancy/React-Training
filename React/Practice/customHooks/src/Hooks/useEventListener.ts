import { useEffect, useRef, type RefObject } from "react"

type TargetElement = HTMLElement | Window | Document;

export function useEventListener<T extends TargetElement>(eventName:string,handler:(event: Event)=>void,element?:RefObject<T> | T | null){
    
    const handleRef=useRef(handler);
    useEffect(()=>{
        handleRef.current=handler
    },[handler])

    useEffect(()=>{
        const target=element?.current ?? element ?? window

        const listener=(e)=>{
            handleRef.current(e)
        }
        target.addEventListener(eventName,listener)
        return ()=>target.removeEventListener(eventName,listener)

    },[eventName,element])
}