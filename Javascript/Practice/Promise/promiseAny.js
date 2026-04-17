function promiseAny(arr){
    const err=[]
    let count=0;
    return new Promise((res,rej)=>{
        arr.forEach((ele,i) => {
            Promise.resolve(ele)
            .then((data)=>{
                res(data)
            })
            .catch(e=>{
                err[i]=e
                count++
                if(count===arr.length)rej(err)
            })
        });
    })
}


pr1=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("pr1")
    },3000)
})


pr2=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("pr2")
    },3000)
})

promiseAny([pr2,pr1])
.then(data=>{
    console.log(data)
})
.catch(e=>console.log("error "+e))

