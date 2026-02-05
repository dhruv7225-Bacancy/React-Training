function throttle(func,time){
    let res=null
    let timeout=null
    return function(...args){
        if(!timeout){
            let result=func.call(this,args);
            timeout=setTimeout(()=>{
                timeout=null
            },time)
            console.log("called");
            
        }
    }
}

init=throttle(()=>{
    console.log("hello");
},3000)

init()
init()
init()
init()
init()
setTimeout(()=>{
    init()
},3500)
