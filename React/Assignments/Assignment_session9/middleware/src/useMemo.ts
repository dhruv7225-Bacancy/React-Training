import { useEffect, useState } from "react";

function useMemo(fn,dep=[]){
    const [result,setResult]=useState();
    
    useEffect(() => {
      setResult(fn())
    }, dep)
    return result
}