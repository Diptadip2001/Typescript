var inputValue = function (value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value + 10);
        // console.log(value);
    }
    else {
        throw new Error("Invalid type");
    }
};
inputValue("Hello");
inputValue(20);
//Homework
var userFormatInput = function (value) {
    if (typeof value === "string") {
        console.log(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2));
        // console.log(value);
    }
    else if (typeof value === "boolean") {
        console.log(value);
    }
    else {
        throw new Error("Invalid type");
    }
};
userFormatInput("hello");
userFormatInput(20.8364);
userFormatInput(true);
var employee1 = {
    name: "Diptadip",
    age: 29,
    emp_id: 101,
    department: "IT"
};
console.log(employee1.name); // Output: Diptadip
console.log(employee1.age); // Output: 29
console.log(employee1.emp_id); // Output: 101
console.log(employee1.department); // Output: IT
var user = {
    username: "Diptadip",
    age: 29
};
var location1 = {
    city: "Kolkata",
    country: "India"
};
var createuserProfile = function (user, location) {
    console.log("Username: ".concat(user.username, ", Age: ").concat(user.age));
    console.log("City: ".concat(location.city, ", Country: ").concat(location.country));
};
createuserProfile(user, location1);
