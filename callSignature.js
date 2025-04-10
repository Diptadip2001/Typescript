var student1 = {
    name: "Diptadip",
    age: 29,
};
// Correct function definition
var instruction = function (student) {
    console.log("Name: ".concat(student.name, ", Age: ").concat(student.age));
};
instruction(student1);
