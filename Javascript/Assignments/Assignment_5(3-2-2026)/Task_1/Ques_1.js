// ### Objective
// Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.


// ### Requirements
// 1. Predict the output order for each code block
// 2. Run the code and compare with your prediction
// 3. Explain the execution order based on the event loop


// ### Code Block 1: Basic Async


// ```javascript
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


Promise.resolve().then(function() {
 console.log("3");
});


console.log("4");
// ```


// **Your Prediction (order):**
// ```
// // Write the order you expect: 1, ?, ?, ?
// ```
// 1,4,3,2

// **Actual Output:**
// ```
// // Run and write the actual order
// ```
// 1,4,3,2


// **Explanation:**
// ```

// // First, console.log("1") runs immediately, so 1 is printed. Then setTimeout is set up, but even with a delay of 0, its callback is sent to the task queue to run later, so it doesn’t execute right away. Next, Promise.resolve().then() schedules its callback in the microtask queue, which has higher priority than the task queue. After that, console.log("4") runs immediately, printing 4. Once all the synchronous code is done, JavaScript checks the microtask queue first, so 3 is printed next. then it moves to the task queue and runs the setTimeout callback, printing 2