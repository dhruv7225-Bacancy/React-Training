import { useState } from "react";

type PropsType<T>={
    value: T,
    defaultValue: T,
    onChange: (val: T| ((prev: T) => void)) => void
}

export function useControllableState<T>({ value, defaultValue, onChange }: PropsType<T>) {

    const controlled=value!==undefined?true:false;
    
    const [unControlledValue,setUncontrolledValue]=useState(defaultValue);
    const val=value!==undefined?value:unControlledValue
    function setVal(newVal:T|((prev:T)=>void)){

        const resolvedValue =
      typeof newVal === "function"
        ? (newVal as (prev: T) => T)(val)
        : newVal;
        if(typeof newVal!=="function"){

            if(newVal===val)return;
        }
        // const newValX=typeof newVal==="function"?
        if(controlled){
            onChange(resolvedValue)
        }
        else{
            setUncontrolledValue(resolvedValue)
            if(onChange){
                onChange(resolvedValue)
            }
        }
    }

    return [val,setVal]
}

// import { useState } from "react";

// type SetStateAction<T> = T | ((prev: T) => T);

// type UseControllableStateProps<T> = {
//   value?: T;
//   defaultValue: T;
//   onChange?: (value: T) => void;
// };

// export function useControllableState<T>({
//   value,
//   defaultValue,
//   onChange,
// }: UseControllableStateProps<T>): [T, (next: SetStateAction<T>) => void] {
//   const isControlled = value !== undefined;

//   const [uncontrolledValue, setUncontrolledValue] = useState<T>(defaultValue);

//   const currentValue = isControlled ? (value as T) : uncontrolledValue;

//   const setValue = (next: SetStateAction<T>) => {
//     const resolvedValue =
//       typeof next === "function"
//         ? (next as (prev: T) => T)(currentValue)
//         : next;

//     if (Object.is(resolvedValue, currentValue)) return;

//     if (!isControlled) {
//       setUncontrolledValue(resolvedValue);
//     }

//     onChange?.(resolvedValue);
//   };

//   return [currentValue, setValue];
// }