//Typescript is a language built on top of javascript
//typescript will provide with the feature of strictly typing the variables
//typescript is a superset of javascript
//we can watch catch the errors at compile time
//typescript=javascript+type checking+compile time error checking
//typescript is a compiled language
var a = "Hello";
console.log(a);
var b = 30;
console.log(b);
//at the time of declaration what value you assign to the variable it will take that type only 
//after that you cannot pass the value of another data type
var c = 20; //Type assertion
var d = "Diptadip";
console.log(c);
console.log(d);
// a=10;        -->Type inference
// console.log(a);
function fun() {
    return 10 + 20;
}
function fun1() {
    return "Diptadip";
}
function fun2() {
    return true;
}
console.log(fun());
console.log(fun1());
console.log(fun2());
function sum(a, b) {
    return a + b;
}
function sum1(a, b) {
    console.log(a + b);
}
console.log(sum(10, 20));
sum1(50, 40);
var number = [1, 2, 3, 4, 5]; //array of numbers
var Flower = ["Hello", "Jasmine", "Rose", "Lotus"];
console.log(Flower);
console.log(number);
var dip = 30;
console.log(dip);
//tsc index.ts --watch
function oddeven(a) {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(oddeven(10));
console.log(oddeven(11));
var num2 = "Diptadip";
num2 = 30;
console.log(num2);
//
