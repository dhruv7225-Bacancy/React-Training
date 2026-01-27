// function a(){
//     var x=7;
//     function b(){
//         console.log(x);
//     }
//     x=100
//     return b;
// }
// var y=a()
// y()

"use strict"
// function a (){
//     for(var i=1;i<=5;i++){
//         setTimeout(function b(){
//             console.log(i);
//         },1000*i)
//     }
// }
// a()
// if it is referencing through lexical scope then it will access from reference 
// so if we make a new function and pass value i to it then it will be accessed from
// LEC of that function which will have copy of i
// function a (){
//     for(var i=1;i<=5;i++){
//         function close(x){
//             setTimeout(function b(){
//                 console.log(x);
//             },1000*i)
//         }
//         close(i)
//     }
// }
// a()

//constructor function

// function Sayhello(name,age){
//     this.name=name
//     this.age=age
//     this.sayHello = function (){
//         console.log("say hello");
//     }
// }

// const a=new Sayhello("dhruv",23);
// a.sayHello();
// console.log(a.name,a.age);


// function sum(){
//     console.log(arguments);
// }
// sum(10,20,30);

// const sum=()=>{
//     console.log(arguments);
// }
// sum(10,20,30)


// const user ={
//     name :"dhruv",
//     email:"dhruv!gmail.com",
//     settings:{
//         theme : "light"
//     },
//     printInfo :function (){
//         console.log(`user ${this.name} uses ${this.settings.theme} theme`);
//     }
// }
// // user.printInfo()
// const updatedUser={...user }
// // updatedUser.printInfo()
// // user.printInfo()
// // this to do
// updatedUser.settings.theme="xyz";
// console.log(user.settings.theme);

// let arr=["YES","NO", "YES", "MAYBE","NO", "YES"];
// const obj =arr.reduce((acc,val)=>{
//     if(acc[val]){
//         acc[val]+=1
//     }
//     else{
//         acc[val]=1;
//     }
//     return acc
// },{})
// console.log(obj);
// console.log(a);
// var a=10;
// function par(){
//     // var a=10
//     // const s = {
//     //     a2: 10,

//     // }
//     const b=()=>{

//         console.log(this.a);
//     }
//     return b
// }
// par()();
// // this.a

// var a = 10;
// x()
// y()
// z() 

// function x(){
//  var a = 20;
//  console.log(this.a)
// }
// function y(){
//   console.log(this.a)
// }
// const z = () => {
//   console.log(this.a)
// }



// var x = 100;

// const obj = {
//   x: 10,
//   show: function () {
//     const inner = () => {
//       return this.x;
//     };
//     return inner();
//   }
// };

// console.log(obj.show());



// var x = 100;

// const obj = {
// //   x: 10,
//   show: function () {
//     const inner = () => {
//       return this.x;
//     };
//     return inner();
//   }
// };

// console.log(obj.show());

// const obj = {
//   name: "Dhruv",
//   print() {
//     function inner() {
//       console.log(this.obj.name); // ❌
//     }
//     inner();
//   }
// };

// obj.print()
// var name="global"
// const obj = {
//   name: "OBJ",
//   print: function () {
//         return ()=>{
//             console.log(this.name);
//         }
    
//  }
// };

// obj.print()()();


const transactions = [
  { userId: 1, type: "credit", amount: 500 },
  { userId: 2, type: "debit", amount: 200 },
  { userId: 1, type: "debit", amount: 1000 },
  { userId: 3, type: "credit", amount: 700 },
  { userId: 2, type: "credit", amount: 300 },
  { userId: 1, type: "credit", amount: 200 }
];


const netBal=transactions.reduce((acc,obj)=>{
    let val=obj.type=="credit" ?obj.amount:-obj.amount;
    let temp=acc.filter((o)=>{
        return o.userId==obj.userId
    })
    if( temp.length>0){
        temp[0].balance+=val;
    }
    else{        
        acc.push({
            userId:obj.userId,
            balance: val
        })
    }
    return acc
},[]);
const positiveBal=netBal.filter((obj)=>{
    return obj.balance>0
})
// console.log(positiveBal.sort((a,b)=> b.balance-a.balance))


const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "A", salary: 5000 },
      { name: "B", salary: 7000 }
    ]
  },
  {
    name: "HR",
    employees: [
      { name: "C", salary: 4000 },
      { name: "D", salary: 6000 }
    ]
  }
];

const ans=departments.reduce((acc,obj)=>{
    
    let totalval=obj.employees.reduce((acc1,d)=>{
        acc1+=d.salary
        return acc1
    },0)
    let avg=totalval/(obj.employees.length)
    acc[obj.name]=avg
    return acc
},{})

// console.log(ans);

const text = "JS is great and JS is powerful and JS is fun";
const newtext=text
.toLowerCase()
.split(" ")
.filter((ele)=>{
    return ele.length>=3
})
.reduce((acc,ele)=>{
    const temp=acc.filter((e)=>{return e[0]==ele})
    // console.log(temp,ele);
    if(temp.length>0){
        // let abc=acc.pop(temp)
        // acc.push(
        //     [abc[0],abc[1]+1]
        // )
        temp[0][1]+=1
    }
    else{
        acc.push([ele,1])
    }
    // console.log(acc);
    
    return acc
},[])
.sort((a,b)=>{
    return b[1]-a[1]
})
// console.log(newtext);



const orders = [
  { orderId: 1, customer: "A", amount: 200 },
  { orderId: 2, customer: "B", amount: 300 },
  { orderId: 3, customer: "A", amount: 150 },
  { orderId: 4, customer: "B", amount: 100 },
  { orderId: 5, customer: "C", amount: 400 }
];


const o=orders.reduce((acc,obj)=>{
    if(acc[obj.customer]){
        acc[obj.customer].total+=obj.amount
        acc[obj.customer].count+=1
    }
    else{
        acc[obj.customer]={
            total: obj.amount,
            count: 1
        }
    }
    return acc
},{})
// console.log(o);

const students = [
  { name: "A", marks: [80, 90, 70] },
  { name: "B", marks: [60, 50, 40] },
  { name: "C", marks: [95, 85, 92] },
  { name: "D", marks: [30, 20, 10] }
];
let z=students.reduce((acc,obj)=>{
    let total=obj.marks.reduce((a,e)=>{
        a+=e
        return a;
    },0)
    let avg=total/obj.marks.length
    if(avg>75){
        acc.push([obj.name,avg])
    }
    return acc;
},[])
.sort((a,b)=>{
    return b[1]-a[1]
})
.reduce((a,o)=>{
   a.push(o[0]) ;
   return a
},[])

console.log(z);


const arr10=["AA","aA","aa","aA","bB","BB"];

const ans123=arr10.reduce((a,e)=>{
    const obj=e.split("").reduce((acc,char)=>{
        if( acc[char]){
            acc[char]++;
        }
        else{
            acc[char]=1;
        }
        return acc;
    },a)
    return a;
},[])

console.log(ans123);
