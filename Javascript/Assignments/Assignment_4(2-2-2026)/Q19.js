// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");


// End — synchronous code runs first

// P1 — first microtask from Promise.then and schedules settimeout for T2

// P2 — second microtask

// T1 — first macrotask from setTimeout

// T2 — macrotask scheduled inside P1