import { useEffect, useRef, useState } from "react";

type PropsType<T> = {
    value: T,
    onSave: (value: T) => Promise<unknown>,
    delay?: number,
    enabled?: boolean
}

export function useAutosave<T>({
    value,
    onSave,
    delay = 0,
    enabled = false
}: PropsType) {
    const timerRef = useRef(null);
    const [state, setState] = useState<"idle" | "pending" | "saving" | "saved" | "error">("idle");

    const seqRef=useRef(0)
    //state
    function save(seq:number) {
        if (enabled) {
            setState("saving")
            onSave(value)
                .then((data) => {
                    if(seq===seqRef.current){
                        setState("saved")
                    }
                })
                .catch((e) => {
                    if(seq===seqRef.current){
                    setState("error")
                    }
                })
        }
    }

    useEffect(() => {
        const seq=++seqRef.current
        setState("pending")
        timerRef.current = setTimeout(() => {
            save(seq)
        }, delay)
        return () => clearTimeout(timerRef.current)
    }, [value])

    useEffect(() => {
        setState("idle")
        return () => clearTimeout(timerRef.current)
    }, [])

    function triggerSave() {
        if(timerRef.current){
            clearTimeout(timerRef.current)
        }
        save(seqRef.current)
    }

    function cancel() {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        setState("idle")
    }

    return {
        status: state, triggerSave, cancel
    }
}