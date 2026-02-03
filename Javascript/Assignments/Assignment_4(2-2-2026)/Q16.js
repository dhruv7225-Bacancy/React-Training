// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

// C A D B
// because await pauses foo and resumes it in the microtask queue after the synchronous code finishes.