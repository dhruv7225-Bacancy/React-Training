function Counter(){
    var count=0;
    
    this.inc=function(){
        count++;
        console.log(count);
    }
    this.dec=function(){
        count--;
        console.log(count);
    }
}

const c=new Counter();
c.inc()
console.log(c.count);

const users=[
    {firstName:"dhruv",lastName:"patel",age:34},
    {firstName:"xyz",lastName:"patel",age:20},
    {firstName:"xyz",lastName:"patel",age:3},
    {firstName:"xyz",lastName:"patel",age:34},
]

// console.log(users.reduce((acc,obj)=>{
//     let str=obj.firstName+" "+obj.lastName
//     acc.push(str);
//     return acc
// },[]));

console.log(users.reduce((acc,obj)=>{
    acc[obj.age]=acc[obj.age]? acc[obj.age]+1:1
    return acc
},{}));

