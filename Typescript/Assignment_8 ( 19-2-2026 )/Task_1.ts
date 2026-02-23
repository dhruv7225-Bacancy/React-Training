// Assignment 1
// Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.
// Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number

function wrapInArray<T> (value:T):T[]{
    return [value]
}

const numArray = wrapInArray(5);        // number[]
const strArray = wrapInArray("hello");  // string[]
console.log(numArray,strArray);


interface PaginatedResponse<T> {
  items: T[];
  total: number;
}

interface User {
  id: number;
  name: string;
}

const response: PaginatedResponse<User> = {
  items: [
    { id: 1, name: "Dhruv" },
    { id: 2, name: "abcd" }
  ],
  total: 2
};
