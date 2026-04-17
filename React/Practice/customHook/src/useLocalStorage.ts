import { useEffect,useState } from "react";


export function useLocalStorage(name){
    const [count,setCount]=useState(()=>{
        if(localStorage.getItem(name)){
            return Number(localStorage.getItem(name))
        }
        return 0;
    });

    useEffect(()=>{
        
            localStorage.setItem(name,count);
        
    },[count])
    return [count ,setCount]
}