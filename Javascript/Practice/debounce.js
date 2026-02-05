function debounce(func,time){
    let timer=null
    return function(...args){
        // if(!timer){
            clearTimeout(timer)
            timer=setTimeout(()=>{
                func.call(this,args);
            },time)
            console.log("delay restart");
        // }
    }
}

const init=debounce(()=>{
    console.log("callleeeeddd");
},3000)

init()
init()
setTimeout(()=>{
    init()
},2000)
setTimeout(()=>{
    init()
},4000)


console.log(typeof [1,2,3,4]);
console.log([12,3,4] instanceof Array);
