// ### Exercise 3: setTimeout with Clear


// **Task:** Create a countdown timer that counts from 10 to 0, then stops.


// ```javascript
// // TODO: Implement countdown function
// function countdown(start) {
//  // Your code here
//  // Should log numbers from start to 0, with 1 second between each
//  // Should stop at 0
// }


// countdown(10);
// // Expected output:
// // 10 (immediately)
// // 9  (after 1 second)
// // 8  (after 2 seconds)
// // ...
// // 0  (after 10 seconds)
// ```


// function count(c){
//     let timer;
//     function task(c){
//         console.log(c);
        
//         if(c==0){
//             clearTimeout(timer)
//             return;
//         }
//         timer=setTimeout(()=>{
//             count(c-1)
//         },1000)
//     }
//     task(c)
// }
// count(10)


function timer(x){
    for(let i=x;i>=0;i--){
        setTimeout(()=>{
            console.log(i);
            
        },1000*(x-i))
    }
}

timer(10)

