// 9) Create a function wait(ms) that returns a Promise and resolves after ms milliseconds using setTimeout.
// Use it to log "2 seconds passed" after 2000 ms

function wait(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${ms/1000} seconds passed`)
        },ms)
    })
}

wait(2000).then(data=>console.log(data))
wait(5000).then(data=>console.log(data))
wait(10000).then(data=>console.log(data))