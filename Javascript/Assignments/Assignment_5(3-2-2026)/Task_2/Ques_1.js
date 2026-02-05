// ## Task 2: setTimeout Examples


// ### Objective
// Complete and understand various setTimeout scenarios.


// ### Exercise 1: Basic setTimeout


// **Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.


// ```javascript
// // TODO: Implement countWithDelay function
// function countWithDelay() {
//  // Your code here
//  // Should output: 1 (after 1s), 2 (after 2s), 3 (after 3s), 4 (after 4s), 5 (after 5s)
// }


// countWithDelay();
// ```


// **Expected Output:**
// ```
// 1  // after 1 second
// 2  // after 2 seconds
// 3  // after 3 seconds
// 4  // after 4 seconds
// 5  // after 5 seconds
// ```



function countWithDelay(){
    for(let i=1;i<=5;i++){

        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}

countWithDelay()