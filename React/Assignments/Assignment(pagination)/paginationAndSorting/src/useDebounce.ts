import { useEffect, useState } from "react";

export function useDebounce(value:string, delay:number) {

    const [debounceValue, setDebouncedValue] = useState<string>("");
    useEffect(() => {
        const timer=setTimeout(() => setDebouncedValue(value),delay)
        return ()=>clearTimeout(timer)
    }, [value, delay])
    return debounceValue
}