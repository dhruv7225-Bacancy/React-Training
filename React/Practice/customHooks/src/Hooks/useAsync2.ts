import { useEffect, useRef, useState } from "react";


export function useAsync(asyncFn, immediate = false) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const countRef = useRef<number>(0);

    const mountedRef=useRef(true)
    const asyncFnRef=useRef(asyncFn)

    useEffect(()=>{
        asyncFnRef.current=asyncFn
    },[asyncFn])


    function execute(...args) {
        const count = ++countRef.current
        setLoading(true)
        setError(null)
        asyncFnRef.current(...args)
            .then((data) => {
                if (mountedRef.current &&(count === countRef.current)) {
                    setData(data)
                    setLoading(false)
                }
            })
            .catch((err) => {
                if (mountedRef.current&&(count === countRef.current)) {
                    setLoading(false)
                    setError(err)
                }
            })
    }
    useEffect(() => {
        if (immediate) {
            execute()
        }
        return ()=>{
            mountedRef.current=false
        }
    }, [])

    return {data,loading,error,execute}
}