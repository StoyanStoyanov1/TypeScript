"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildResponse = buildResponse;
function buildResponse(base, data) {
    return Object.assign(Object.assign({}, base), data);
}
// Example 1: Combining a response's status with its data.
const response1 = buildResponse({ status: 200 }, { data: "OK" });
// Example 2: Building a response with only the base part.
const response2 = buildResponse({ status: 404 }, {});
// Example 3: Building a response with only data information.
const response3 = buildResponse({}, { message: "Not Found" });
// Example 4: Combining multiple aspects of a response.
const response4 = buildResponse({ status: 500, error: "Server Error" }, { retry: true, timeout: 3000 });
