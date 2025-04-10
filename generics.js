"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
function logAndReturn(value) {
    // console.log(value);
    return value;
}
var value = logAndReturn("Hello, World!");
var numberValue = logAndReturn(42);
console.log(value); // Output: Hello, World!
console.log(numberValue); // Output: 42
function add(a, b) {
    return a + b;
}
var numSum = add(10, "Hello"); // Returns a number
console.log(numSum); // Output: 30
var strSum = add("Hello, ", "World!"); // Returns a string
console.log(strSum); // Output: "Hello, World!"
function add1(a, b) {
    return a + b;
}
var sum1 = add1(10, 20);
console.log(sum1); // Output: 30
