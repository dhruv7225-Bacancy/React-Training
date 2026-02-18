
//retry with delay
function retry(func,count){
    return new Promise((resolve,reject)=>{

        func()
        .then((data)=>{
            console.log(data);
            resolve(data)
        })
        .catch((err)=>{
            if(count<=0){
                reject("Retry limit exceed");
            }
            else{
                count--;
                console.log("retraying attempt left :"+count);
                retry(func,count)
                .then(resolve)
                .catch(reject)
            }
        })
        
    })
}

function func(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                res("resolvedddd")
            }
            else{
                rej("rejecteddd")
            }
        },1000)
    })
}

retry(func,3)
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
