
const object = {};

// Object.defineProperties(object, {
//   property1: {
//     value: 42,
//     writable: false,
//   },
//   property2: {},
// });
// object.property1=56
// console.log(object.property1);
// // Expected output: 42

Object.defineProperty(object,"foo",{
    value:34,
    writable:true
})

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
/////////////////// main curly bracket in quantity
// console.log(Object.groupBy(inventory,({quantity})=>{
//     return quantity>10? "high quatn":"low quant"
// }));


console.log(inventory.reduce((acc,obj)=>{
    if(obj.quantity>10){
        if(acc["high quant"]){
            acc["high quant"].push(obj)
        }
        else{
            acc["high quant"]=[obj]
        }
    }
    else{
        if(acc["low quant"]){
            acc["low quant"].push(obj)
        }
        else{
            acc["low quant"]=[obj]
        }
    }
    return acc
},{}));

