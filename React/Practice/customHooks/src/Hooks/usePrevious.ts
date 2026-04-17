import {  useRef } from "react";

// function usePrevious<T>(value:T):T|undefined{

//     const lastValue=useRef<T|undefined>(undefined);
//     const last=lastValue.current
//     lastValue.current=value
//     return last
// }



export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  const previous = ref.current;
  ref.current = value;

  return previous;
}

// Task 3: Build usePrevious

// Create a custom hook:

// const previousValue = usePrevious(value)
// Requirements
// It should return the value from the previous render
// On the first render, it should return undefined
// Must not trigger extra renders
// Use the appropriate hook primitive
// Example

// If values across renders are:

// 10 -> 20 -> 30

// Then usePrevious(value) should return:

// undefined -> 10 -> 20