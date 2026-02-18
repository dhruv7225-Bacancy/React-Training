// Assignment 2: any vs unknown


// Create a function that accepts any and performs operations without checks

function doTask(value: any) {
    console.log(value.toUpperCase()); //string method
    console.log(value.toFixed(2)); //number method
}
// No errors at compile time.

// Create the same function using unknown and add proper type guards

function doTaskNew(value: unknown) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); //string method
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2)); //number method
    }
    else {
        console.log("Unsupported type");
    }
}

// Compare the compiler behavior and runtime safety

// with any function doTask will crash at runtime
// but with unknown type guard are placed to check type so it is safe

// Create one variable using any

let someVar:any="dhruv"
someVar=[]
someVar={}
someVar=32

console.log(typeof someVar);

// Create another variable using unknown

let newVar:unknown="dhruv"

// Try calling methods directly on both

// someVar.toUpperCase()//crash at runtime
someVar.toFixed(2); //runs

// newVar.toFixed(2)//compile err have to use type guard
// newVar.toUpperCase()//compile err

// Which one forces you to write safer code?
// unknown forces compile time type validation