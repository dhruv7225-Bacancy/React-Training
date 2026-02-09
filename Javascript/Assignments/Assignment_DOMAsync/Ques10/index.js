// 10) Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.
function simulateTask(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} is resolveddd`)
        }, delay)
    })
}
// Part A:

async function main() {
    const res = await simulateTask("p-1", 1000)
    console.log(res);
    const res2 = await simulateTask("p-2", 1000)
    console.log(res2);
    const res3 = await simulateTask("p-3", 1000)
    console.log(res3);
}
main()
///takes 3 seconds to executes

// Part B:

Promise.all([simulateTask("p-1", 1000), simulateTask("p-2", 1000), simulateTask("p-3", 1000)]).then((arr) => {
    arr.forEach(status => {
        console.log(status);
    });
})
//takes 1 seconds to execute because all runs parallel