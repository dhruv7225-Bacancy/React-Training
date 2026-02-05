
// var x=10
// function a(){
//     let x=100; //function scoped so var x or let x out and var x and let x in both will print and and not give err
//     console.log(x);


    
// }
// a()
// console.log(x);


// let a=10
// let a=20 ///syntax err

// const a=100
// a=20 // type err

// var a=10
// console.log(b); //reference err not defined

// console.log(b); // reference err can't acces before initialization
// let b=10

// var a=10
// if(true){
//     var a=20
//     console.log(a);
// }
// console.log(a);


// var x = 10;

// {
//   console.log(x);
//   var x = 20;
// }


// let a = 5;

// function test() {
//   console.log(a);
//   let a = 10;
// }

// test();

// for(var i=0;i<4;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },0)
// }


// let x = 10;

// if(true){
//     var x=100 //err
// }
// function foo() {
//   console.log(x);
//   var x = 20; //okk
// }

// foo();


// let x = 10;

// function foo(y = x, x = 20) {
//   console.log(y);
// }

// foo();


// let result = [];

// for (var i = 0; i < 3; i++) {
//   result.push(() => i);
// }

// console.log(result[0](), result[1](), result[2]());


// let x = 5;

// function foo(a = x) {
//   let x = 10;
//   console.log(a);
//   if(true){
//     let b=20
//     return function(){
//         console.log(a);
        
//     };
//   }
// }

// foo()();


// if(a=NaN){
//     console.log("if");
// }
// else{
//     console.log("else");
// }
// console.log(013 == 13);


// let x = "John";
// let y = new String("John");
// console.log(x==y);//false
// console.log(typeof x);//string
// console.log(typeof y);//object

// let x = new String("John");
// let y = new String("John");
// console.log(x==y); //false

let y = "John"
let x = new String("John");
console.log(x == y);