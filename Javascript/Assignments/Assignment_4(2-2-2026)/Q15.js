// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

//     Caught Error
// 10

// the thrown error is caught, the promise chain continues and the catch returns 10, which is passed to the final then.