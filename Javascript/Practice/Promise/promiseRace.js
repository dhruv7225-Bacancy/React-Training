function promiseRace(arr) {
    return new Promise((res, rej) => {
        if(!arr.length){

        }
        else{

            arr.forEach(ele => {
                Promise.resolve(ele)
                    .then(data => {
                        res(data)
                    })
                    .catch(e => {
                        rej(e)
                    })
            });
        }
    })
}


pr1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("pr1")
    },3000)
})


pr2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("pr2")
    },3000)
})

promiseRace([2,pr2,pr1])
.then(data=>{
    console.log(data)
})
.catch(e=>console.log("error "+e))

