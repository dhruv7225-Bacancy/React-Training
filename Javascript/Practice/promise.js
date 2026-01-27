// function fetchUser(){
//     return new Promise((resolve,reject)=>{
//         // if(Math.random()>0.5){
//             setTimeout(()=>{
//                 const data={ id: 1, name: "Dhruv" }
    
//                 resolve(data)
//             },1000)
//         // }
//         // else{
//         //     reject("Network Error")
//         // }
//     })
// }
// function fetchOrders(user){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(["Order1", "Order2"]);
//         },1000)
//     })
// }
// function fetchPayment(order){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("payment succssful")
//         },1000)
//     })
// }

// fetchUser()
// .then((data)=>{
//     console.log(`User fetched: ${data.name}`);
//     return fetchOrders(data.name);
// })
// .catch((err)=>{
//     console.log(`Failed to fetch user : ${err}`);
// })
// .then((orders)=>{
//     console.log(orders);
//     return fetchPayment(orders[0]);
// })
// .then((orderdetails)=>{
//     console.log(orderdetails);
// })


// problem 2 -----------------------------------------------------------------------------


// function fetchProfile(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("profile fetched")
//         },1000)
//     })
// }
// function fetchPosts(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("post fetched")
//         },1000)
//     })
// }
// function fetchFollowers(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("followers fetched")
//         },1000)
//     })
// }

// Promise.all([fetchProfile(),fetchPosts(),fetchFollowers()])
// .then((values)=>{
//     console.log(values);
//     console.log("all value fetched");
    
    
// })

// problem 3 -----------------------------------------------------------------------------


// function apicall(){
//     let pr= new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Dta received")
            
//         },2000)
//     })
//     return pr;
// }
// function timeout(){
//     let pr= new Promise((res,rej)=>{
//         setTimeout(()=>{
//             rej("Request timed out")
//         },1000)
//     })
//     return pr
// }
// Promise.race([apicall(),timeout()])
// .then((value)=>{
//     console.log(value);
// })
// .catch((err)=>{
//     console.log(err);
// })


// problem 4 -----------------------------------------------------------------------------


// function apicall(){
//     let pr= new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Dta received")
            
//         },2000)
//     })
//     return pr;
// }

// function apicall2(){
//     let pr= new Promise((res,rej)=>{
//         setTimeout(()=>{
//             rej("net err")
            
//         },2000)
//     })
//     return pr;
// }

// function apicall3(){
//     let pr= new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Dta received")
            
//         },2000)
//     })
//     return pr;
// }

// let promises= Promise.allSettled([apicall(),apicall2(),apicall3()])
// .then((values)=>{
//     values.forEach((value)=>{
//         // console.log(value.status);
//         console.log(value);

//     })
// })


// problem 5 -----------------------------------------------------------------------------


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
