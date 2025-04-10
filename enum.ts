//what is enum in typescript?
// enum is a special data type that allows a variable to be a set of predefined constants.
// It is a way to give more friendly names to sets of numeric values.
// Enums are a feature of TypeScript that allows you to define a set of named constants.
// Enums are a way to define a set of named constants that can be used to represent a set of related values. They are often used to represent a set of options or states in a program.

enum Roles{
    user="user",
    admin="admin",
}
type LoginDetails={
    name?:string;
    email?:string;
    password?:string;
    role:Roles;
}
const user1:LoginDetails={
    email:"diptadipsahamails@gmail.com",
    password:"123456",
    role:Roles.admin,
}
const user2:LoginDetails={
    email:"diyavincent200@gmail.com",
    password:"123456",
    role:Roles.user,
}

const isAdmin=(user:LoginDetails):void=>{
    if(user.role==Roles.admin){
        console.log("Admin User");
    }
    else{
        console.log("Normal User");
    }
}
isAdmin(user1);
