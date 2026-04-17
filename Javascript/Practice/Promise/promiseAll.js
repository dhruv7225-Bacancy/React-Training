async function promiseall(arr) {
    let len = arr.length;
    const ans = []
    return new Promise((res, rej) => {
        arr.forEach((ele,index) => {
            Promise.resolve(ele)
                .then((data) => {
                    // console.log(data)
                    ans[index]=data
                    len--;
                    if(len==0)res(ans)
                })
                .catch(e=>{
                    rej("failed")
                })
        });
    })
}

pr1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("pr1")
    },5000)
})


pr2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("pr2")
    },3000)
})

promiseall([2,pr2,pr1])
.then(data=>{
    data.forEach(e=>console.log(e))
})
.catch(e=>console.log("error "+e))
