import { useEffect, useRef } from "react";

export function useCallbackOutside<T extends HTMLElement>(fn:()=>void):React.RefObject<T|null>{
    const callback=useRef(fn);
    const ref=useRef(null);

    useEffect(()=>{
        callback.current=fn
    },[fn])

    useEffect(()=>{
        function onMouseClick(e){
            const target=e.target as Node |null
            if(!ref.current)return
            if(!target)return

            if(!ref.current.contains(target)){
                callback.current()
            }
        }

        document.addEventListener("mousedown",onMouseClick)
        return ()=>document.removeEventListener("mousedown",onMouseClick)
    },[])

    return ref
}