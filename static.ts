class mathOperation{
    public static add(a: number, b: number): number {
        return a + b;
    }
    public static subtract(a: number, b: number): number {
        return a - b;
    }
    public static multiply(a: number, b: number): number {
        return a * b;
    }
    public static divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }

}
console.log(mathOperation.add(10, 20)); // Output: 30
console.log(mathOperation.subtract(10, 20)); // Output: -10
console.log(mathOperation.multiply(10, 20)); // Output: 200
console.log(mathOperation.divide(30, 10)); // Output: 0.5
