




// let arr = [[1, 2], [2, 3], [4, [5,[1,2,3] ,6]]]

// function red(arr) {
//     // if (!Array.isArray(arr)) {
//     //     return arr
//     // }
//     // else {
//         return arr.reduce((acc, a) => {
//             if (Array.isArray(a)) {
//                 red(a).forEach(x => {
//                     acc.push(x);
//                 })
//             }
//             else {
//                 acc.push(a)
//             }
//             return acc
//         }, [])
//     // }
// }

// console.log(red(arr));



// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function() {
//   console.log(`${this.name} is eating.`);
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// // Intent: Dog should inherit from Animal
// Dog.prototype = Animal.prototype; 

// Dog.prototype.bark = function() {
//   console.log("Woof!");
// };

// const myDog = new Dog("Buddy", "Golden");
// const genericAnimal = new Animal("Generic");

// genericAnimal.bark(); // Why does this happen?
// console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?

// console.log(myDog.name);
// // delete myDog.name
// genericAnimal.eat()
// // console.log();

// function Animal(name) {
//   this.name = name;
// }

// function Dog( breed) {
  
//   this.breed = breed;
// }

// Dog.prototype=Object.create(Animal)

// console.log([undefined].toString());

// let result = [];

// for (var i = 0; i < 3; i++) {
//   result.push(()=>this.i);
// }

// console.log(result[0](), result[1](), result[2]());

console.log("0"==false);
// console.log(undefined==false);

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo"),
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result)),
// );


// const user = null;
// console.log(user?.name ?? "Anonymous");


const arr=[
    {id:2,tags:["a",'b']},
    {id:1,tags:["d",'b']},
    {id:4,tags:['b']},
    {id:4,tags:["a",'c']}
]

arr.reduce((acc,obj)=>{
    obj.tags.forEach(x=>{
        if(acc[x]){
            
        }
        else{
            acc[x]=[obj.id]
        }
    })
},{})