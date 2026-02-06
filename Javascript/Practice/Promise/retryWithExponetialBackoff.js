// retry with exponetial delay

function retry(func, retries, delay) {
    if (delay > 200000 || retries == 0) {
        throw new Error("max retrys reached");
    }
    count=retries
    return new Promise((res, rej) => {
        setTimeout(()=>
            func()
            .then((data) => {
                console.log(data);
                res(data)
            })
            .catch((err) => {
                if (count <= 0) {
                    rej("Retry limit exceed");
                }
                else {
                    count--;
                    console.log("retraying attempt left :" + count);
                    retry(func, count,delay*2)
                        .then(res)
                        .catch(rej)
                }
            })
            ,delay)
        
    })
}

function func(){
    return new Promise((res,rej)=>{
        rej("rej")
    })
}

retry(func,3,1000)