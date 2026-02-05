const { log } = require("console");

let str="sjddgfkigdkgfusdhfluhds"

console.log(str[2]);
console.log(str.charCodeAt(2)-97+1);
console.log(str.codePointAt(2)-97+1);//return ascii
console.log(str.at(-2)); //can use neg index

str[2]="A" //not works
// str.replace(2,"A")
// console.log(str);

// let str2=str.concat("abcd","ABCD","123")
// console.log(str2);

// console.log(str.slice(0,3));
// console.log(str);

// let s="5"

// console.log(s.padStart(11,"abc"));

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));
// console.log(text.match("ain").index);


// let abc=text.matchAll("ain")
// console.log(Array.from(abc));

// console.log((0.2+0.2)==0.4);

// let x = 100 / "Apple";
// console.log(isNaN(x));
// console.log(Number.isNaN(x));

// let a=15
// console.log(a.toString(2)); //to base 2
// console.log(a.toString(8)); //to base 8

// console.log(Number.parseInt("10 32984"));
// console.log(typeof Number); //function
// console.log(typeof typeof 1); //string

// console.log(typeof Boolean); //function
// console.log(typeof typeof false); //string

// const sym = Symbol("foo");
// console.log(typeof Symbol);//function
// console.log(typeof typeof sym );//string
// console.log(typeof sym === "symbol");//true

// console.log(typeof (function(){})); //function

// console.log(parseInt("101",2).toString(10));//binary to base 10

// const fruits = {Bananas:300, Oranges:200, Apples:500}; 
// console.log(Object.entries(fruits));

// for(let [key,val] of Object.entries(fruits)){
//     console.log(key +" : "+val);
// }

// myFunction();

// function myFunction() {
//   carName = "Volvo";
// }
// console.log(carName);

// let time=new Date().getTime()

// while((new Date().getTime()-time)<10000){

// }
// console.log("10 sec");


// const obj={
//     1:"fsaf",
//     2:"sdfasf",
//     3:"fasf"
// }
// console.log(
// Object.keys(obj));


// const myArr = [1, 2, [3, [4, 5]], 6];
// const newArr = myArr.flatMap(x => x);
// console.log(newArr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 1, "Lemon", "Kiwi"));
console.log(fruits);

let str="abcd"
