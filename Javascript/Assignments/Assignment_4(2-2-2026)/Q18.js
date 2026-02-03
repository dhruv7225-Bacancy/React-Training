// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;

//undefined
//10


// a is hoisted but not initialized so print undefined
// promise goes to micro queue
// a=10
// promise resolves and 10 is printed
