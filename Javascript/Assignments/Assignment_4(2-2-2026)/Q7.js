
// Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

//Start End Promise Timeout
// start
// end
// micro queue: promise resolved first higher priority
// macro queue: setTimeout