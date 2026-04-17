import { useEffect, useRef } from "react"

function useLatest(val){
    const ref=useRef(val)

    useEffect(()=>{
        ref.current=val
    },[val])

    return ref

}