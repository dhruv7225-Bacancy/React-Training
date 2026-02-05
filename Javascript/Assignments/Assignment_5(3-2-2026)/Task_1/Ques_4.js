// ### Code Block 4: Complex Async Chain


// ```javascript
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");




// **Your Prediction (order):**
// ```
// // Write the order you expect
// ```

// 1
// 7
// 3
// 4
// 5
// 2
// 6


// **Actual Output:**
// ```
// // Run and write the actual order
// ```

// 1
// 7
// 3
// 4
// 5
// 2
// 6

// **Explanation:**
// console.log("1") prints 1, and at the end console.log("7") prints 7. The two setTimeout calls are asynchronous, so their callbacks are sent to the macrotask queue to be handled later. The queueMicrotask and Promise.then callbacks are scheduled as microtasks, which always run before any setTimeout. Once the synchronous code is finished, JavaScript starts executing microtasks: first the queueMicrotask prints 3, then the promise callback runs and prints 4. While printing 4, another microtask is added using queueMicrotask, so JavaScript immediately runs it next and prints 5. After all microtasks are completely finished, JavaScript moves to the macrotask queue and executes the setTimeout callbacks in order, printing 2 and then 6
