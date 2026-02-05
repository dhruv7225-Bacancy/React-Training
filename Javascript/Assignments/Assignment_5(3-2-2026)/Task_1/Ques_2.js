// Explain the execution order



// ### Code Block 2: Nested Async

//javascript

console.log("Start");


setTimeout(function () {
    console.log("Timeout 1");
    Promise.resolve().then(function () {
        console.log("Promise 1");
    });
}, 0);


Promise.resolve().then(function () {
    console.log("Promise 2");
    setTimeout(function () {
        console.log("Timeout 2");
    }, 0);
});


console.log("End");



// Your Prediction (order):
/* ```
// Write the order you expect : Start, End , Promise 2 , Timeout 1, Promise 1 , Timeout 2
``` */


// Actual Output:
/* ```
// Run and write the actual order : Start, End , Promise 2 , Timeout 1, Promise 1 , Timeout 2
``` */


// Explanation:
/* ```
// Explain the execution order
The execution starts with console.log("Start"), which runs immediately and prints Start. Then JavaScript encounters the first setTimeout, but since it is asynchronous, it is sent to the task (macrotask) queue to be executed later. Next, the Promise.resolve().then() is registered, and its callback is placed in the microtask queue. After that, console.log("End") runs right away and prints End. Once all synchronous code is finished, JavaScript first empties the microtask queue, so Promise 2 is printed. Inside this microtask, another setTimeout is scheduled, which goes to the task queue. After all microtasks are done, JavaScript moves to the task queue and executes the first setTimeout, printing Timeout 1, and during this execution a promise is created whose callback is added to the microtask queue. Before moving on, JavaScript immediately runs this microtask, printing Promise 1. Finally, JavaScript executes the remaining task from the task queue, printing Timeout 2. 

``` */
