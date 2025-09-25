"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByIndex = getByIndex;
function getByIndex(index, first, second) {
    return index === 0 ? first : second;
}
// ✅ Valid usage:
const value1 = getByIndex(0, true, false);
const value2 = getByIndex(1, 1, 2);
const value3 = getByIndex(0, 2, "example string");
const value4 = getByIndex(1, true, 7);
