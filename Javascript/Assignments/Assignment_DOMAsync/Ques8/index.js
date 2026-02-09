// 8) Create a Promise that resolves with the number 5.
// Chain .then() to double the number, then another .then() to add 20, and finally log the result.

const pr= new Promise((resolve,reject)=>{
    resolve(5)
})

pr.then((data)=>{
    return data*2
})
.then((data)=>{
    return data+20
})
.then(data=>console.log(data)
)
