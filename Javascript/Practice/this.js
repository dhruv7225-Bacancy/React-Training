// const obj = {
//     a: 10,
//     x: function () {
//         const z=function () {
//             let y = () => {
//                 console.log(this.a);
//             }
//             return y;
//         }
//         return z
//     }
// }

// const z = obj.x()
// const y=z();
// y()
// console.log();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const obj = {
//   value: 42,
//   show() {
//     function inner() {
//       console.log(this.value);
//     }
//     inner();
//   }
// };

// obj.show();//undefined

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Counter {
//   count = 0;

//   increment = () => {
//     this.count++;
//   };

//   log() {
//     console.log(this.count);
//   }
// }

// const c = new Counter();
// const inc = c.increment;

// inc();
// c.log();//1

//check2
// console.log(14==014);


// let a = 10;
// x()
// y()
// z() 

// function x(){
//  console.log(this.a)
// }
// function y(){
//   console.log(this.a)
// }
// const z = () => {
//   console.log(this.a)
// }

// const obj = {
//   _value: 1,
//   get value() {
//     return this._value * 2;
//   },
//   set value(val) {
//     this._value = val + 1;
//   },
// };

// obj.value = 5;
// console.log(obj.value);

const obj = {
  value: 42,
  getValue: function () {
    return this.value;
  },
};
const getValue = obj.getValue;
console.log(getValue()); // undefined
