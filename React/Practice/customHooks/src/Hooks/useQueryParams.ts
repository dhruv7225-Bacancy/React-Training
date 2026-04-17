import { useEffect, useRef, useState } from "react";

function useQueryParams<T>(defaults) {
    const initRef = useRef(defaults)
    const [search,setSearch]=useState(window.location.search);
    const params = new URLSearchParams(search)

    for (const key in defaults) {
        params.set(key, defaults[key])
    }

    function setParam(key, val) {
        params.set(key, val)
        window.history.pushState(null, "", `?${params.toString()}`)
    }

    function removeParam(key) {
        params.delete(key)
        window.history.replaceState(null, "", `?${params.toString()}`)
    }

    function setParams(partials) {
        for (const key of initRef.current) {
            params.set(key, initRef.current[key])
        }
        window.history.pushState(null, "", `?${params.toString()}`)
    }

    function reset() {
        for (const key in initRef.current) {
            params.set(key, initRef.current[key])
        }
        window.history.replaceState(null, "", `?${params.toString()}`)
    }


    useEffect(() => {
        const handlePopState = () => {
            const search = window.location.search;
            setSearch(search)
            console.log("URL changed from back/forward:", search);
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);


    return {
        setParam,
        setParams,
        removeParam,
        reset
    }
}


// import { useEffect, useRef, useState } from "react";

// type QueryValue = string | number;
// type QueryParamsObject = Record<string, QueryValue>;

// function parseSearch<T extends QueryParamsObject>(
//   search: string,
//   defaults: T
// ): T {
//   const searchParams = new URLSearchParams(search);
//   const result = { ...defaults };

//   for (const key of Object.keys(defaults) as Array<keyof T>) {
//     const rawValue = searchParams.get(String(key));
//     if (rawValue === null) continue;

//     const defaultValue = defaults[key];
//     result[key] =
//       typeof defaultValue === "number"
//         ? (Number(rawValue) as T[keyof T])
//         : (rawValue as T[keyof T]);
//   }

//   return result;
// }

// export function useQueryParams<T extends QueryParamsObject>(defaults: T) {
//   const defaultsRef = useRef(defaults);

//   const getParamsFromUrl = () => {
//     if (typeof window === "undefined") return defaultsRef.current;
//     return parseSearch(window.location.search, defaultsRef.current);
//   };

//   const [params, setParamsState] = useState<T>(getParamsFromUrl);

//   const updateUrl = (nextParams: T, mode: "push" | "replace" = "push") => {
//     if (typeof window === "undefined") return;

//     const searchParams = new URLSearchParams();

//     for (const key of Object.keys(nextParams) as Array<keyof T>) {
//       searchParams.set(String(key), String(nextParams[key]));
//     }

//     const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

//     if (mode === "push") {
//       window.history.pushState(null, "", newUrl);
//     } else {
//       window.history.replaceState(null, "", newUrl);
//     }

//     setParamsState(nextParams);
//   };

//   const setParam = <K extends keyof T>(key: K, value: T[K]) => {
//     const nextParams = { ...params, [key]: value };
//     updateUrl(nextParams, "push");
//   };

//   const setParams = (partial: Partial<T>) => {
//     const nextParams = { ...params, ...partial };
//     updateUrl(nextParams, "push");
//   };

//   const removeParam = <K extends keyof T>(key: K) => {
//     const nextParams = { ...params, [key]: defaultsRef.current[key] };
//     updateUrl(nextParams, "replace");
//   };

//   const reset = () => {
//     updateUrl(defaultsRef.current, "replace");
//   };

//   useEffect(() => {
//     const handlePopState = () => {
//       setParamsState(getParamsFromUrl());
//     };

//     window.addEventListener("popstate", handlePopState);
//     return () => {
//       window.removeEventListener("popstate", handlePopState);
//     };
//   }, []);

//   return {
//     params,
//     setParam,
//     setParams,
//     removeParam,
//     reset,
//   };
// }