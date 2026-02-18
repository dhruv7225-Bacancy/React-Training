// Assignment 1: Type Inference
// Declare variables using let and const with initial values and observe inferred types
// Try reassigning incompatible values and note the compiler errors
// Write a function without a return type and inspect what TypeScript infers


let name1="dhruv"
console.log(typeof name1);

// name1=34
//can't do this because once type infered then can't be changed

const age=34
console.log(typeof age);



function getName(){
    return "dhruv"
}
// function getName will infer return type as String

