import { String } from "lodash";

function logAndReturn<T>(value: T): T {
  // console.log(value);
  return value;
}
const value = logAndReturn<string>("Hello, World!");
const numberValue = logAndReturn<Number>(42);
console.log(value); // Output: Hello, World!
console.log(numberValue); // Output: 42


function add<T extends number | string,U extends number|string>(a: T, b: U): T|U {
  return (a as any) + (b as any);
}

const numSum = add(10, "Hello"); // Returns a number
console.log(numSum); // Output: 30

const strSum = add("Hello, ", "World!"); // Returns a string
console.log(strSum); // Output: "Hello, World!"

function add1(a: number, b: number): number {
    return a + b;
}
const sum1 = add1(10, 20);
console.log(sum1); // Output: 30