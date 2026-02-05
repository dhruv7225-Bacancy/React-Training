// const data = [1, [2, [3, 4], 5], [6, 7], 8];

// function flattenOnce(arr){
//     return arr.flat(1)
// }
// const newArr=flattenOnce(data)
// console.log(newArr);
// function flattenCompletely(arr){
//     return arr.flat(Infinity)
// }

// const users = [
//   { name: "Amit", skills: ["JS", "React"] },
//   { name: "Neha", skills: ["Java", "Spring"] },
//   { name: "Rahul", skills: ["JS"] }
// ];
// console.log(
// users.flatMap(x=>{
//     return x.skills
// }));

const arr = [10, 20, 30, 40, 50];
function getMiddle(arr){
    return arr.slice(1,4)
}
console.log(getMiddle(arr));
console.log(arr);

function removeMiddle(arr){
    return arr.splice(1,3)
}

console.log(removeMiddle(arr));
console.log(arr);
// function removeMiddleImmutable(arr){
//     return arr.toSpliced(1,3)
// }
// console.log(removeMiddleImmutable(arr));

// console.log(arr);


const cart = [
  { id: 1, items: ["apple", "banana"] },
  { id: 2, items: ["orange"] }
];


// console.log(cart.flatMap(x=>{
//     if(x.id==1){
//         return [x.id,x.items.toSpliced(1,1)]
//     }
//     return [x.id,x.items]
// }));


// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(x=>x>5);
// console.log(first);

// const letters = new Set(["a","b","c"]);
// for(let x of letters.values()){
//     console.log(x);
// }


const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

console.log(Map.groupBy(fruits,(x)=>x.quantity>200 ? "okk":"low"));

console.log(Math.random());