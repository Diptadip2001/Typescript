var student = {
    name: "Diptadip",
    age: 23,
    roll: 123,
    city: "Kolkata",
    state: "WB",
    country: "India"
};
console.log(student.name); // Output: Diptadip
console.log(student.age); // Output: 23
console.log(student.roll); // Output: 123
console.log(student.city); // Output: Kolkata
console.log(student.state); // Output: WB
var biodata = /** @class */ (function () {
    function biodata(name, age, roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
    biodata.prototype.display = function () {
        console.log(this.name, this.age, this.roll);
    };
    return biodata;
}());
var student2 = new biodata("Diptadip", 23, 123);
student2.display(); // Output: Diptadip 23 123
