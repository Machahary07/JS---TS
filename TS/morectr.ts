type Counter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
};

function createCounter(init: number): Counter {
    let current = init;

    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => (current = init)
    };
}

// ❌ DO NOT name this variable 'Counter' (same as type name)
const counterObj = createCounter(5);

console.log(counterObj.increment()); // 6
console.log(counterObj.increment()); // 7
console.log(counterObj.decrement()); // 6
console.log(counterObj.reset());     // 5