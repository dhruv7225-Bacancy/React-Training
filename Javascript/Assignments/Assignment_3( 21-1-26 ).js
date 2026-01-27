// const { version } = require("react");

// 1. Predict the output and explain the memory state.
const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: [],
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);
console.log(newRegistry);

console.log(registry.active.length); // ? --> 2
console.log(registry.active[0].name); // ? --> Gamma
console.log(registry.version);       // ? --> undefined



// 2. Identify why the following code throws an error and fix it without using the class keyword.

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

//Dog.prototype = Animal.prototype; this will overwrite dog.prototype to animal.prototype
// so now both are same and point to same reference so change to one will affect other also
// that's why obj of type animal can bark()

// and also dog is having animal.prototype so its consrtctor.name is animal


// 3. Predict the result of the following execution.
function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");
// console.log(myPhone);

console.log(myPhone.brand);    // --> "Generic"
console.log(myPhone.getBrand); // ? --> "undefined"

//new keyword will do this
// const obj={}
// obj.prototype=SmartPhone.prototype
// SmartPhone.call(obj,"Apple")
// return obj

// but constructor also return object { brand: "generic", os: "android"}
// so now myPhone will refer to new this object { brand: "generic", os: "android"}


// 4. Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.
// Requirements:
// It must handle nested objects.
// It must handle nested arrays.
// It must not copy functions by reference (they can remain shared, but the object structure must be unique).

function masterClone(obj){
    if(obj===null || typeof(obj)!=="object"){
        return obj;
    }
    let copy = Array.isArray(obj)? []:{}
    for(let key in obj){
        copy[key]=masterClone(obj[key])
    }
    return copy
}
const obj1={
    name:"dhruv",
    address: {
        home: "abcd",
        work: "xyz"
    },
    add:function add(){
        console.log("hello");
    },
    date: new Date()
}
console.log("function of newobj"+JSON.parse(JSON.stringify(obj1)).date);


const obj2=masterClone(obj1)
console.log(obj2);

obj2.address.home="asdfg"
console.log(obj1.address.home);


// 5. Trace the execution of this class logic.

class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        // ? 10
console.log(Counter.getStaticCount()); // ? 2
// console.log(c1.getStaticCount());  // ? error obj cant call static method getStaticCount exists only on the class
// It is NOT copied to instances