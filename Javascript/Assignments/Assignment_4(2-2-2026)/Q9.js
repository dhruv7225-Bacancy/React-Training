// Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

    // 5
    // 10

// promise resolved and 5 returned
// 5 logged
// 5+5 returned 
// 10 logged