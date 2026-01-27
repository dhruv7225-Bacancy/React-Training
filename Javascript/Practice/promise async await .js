
// function retryAsync(fn , options){
//     const {retries, delay}=options
//     return async function (...args) {
//         let  count = retries
//         while (count>0){
//             try{
//                 return await fn.apply(this,args)
//             }
//             catch(err){
//                 count--;
//                 if(count==0)throw err
//                 if(delay)await new Promise((res,rej)=>{
//                     setTimeout(()=>res(),delay)
//                 })
//             }
//         }
//     }
    
// }
// let count = 0;
// const fetchData = async () => {
//   count++;
//   if (count < 3) throw new Error("fail");
//   return "success";
// };

// const retriedFetch = retryAsync(fetchData, { retries: 5, delay: 500 });

// retriedFetch().then(console.log); // "success" after 2 failed attempts



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


function retryAsyncExponential(fn,options){
    let count=options.retries
    return async function () {
        let delay=options.delay
        while(count >0 ){
            try {
                return await fn.call(this)
            }
            catch (err){
                count--;
                if(count==0 )throw err
                if(delay)await new Promise ((res,rej)=>{
                    setTimeout(()=>{
                        delay=Math.min(delay*(options.factor),options.maxDelay)
                        res()
                    },delay)
                })
            }
        }
    }
}


let count = 0;
const fetchData = async () => {
  count++;
  console.log("attempt", count);
  if (count < 4) throw new Error("fail");
  return "success";
};

const retriedFetch = retryAsyncExponential(fetchData, { retries: 5, delay: 500, factor: 2, maxDelay: 2000 });

retriedFetch().then(console.log).catch(console.error);
