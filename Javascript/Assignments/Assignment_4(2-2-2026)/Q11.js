// Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

// A E C D B

// A logged
// setTimeout sent to Macro queue
// promise sent to micro queue
// E logged
// promise resolved for micro Queue
// C logged
// promise sent to micro queue
// and then resolved due to higher priority
// D logged
// setTimeout function callabck function is evaluated in call stack
// B logged