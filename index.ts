//Typescript is a language built on top of javascript
//typescript will provide with the feature of strictly typing the variables
//typescript is a superset of javascript
//we can watch catch the errors at compile time
//typescript=javascript+type checking+compile time error checking
//typescript is a compiled language

let a="Hello";  
console.log(a);
let b=30;
console.log(b);

//at the time of declaration what value you assign to the variable it will take that type only 
//after that you cannot pass the value of another data type
let c:number=20; //Type assertion
let d:String="Diptadip";
console.log(c);
console.log(d);
// a=10;        -->Type inference
// console.log(a);
function fun():number{
    return 10+20;
}
function fun1():String{
    return "Diptadip"
}
function fun2():boolean{
    return true;
}
console.log(fun());
console.log(fun1());
console.log(fun2());

function sum(a:number,b:number):number{
    return a+b;
}

function sum1(a:number,b:number):void{
    console.log(a+b);
}
console.log(sum(10,20));
sum1(50,40);


let number:number[]=[1,2,3,4,5]; //array of numbers

let Flower:String[]=["Hello","Jasmine","Rose","Lotus"];
console.log(Flower);
console.log(number);

let dip:unknown=30;
console.log(dip);



//tsc index.ts --watch
function oddeven(a:number):boolean{
    if(a%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(oddeven(10));
console.log(oddeven(11));

let num2:any="Diptadip";
num2=30;
console.log(num2);

//