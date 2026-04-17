import { useEffect } from "react";

export function withLogger<P extends object>(Component:React.ComponentType<P>){

    return function (props:P){
        useEffect(()=>{
            console.log("mount");
            
            return ()=>{
                console.log("unmount")
            };
            
        },[])
        return <Component {...props}/>
    }

}