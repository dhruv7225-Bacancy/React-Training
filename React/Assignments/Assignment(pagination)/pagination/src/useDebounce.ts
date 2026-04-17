import { useEffect, useState } from "react";

export function useDebounce(value,delay){
    const [debouncedName,setDebouncedName]=useState<string>(value);
    useEffect(()=>{

        let timer=setTimeout(()=>{
            setDebouncedName(value)
        },delay)

        return ()=>{clearTimeout(timer)}
    },[value,delay])
    return debouncedName;
}