// ✅ Question 26 — IMPLEMENTATION (core JS)
// Implement once(fn)

// Write a function once(fn) such that:

// fn runs only the first time

// Subsequent calls return the same result

// this and arguments must be preserved

// No global variables

// Example
// const init = once(function (x) {
//   console.log("called");
//   return x * 2;
// });

// init(5); // logs "called", returns 10
// init(10); // does NOT log, returns 10

// Constraints

// Do NOT use classes

// Do NOT modify fn

// Write the implementation.

function once(func) {
    let flag = true
    let val = null
    return function (x) {
        if (flag) {
            val = func.call(this, x)
            flag = false
            return val
        }
        else {
            return val
        }
    }
}

const init = once(function (x) {
    console.log("called");
    return x * 2;
});
console.log(init(5));
console.log(init(10));
console.log(init(20));

// logs "called", returns 10
// init(10); // does NOT log, returns 10


// 🔥 Next — Implementation Question 27
// Implement memoize(fn)

// Requirements:

// Cache results based on arguments

// Same arguments → return cached result

// Different arguments → compute again

// Preserve this

// No JSON stringify for keys

// Example:

// const slowAdd = (a, b) => {
//   console.log("calculating");
//   return a + b;
// };

// const fastAdd = memoize(slowAdd);

// fastAdd(2, 3); // "calculating", 5
// fastAdd(2, 3); // 5 (cached)
// fastAdd(3, 2); // "calculating", 5


function memoize(func) {
    const ls = []
    return function (...args) {
        // args.sort();
        let key = args.join("-")
        const ans = ls.find((arr) => {
            if (arr[0] == key) {
                return arr
            }
        })
        if (ans != null) {
            console.log(ans[1],);
        }
        else {
            let a = func(args)
            ls.push([key, a])
            console.log(a);

        }
    }
}


const slowAdd = (args) => {
    console.log("calculating");
    // console.log(args);

    let sum = args.reduce((acc, a) => {
        acc = acc + a
        return acc
    }, 0)
    return sum;
};

const fastAdd = memoize(slowAdd);

fastAdd(2, 3); // "calculating", 5
fastAdd(2, 3); // 5 (cached)
fastAdd(3, 2); // "calculating", 5


let arr = [[1, 2], [2, 3], [4, [5,[1,2,3] ,6]]]

function red(arr) {
    // if (!Array.isArray(arr)) {
    //     return arr
    // }
    // else {
        return arr.reduce((acc, a) => {
            if (Array.isArray(a)) {
                red(a).forEach(x => {
                    acc.push(x);
                })
            }
            else {
                acc.push(a)
            }
            return acc
        }, [])
    // }
}

console.log(red(arr));



function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype; 

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // Why does this happen?
console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?

console.log(myDog.name);
// delete myDog.name
genericAnimal.eat()
// console.log();