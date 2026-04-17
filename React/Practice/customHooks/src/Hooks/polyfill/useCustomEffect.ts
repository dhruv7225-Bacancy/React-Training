import { useCallback, useEffect, useRef } from "react"

export function useCustomEffect(fn:React.EffectCallback,deps:React.DependencyList){

    const ref=useRef<{
        deps:React.DependencyList
    }>(null)

    const cleanupRef=useRef<()=>void>(null)
    
    //first render
    if(ref.current===null){
        const cb=fn()
        if(cb!==undefined){
            cleanupRef.current=cb
        }
    }

    const checkDepsChange=useCallback(function checkDepsChange(prev,curr){
        if(prev===null)return false;
        if(prev.length!==curr.length)return false;

        for(let i=0;i<prev.length;i++){
            if(prev[i]!==curr[i])return false;
        }
        return true;
    },[])

    //change deps
    if(!checkDepsChange(ref.current?.deps,deps)){
        if(cleanupRef.current){
            cleanupRef.current()
        }
        cleanupRef.current=fn()
    }

    //cleanup

    ref.current?.deps=deps
}