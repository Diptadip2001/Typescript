var mathOperation = /** @class */ (function () {
    function mathOperation() {
    }
    mathOperation.add = function (a, b) {
        return a + b;
    };
    mathOperation.subtract = function (a, b) {
        return a - b;
    };
    mathOperation.multiply = function (a, b) {
        return a * b;
    };
    mathOperation.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    };
    return mathOperation;
}());
console.log(mathOperation.add(10, 20)); // Output: 30
console.log(mathOperation.subtract(10, 20)); // Output: -10
console.log(mathOperation.multiply(10, 20)); // Output: 200
console.log(mathOperation.divide(30, 10)); // Output: 0.5
