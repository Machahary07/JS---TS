var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) return true;
            else throw new Error("Not Equal");
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) return true;
            else throw new Error("Equal");
        }
    };
};
expect(10).toBe(10);         // returns true
expect("hello").notToBe("hi"); // returns true

expect(5).toBe(6);           // throws Error: "Not Equal"
expect(true).notToBe(true);  // throws Error: "Equal"