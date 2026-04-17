import { useEffect, useRef, useState } from "react";

// function useToggle(initVal=false){
//     const [flag,setFlag]=useState(initVal)

//     function toggle(val?:boolean){
//         if(val!==undefined){
//             setFlag(val)
//         }
//         else{
//             setFlag(prev=>!prev)
//         }
//     }
//     return {toggle,flag}

//     //return toggle function 
// }

//wrong
// function useToggle(
//     val: boolean |
//     {
//         value: boolean,
//         onChange: (prev: boolean) => void
//     }) {
//     const [value, setValue] = useState<boolean>(()=>{
//         if(typeof val==="boolean")return val
//         return val.value
//     });
//     const ref=useRef();
//     useEffect(()=>{
//         if(typeof val==="boolean"){
//             ref.current=false
//         }
//         else{
//             ref.current=val.value
//         }
//     },[])//setting first value
    

//     function toggle(){
//         if(typeof val==="boolean"){
//             setValue(prev=>!prev);
//             return 
//         }
//         setValue(prev=>{
//             val.onChange(!prev)
//             return !prev
//         })
//     }

//     function reset(){
//         setValue(ref.current)
//     }

//     return {value,setValue,toggle,reset}
// }

type UseToggleControlled = {
  value: boolean;
  onChange: (next: boolean) => void;
  defaultValue?: boolean;
};

type UseToggleInput = boolean | UseToggleControlled;

function isControlled(input: UseToggleInput): input is UseToggleControlled {
  return typeof input === "object" && input !== null;
}

export function useToggle(input: UseToggleInput = false) {
  const controlled = isControlled(input);

  const initialValue = controlled
    ? (input.defaultValue ?? input.value)
    : input;

  const initialValueRef = useRef(initialValue);
  const [internalValue, setInternalValue] = useState<boolean>(initialValue);

  const value = controlled ? input.value : internalValue;

  const setValue = (next: boolean | ((prev: boolean) => boolean)) => {
    const resolvedNext =
      typeof next === "function"
        ? (next as (prev: boolean) => boolean)(value)
        : next;

    if (controlled) {
      input.onChange(resolvedNext);
    } else {
      setInternalValue(resolvedNext);
    }
  };

  const toggle = () => {
    setValue((prev) => !prev);
  };

  const reset = () => {
    const resetValue = initialValueRef.current;

    if (controlled) {
      input.onChange(resetValue);
    } else {
      setInternalValue(resetValue);
    }
  };

  return {
    value,
    setValue,
    toggle,
    reset,
  };
}