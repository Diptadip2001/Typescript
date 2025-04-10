//tuple is a data structure that can hold a fixed number of elements of different types
//tuples are used to represent a collection of values that are related to each other
//tuples are often used to represent a row in a database table or a record in a file
//tuples are a way to group related values together

type PersonInfo=readonly[string,number,boolean];
let person1:PersonInfo=["Diptadip",29,true];
console.log(person1[0]); // Output: Diptadip

const displayInfo=(person:PersonInfo):void=>{
    const[name,age,isStudent]=person;
    console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);
}
displayInfo(person1); // Output: Name: Diptadip, Age: 29, Is Student: true