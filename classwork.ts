let arr:string[]=["Jasmine","Rose","Lilly","Lotus"];
let arr1:(string|boolean)[]=[true,"Diptadip","Vishnu"];
let arr2:(boolean|number)[]=[true,20,false,30];
console.log(arr);
console.log(arr1);
console.log(arr2);

type obj={
    pname:string;
    pprice:number;
    expired:boolean;
}
let product:obj={
    pname:"Diptadip",
    pprice:100,
    expired:false
}
const abc=(obj1:obj):obj=>{
    return obj1;
}
console.log(abc(product)); // Output: { pname: 'Diptadip', pprice: 100, expired: false }
const price=(obj2:obj):number=>{
    return obj2.pprice;
}
let res=abc({pname:"Diptadip",pprice:100,expired:false});
console.log(res); // Output: 100
console.log(price(product)); // Output: 100
;

//tuples

//fixed length array with predefined types of each element
let details:readonly[string,number,boolean]=["Diptadip",29,true];
console.log(details[0]); // Output: Diptadip
console.log(details[1]); // Output: 29
console.log(details[2]); // Output: true

