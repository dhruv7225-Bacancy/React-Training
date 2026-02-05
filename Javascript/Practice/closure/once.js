// ✅ Question 26 — IMPLEMENTATION (core JS)
// Implement once(fn)

// Write a function once(fn) such that:

// fn runs only the first time

// Subsequent calls return the same result

// this and arguments must be preserved

// No global variables

// Example
// const init = once(function (x) {
//   console.log("called");
//   return x * 2;
// });

// init(5); // logs "called", returns 10
// init(10); // does NOT log, returns 10

// Constraints

// Do NOT use classes

// Do NOT modify fn

// Write the implementation.

function once(func) {
    let flag = true
    let val = null
    return function (x) {
        if (flag) {
            val = func.call(this, x)
            flag = false
            return val
        }
        else {
            return val
        }
    }
}

const init = once(function (x) {
    console.log("called");
    return x * 2;
});
console.log(init(5));
console.log(init(10));
console.log(init(20));



// logs "called", returns 10
// init(10); // does NOT log, returns 10
