import { useEffect, useState, useRef } from "react"

function useAsync(asyncFn, immediate) {
    const ref = useRef(0);

    const mountedRef=useRef(true);
    const [state, setState] = useState({
        loading: false,
        data: null,
        error: null
    })
    function execute(...args) {

        const current = ref.current + 1;
        ref.current++;
        setState(prev => ({
            ...prev,
            loading: true,
            data: null,
            error: null
        }))
        asyncFn(...args)
            .then(data => {
                if (mountedRef.current && ref.current === current) {
                    setState(prev => ({
                        ...prev,
                        loading: false,
                        data: data,
                        error: null
                    }))
                    // ref.current = 0
                }

            })
            .catch(err => {
                if (mountedRef.current && ref.current === current) {
                    setState(prev => ({
                        ...prev,
                        loading: false,
                        data: null,
                        error: err
                    }))
                    // ref.current = 0
                }
            })
    }

    useEffect(() => {
        if (immediate) {
            execute()
        }
    }, [])

    useEffect(()=>{

        return ()=>{
            mountedRef.current=false
        }
    },[])


    return { ...state, execute }
}