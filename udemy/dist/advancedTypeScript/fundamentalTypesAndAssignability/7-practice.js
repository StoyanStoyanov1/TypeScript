"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accumulator = void 0;
// Internal state for the accumulator.
let total = 0;
function accumulatorFunction(value) {
    total += value;
    return total;
}
accumulatorFunction.reset = function () {
    total = 0;
    console.log("Accumulator has been reset.");
};
exports.accumulator = accumulatorFunction;
// ✅ Valid usage: Add numbers and get the updated total.
console.log((0, exports.accumulator)(10)); // Outputs: 10
console.log((0, exports.accumulator)(5)); // Outputs: 15
// ✅ Valid usage: Reset the accumulator.
exports.accumulator.reset(); // Outputs: "Accumulator has been reset."
// ❌ Error: `nonExistentMethod` does not exist on `accumulator`.
exports.accumulator.nonExistentMethod();
// ❌ Error: Cannot assign a string to `accumulator`.
exports.accumulator = "yohoooo!";
