import { useEffect, useState } from "react";



export function useDebounce(func,delay){
    const [name,setName]=useState("");

    useEffect(()=>{
        if(!name)return;
        let timeout=setTimeout(() => {
            func.call(null,name)
            
        }, delay);
        console.log(name);
        return ()=>clearTimeout(timeout)
    },[name])
    return [name,setName];
}
