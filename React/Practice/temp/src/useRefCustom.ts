import React from "react";
import { useEffect, useMemo } from "react"

export const useRefCustom=function useRefCustom(initval){
    const obj=useMemo(()=>{
        return {
            current:initval
        }
    },[])

    console.log("in hook: ",obj.current);
    return obj
}