import { useEffect, useRef, useState } from "react";

export function useThrottle<T>(val: T, delay: number): T {
    const lastCall = useRef<number>(0);
    const [throttledValue, setThrottledValue] = useState<T>(val);
    useEffect(() => {
        if (Date.now() - lastCall.current > delay) {
            setThrottledValue(val);
            lastCall.current = Date.now()
        } else {
            const timer = setTimeout(() => {
                setThrottledValue(val);
                lastCall.current = Date.now()
            }, lastCall.current + delay - Date.now())
            return () => clearTimeout(timer)
        }
    }, [val, delay])
    return throttledValue
}