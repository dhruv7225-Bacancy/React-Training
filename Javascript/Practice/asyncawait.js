// const p1=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(" promise p1 ")
//     },10000)
// })
// const p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(" promise p2 ");
//     },5000)
// })
// const p3=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(" promise p3 ");
//     },5000)
// })

// async function func(){
//     console.log("hello");

//     const val=await p1;
//     console.log("after p1");
//     console.log(val);

//     const val2=await p2;
//     console.log("after p2");
//     console.log(val2);
// }


// async function hello(){
//     console.log("say hello");
//     const val3= await p3
//     console.log("after p3");

//     console.log(val3);

// }

// func()
// hello()

// async function func(){
//     try{

//         const data=await fetch("https://api.github.com/users/dhruv7225")
//         const val= await data.json()
//         // const val=fetch("https://api.github.com/users/dhruv7225") // fetch return response obj which is then converted to json via response.json() with returns promise again
//         // .then((response)=>{
//         //     return response.json()
//         // })
//         // .then((data)=>{
//         //     console.log(data); 
//         // })
//         console.log(val);
//     }
//     catch(err){
//         console.log(err);

//     };

// }
// func()

// use try catch for err or
// func().catch((err)=>console.log(err))
// func() will return promise 
// all async function returns promise

// const pr = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("promise resolved")
//     }, 5000)
// })

// function onceAsync(fn){

//     let promise=null
//     return function(...args){
//         if(!promise){
//             promise= fn.apply(this,args)
//         }
//         return promise
//     }
// }

// async function func(...args){
//     const data = await pr;
//     console.log(data ,args);

//     return data
// }
// const runonce=onceAsync(func)
// runonce(1,2,3)
// runonce()


///////////////////////////////////////////////////////////////////////////////////

// function onceWithTimeout(fn, ms) {
//     let promise = null
//     let timer = null
//     return function (id) {
//         if (!promise) {
//             promise = Promise.resolve()
//                 .then(() =>  fn.call(this, id))
//                 .catch(err => {
//                     promise=null
//                     console.log(err)}
//                 )
//             timer =
//                 setTimeout(() => {
//                     promise = null
//                     timer = null
//                 }, ms)
//         }
//         return promise

//     }
// }


// const fetchData = async (id) => {
//     console.log("fetching", id);
//     return id * 10;
// };

// const cachedFetch = onceWithTimeout(fetchData, 3000);

// cachedFetch(1); // logs "fetching 1"
// cachedFetch(2); // no log, returns same promise

// // after 3 seconds

// setTimeout(() => {
//     cachedFetch(3); // fetching 3
// }, 3500);

// // cachedFetch(3); // logs "fetching 3"

/////////////////////////////////////////////////////////////////////////////////


// function dedupeAsync(fn){
//     const logs={}
//     return function(id){
//         let temp=Object.keys(logs).find((ele)=>ele==id)
//         if(temp==null || logs[temp]==null){
//             logs[id]=Promise.resolve()
//             .then(()=>{
//                 return fn.call(this,id);

//             })
//             .catch((err)=>{
//                 // logs[id]=null
//                 console.log(err);
//             })
//             .finally(()=>{
//                 logs[id]=null
//             })
//         }
//         return logs[id]
//     }
// }


// const fetchUser = async (id) => {
//   console.log("fetching user", id);
//   return { id };
// };

// const dedupedFetch = dedupeAsync(fetchUser);

// dedupedFetch(1);
// dedupedFetch(1); // same promise, no extra log
// dedupedFetch(1); // same promise, no extra log

// dedupedFetch(2); // separate call
// dedupedFetch(2); // separate call

// setTimeout(() => {
//     dedupedFetch(1); // logs again (previous call completed)
// }, 1000);



///////////////////////////////////////////////////////////////////////////////////////////
function retryAsync(fn, options) {
    let e=null;
    const func = async function () {
        let promise=null
        let count=options.retries
        while (count > 0) {
            count--;
            promise=Promise.resolve()
                .then(() => {
                    return fn.call(this)
                })
                .catch((err) => {

                    if(count==0)throw err
                })
            setTimeout(()=>{
                
            },options.delay)
        }
        return promise

        
    }
    return func
}
    let count = 0;
    const fetchData = async () => {
        count++;
        if (count < 3) throw new Error("fail");
        return "success";
    };

    const retriedFetch = retryAsync(fetchData, { retries: 5, delay: 500 });

    retriedFetch().then(console.log); // "success" after 2 failed attempts
