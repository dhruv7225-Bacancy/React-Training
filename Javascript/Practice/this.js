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

class Counter {
  count = 0;

  increment = () => {
    this.count++;
  };

  log() {
    console.log(this.count);
  }
}

const c = new Counter();
const inc = c.increment;

inc();
c.log();//1

