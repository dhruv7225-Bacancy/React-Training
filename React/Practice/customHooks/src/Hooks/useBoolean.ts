import { useState } from "react";

type ReturnType={
    value:boolean,
    setTrue:()=>void,
    setFalse:()=>void,
    toggle:(val?:boolean)=>void
}

export function useBoolean(initVal?:boolean):ReturnType{
    const [value,setValue]=useState(()=>initVal!==undefined?initVal:false);

    function setTrue(){
        setValue(true);
    }
    function setFalse(){
        setValue(false);
    }

    function toggle(val?:boolean){
        if(val!==undefined){
            setValue(val)
        }
        else{
            setValue(prev=>!prev)
        }
    }

    return {
        value,
        setTrue,
        setFalse,
        toggle
    }
}