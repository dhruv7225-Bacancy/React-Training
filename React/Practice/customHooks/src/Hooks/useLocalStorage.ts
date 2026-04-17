import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export function useLocalStorage<T>(key:string,initval:T):[T, Dispatch<SetStateAction<T>>,()=>void]{
    const [value,setValue]=useState<T>(()=>(localStorage.getItem(key)!==null?(JSON.parse(localStorage.getItem(key)) as T):initval));

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    function remove(){
        localStorage.removeItem(key)
    }

    return [value,setValue,remove]
}

