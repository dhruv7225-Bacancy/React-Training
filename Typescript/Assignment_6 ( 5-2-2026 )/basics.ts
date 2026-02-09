const  prices : number[]=[2,3,4,5,5];


function calculateTotal(nums:number[]):number{
    let sum:number=0;
    nums.forEach(x=>{
        sum=sum+x
    });
    return sum
}

function sum(a:number ,b:number):number |string{
    if(a+b>100){
        return "sum greater then 100"
    } 
    return a+b
}

console.log(calculateTotal(prices)); //19 -- print sum
console.log(sum(3,6)); // 9 print sum
console.log(sum(3,100)); // return string bcz sum>100
// console.log(sum(3,"100")); //compile err : Argument of type 'string' is not assignable to parameter of type 'number'.

