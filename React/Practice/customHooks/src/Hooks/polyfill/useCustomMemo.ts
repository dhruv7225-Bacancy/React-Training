import { useCallback, useEffect, useRef } from "react";

export function useCustomMemo<T>(fn:()=>T,deps:React.DependencyList):T{
    const ref=useRef<{
        value:T,
        deps:React.DependencyList
    }|null>(null)
    const areEqual=useCallback(function areEqual(prevDeps:React.DependencyList,currDeps:React.DependencyList):boolean{
        if(prevDeps===null)return false;
        if(prevDeps.length!==currDeps.length)return false;

        for(let i=0;i<prevDeps.length;i++){
            if(prevDeps[i]!==currDeps[i])return false;
        }
        return true;
    },[])

    if(!ref.current || !areEqual(ref.current.deps,deps)){
        ref.current={
            value:fn(),
            deps:deps
        }
    }

    useEffect(()=>{
        return ()=>{ref.current=null}
    },[])
    return ref.current.value;
}