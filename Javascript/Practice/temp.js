// const proAnimar = {
//     dm : "hi",
//     pm : "p,",
//     bark(name){
//         console.log(`${this.dm} , ${this.pm}, ${name} is barking`)
//     },
//     run(name){
//         console.log("DOGS KEEP BARKIN")
//     }
// }

// const proDog = {
//     dm : "hiDoggy",
//     pm : "pDoggy,",
//     hasLags(name){
//         console.log(`${this.dm} , ${this.pm}, ${name} has lags`)
//     },
// }

// const kullu = {
//     name : "kullu",
//     color : "kallu",
//     thisName : null,
//     setThisName(){
//         this.thisName=this.color
//     },
//     sing(){
//         console.log("Dogs can't sing", `${this.name}`)
//     }
// }
// // kullu.=kullu.color

// Object.setPrototypeOf(proDog,proAnimar)
// Object.setPrototypeOf(kullu,proDog)

// kullu.sing("passed from user end")
// kullu.sing("hello")
// console.log(kullu.name, kullu.color)
// kullu.setThisName()
// console.log(kullu.thisName)

// function A() {}

// const a = new A();

// console.log(a instanceof A); // ?

// A.prototype = {};

// console.log(a instanceof A); // ?


// function Person(name) {
//   this.name = name;

//   this.sayHi = function () {
//     return "Hi " + this.name;
//   };
// }

// Person.prototype.sayHi = function () {
//   return "Hello " + this.name;
// };

// const p = new Person("Dhruv");

// console.log(p.__proto__.sayHi()); // ?


const arr = ['', null, [],undefined, 0 ,{}, 1].filter(Boolean)
console.log(arr);
//type coersion

console.log(typeof (null+undefined));
console.log(typeof (null+"undefined"));
console.log( {}+[]);

