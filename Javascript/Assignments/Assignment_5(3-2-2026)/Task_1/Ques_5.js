// ### Code Block 5: Async/Await


// ```javascript
console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");


// ```


// **Your Prediction (order):**
// ```
// // Write the order you expect
// ```
// Start 
// Async 1 
// End 
// Async 2 
// Promise 1 
// Timeout

// **Actual Output:**
// ```
// // Run and write the actual order
// ```

// Start
// Async 1
// End
// Async 2
// Promise 1
// Timeout

// **Explanation:**
// ```
// // Explain the execution order
// console.log("Start") runs immediately and prints Start. Then asyncFunction() is called; inside it, console.log("Async 1") runs right away because everything before await is synchronous. When JavaScript hits await Promise.resolve(), it pauses the rest of the async function and schedules the remaining part (console.log("Async 2")) as a microtask. Next, the normal promise .then() is also scheduled as a microtask, and the setTimeout callback is sent to the macrotask queue to run later. After that, console.log("End") runs immediately and prints End. Once all synchronous code is done, JavaScript runs microtasks first: it resumes the async function and prints Async 2, then runs the promise callback and prints Promise 1. Finally, after all microtasks are finished, JavaScript executes the macrotask from setTimeout and prints Timeout.