import { useEffect, useState } from "react"

const cache: Record<string, { data: object, time: number }> = {}
type StateType<T> =
    | {
        status: "loading",
    }
    | {
        status: "success",
        data: T,
    }
    | {
        status: "error",
        error: string
    }
    | null

type PropsType<T> = {
    queryKey: Record<string, string>,
    queryFn: () => Promise<T>,
    staleTime: number
}
export function useQuery<T>({
    queryKey,
    queryFn,
    staleTime
}: PropsType<T>) {

    
    //build key
    const queryParams = Object.entries(queryKey)
    const key = queryParams.map((param) => param.join("=")).sort().join("&")

    const [state, setState] = useState<StateType<T>>(null);

    async function get() {
        let data: T;
        if (cache[key]) {
            if (Date.now() - cache[key].time < staleTime) {
                data = cache[key].data as T
                setState({
                    status: "success",
                    data: data
                })
                return;
            }
        }
        try {
            setState({

                status: "loading",
            })
            data = await queryFn()
            cache[key] = {
                data: data as object,
                time: Date.now()
            }
            setState({
                status: "success",
                data: data
            })
        }
        catch (e) {

            if (e instanceof Error) {
                setState({
                    status: "error",
                    error: e.message
                })
            }
        }
    }
    useEffect(()=>{

        get()
    },[queryKey,queryFn,staleTime])

    function refetch() {
        get()
    }
    return {
        loading: state?.status === "loading",
        error: state?.status === "error"?state.error:null,
        data: state?.status === "success" ? state.data:null,
        refetch
    }
}


