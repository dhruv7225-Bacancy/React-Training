
// Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));
//20

// promise resolved and
// 10 passed to then 
// 10 *2 passed to next then
// 20