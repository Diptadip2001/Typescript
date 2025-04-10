var person1 = ["Diptadip", 29, true];
console.log(person1[0]); // Output: Diptadip
var displayInfo = function (person) {
    var name = person[0], age = person[1], isStudent = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Is Student: ").concat(isStudent));
};
displayInfo(person1); // Output: Name: Diptadip, Age: 29, Is Student: true
