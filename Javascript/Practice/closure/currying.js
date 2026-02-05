// add(3,4,5)->12
// this but in sequencial markAsUntransferable


function add(a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(add(3)(4)(5));


const sum = a => b => a + b;
console.log(sum(5)(4));


// Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.

// It converts a function with multiple parameters into a sequence of functions.
// Each function takes a single argument and returns another function until all arguments are received.
// Helps in functional programming by enabling function reusability and composition.