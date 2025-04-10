const inputValue=(value:string|number): void=>{
    if(typeof value==="string"){
        console.log(value.toUpperCase());
    }
    else if(typeof value==="number"){
        console.log(value+10);
        // console.log(value);
    }
    else{
        throw new Error("Invalid type");
    }
}
inputValue("Hello");
inputValue(20);

//Homework
const userFormatInput=(value:string|number|boolean ): void=>{
    if(typeof value==="string"){
        console.log(value.charAt(0).toUpperCase()+value.slice(1).toLowerCase());
    }
    else if(typeof value==="number"){
        console.log(value.toFixed(2));
        // console.log(value);
    }
    else if(typeof value==="boolean"){
        console.log(value);
    }
    else{
        throw new Error("Invalid type");
    }
}
userFormatInput("hello");
userFormatInput(20.8364);
userFormatInput(true);

//Intersection
type Person1={
    name:string;
    age:number;
}
type person2={
    emp_id:number;
    department:string;
}
type EmployeeIntersection=Person1 & person2; //Intersection type
const employee1:EmployeeIntersection={
    name:"Diptadip",
    age:29,
    emp_id:101,
    department:"IT"
}
console.log(employee1.name); // Output: Diptadip
console.log(employee1.age); // Output: 29
console.log(employee1.emp_id); // Output: 101
console.log(employee1.department); // Output: IT
//Homework
type User={
    username:string;
    age:number;
}
type MyLocation={
    city:string;
    country:string;
}
const user:User={
    username:"Diptadip",
    age:29
};
const location1:MyLocation={
    city:"Kolkata",
    country:"India"
}

const createuserProfile=(user:User,location:MyLocation):void=>{
    console.log(`Username: ${user.username}, Age: ${user.age}`);
    console.log(`City: ${location.city}, Country: ${location.country}`);
}
createuserProfile(user,location1);