import { useEffect, useRef } from "react"

type PropsType = {
    hasMore: boolean,
    loading: boolean,
    onLoadMore: () => void,
    rootMargin?: string,
    disabled?: boolean
}

export function useInfiniteScroll({
    hasMore,
    loading,
    onLoadMore,
    rootMargin = "0px",
    disabled = false
}: PropsType): {
    ref:React.RefObject<HTMLDivElement | null>,
    isFetching:boolean
} {

    const targetRef = useRef<HTMLDivElement | null>(null)

    const loadMoreRef=useRef(onLoadMore)
    
    useEffect(()=>{
        loadMoreRef.current=onLoadMore
    },[onLoadMore])

    useEffect(() => {
        if (!targetRef.current) return;
        const observer = new IntersectionObserver((entries) => {
            if (hasMore && !disabled && !loading && entries[0].isIntersecting) {
                loadMoreRef.current()
            }
        }
            , { rootMargin }
        )

        observer.observe(targetRef.current)
        return () => observer.disconnect()
    },[disabled,rootMargin,hasMore,loading])

    return {ref:targetRef,isFetching:loading }
}