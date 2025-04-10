var Persons = /** @class */ (function () {
    function Persons(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    Object.defineProperty(Persons.prototype, "age", {
        // Corrected getter method (avoiding recursion)
        get: function () {
            return this._age;
        },
        // Correctly placed setter method
        set: function (age) {
            if (age < 0 || age > 120) {
                throw new Error("Age must be between 0 and 120.");
            }
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Persons.prototype.introduce = function () {
        return "My name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Persons;
}());
var person1 = new Persons("Diptadip", ["Reading", "Traveling"]);
person1.age = 23; // Calls the setter
console.log(person1.introduce()); // Output: My name is Diptadip and I am 23 years old.
console.log(person1.age); // Output: 23
// Access control examples
console.log(person1.name); // ✅ Allowed (Public property)
// console.log(person1.hobbies); // ❌ Error: Cannot access protected property outside the class.
