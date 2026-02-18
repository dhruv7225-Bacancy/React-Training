// Assignment 5: Type Aliases
// Create reusable aliases for union and intersection types
// Refactor earlier assignments to use these aliases
// Observe how readability improves
// Create a type alias for string | number
// Use it in two variables
// How does this improve readability?


// without alias

// function printId(id: string | number) {
//   console.log(id);
// }

// let userId: string | number = 123;

//with alias

type ID = string | number;

function printId(id: ID) {
    console.log(id);
}

let userId: ID = 123;

//code readability improves

type customerName = {
    name: string
}
type customerAge = {
    age: number
}
type Customer = customerAge & customerName
function printCustomerDetails(customer: customerAge & customerName) {
    console.log(customer.name);
    console.log(customer.age);

}
const customer: Customer = {
    name: "dhruv",
    age: 20
}
printCustomerDetails(customer)