var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Persons.prototype.introduce = function () {
        return "Hello, my name is ".concat(this.name, ", I am ").concat(this.age, " years old and I like ").concat(this.hobbies.join(", "), ".");
    };
    return Persons;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, hobbies, student_id) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.student_id = student_id;
        return _this;
    }
    student.prototype.introduce = function () {
        return "Hello, my name is ".concat(this.name, ", I am ").concat(this.age, " years old and I like ").concat(this.hobbies.join(", "), ". My student ID is ").concat(this.student_id, ".");
    };
    return student;
}(Persons));
var person1 = new Persons("Diptadip", 29, ["cricket", "football"]);
var person2 = new Persons("Diya", 23, ["art", "dance"]);
console.log(person1.name); // Output: vinod
console.log(person1.age); // Output: 29
console.log(person1.hobbies); // Output: ["cricket","football"]
console.log(person2.name); // Output: Diya
console.log(person2.age); // Output: 23
console.log(person2.hobbies); // Output: ["art","dance"]
console.log(person2.introduce()); // Output: Hello, my name is Diya, I am 23 years old and I like art, dance.
console.log(person1.introduce()); // Output: Hello, my name is Diptadip, I am 29 years old and I like cricket, football.
var student1 = new student("Diptadip", 29, ["cricket", "football"], 101);
var student2 = new student("Diya", 23, ["art", "dance"], 102);
console.log(student1.name); // Output: vinod
console.log(student1.age); // Output: 29
console.log(student1.hobbies); // Output: ["cricket","football"]
console.log(student1.student_id); // Output: 101
console.log(student2.name); // Output: Diya
console.log(student2.age); // Output: 23
console.log(student2.hobbies); // Output: ["art","dance"]
console.log(student2.student_id); // Output: 102
console.log(student2.introduce()); // Output: Hello, my name is Diya, I am 23 years old and I like art, dance. My student ID is 102.
