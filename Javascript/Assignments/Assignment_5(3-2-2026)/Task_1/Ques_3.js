// ### Code Block 3: Multiple Microtasks


// javascript
console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");



/* Your Prediction (order):
```
// Write the order you expect :  A, G, B, D, C, E, F
``` */


/* Actual Output:
```
// Run and write the actual order : 
A
G
B
D
E
C
F
``` */


/* Explanation:
```
// Explain the execution order
console.log("A") runs immediately and prints A. Then JavaScript sees the promises and the setTimeout, but it doesn’t run them yet—it just schedules them. After that, console.log("G") runs right away and prints G. Once all the normal code is done, JavaScript starts running microtasks (promises) before anything else. The first promise prints B, and while doing that it schedules another promise and also immediately prints D because it’s still part of the same function. After that inner promise runs and prints C. Then JavaScript moves to the next promise and prints E. Only after all promise work is finished does JavaScript go to the macrotask queue, where the setTimeout callback runs and prints F
```
 */