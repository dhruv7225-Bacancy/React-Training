import { useEffect, useState ,useRef} from "react"

// export function useThrottle(fn,delay){
//     // const [timer,setTimer]=useState(null);
//     const ref=useRef(null);
//     const [name,setName]=useState("");
//     useEffect(()=>{
//         console.log(name);
//         if(!ref.current){
//             ref.current=setTimeout(()=>{
//                 fn(name);
//                 ref.current=null
//             },delay)
//         }
//     },[name])
//     return [name,setName]
// }

export function useThrottle(val:string,interval:number){
    const [tval,setTval]=useState("");
    const lastExecuted= useRef<number>(Date.now())
    useEffect(()=>{
        if(Date.now()>=interval+lastExecuted.current){
            lastExecuted.current=Date.now()
            setTval(val);
        }
        else{
            const timer=setTimeout(()=>{
                setTval(val)
                lastExecuted.current=Date.now()
            },interval)

            return ()=>clearTimeout(timer)
        }
    },[val])

    return tval

}