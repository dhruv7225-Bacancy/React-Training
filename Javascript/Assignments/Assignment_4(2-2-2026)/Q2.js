
// Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);
//1 3 2 
// promise is moved to microqueue and once call stack is emptied then promise is resolved