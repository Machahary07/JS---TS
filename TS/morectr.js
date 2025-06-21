function createCounter(init) {
    var current = init;
    return {
        increment: function () { return ++current; },
        decrement: function () { return --current; },
        reset: function () { return (current = init); }
    };
}
// ❌ DO NOT name this variable 'Counter' (same as type name)
var counterObj = createCounter(5);
console.log(counterObj.increment()); // 6
console.log(counterObj.increment()); // 7
console.log(counterObj.decrement()); // 6
console.log(counterObj.reset()); // 5
