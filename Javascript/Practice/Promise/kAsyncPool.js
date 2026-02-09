// create a pool of size given and at a time only k process can schedule 
function Pool(size, k) {
    let poolSize = size
    let curr = 0
    let maxOp = k

    const queue = []
    return async function (pr) {
        // if(queue.length+curr==poolSize){
        //     throw new Error("Pool limit reached")
        // }
        if (curr == maxOp) {
            await new Promise(p => queue.push(p));
        }
        curr++
        const result = await pr()
        if (queue.length > 0) {
            curr--
            queue.shift()()
        }
        return result
    }
}
const pool = Pool(100, 10);
for (let i = 0; i < 25; i++) {

    pool(getPromise).then((data) => {
        console.log(data)
        console.log(i);
        
    });
}

function getPromise() {

    const pr = new Promise((res, rej) => {
        setTimeout(() => {
            res("resolvedddd")
        }, 5000)
    })
    return pr
}
